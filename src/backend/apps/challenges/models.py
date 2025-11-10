from django.db import models
from apps.users.models import User, Team


class Challenge(models.Model):
    """
    Modelo de Desafio de IA.
    Criado pelos administradores.
    """
    STATUS_CHOICES = [
        ('draft', 'Rascunho'),
        ('published', 'Publicado'),
        ('archived', 'Arquivado'),
    ]
    
    title = models.CharField(max_length=200, verbose_name='Título')
    description = models.TextField(verbose_name='Descrição')
    instructions = models.TextField(verbose_name='Instruções')
    notebook_template = models.FileField(
        upload_to='challenges/templates/',
        null=True,
        blank=True,
        verbose_name='Template do Notebook'
    )
    dataset_file = models.FileField(
        upload_to='challenges/datasets/',
        null=True,
        blank=True,
        verbose_name='Arquivo de Dataset'
    )
    
    status = models.CharField(
        max_length=20,
        choices=STATUS_CHOICES,
        default='draft',
        verbose_name='Status'
    )
    
    # Configurações de avaliação
    metric_type = models.CharField(
        max_length=50,
        default='accuracy',
        verbose_name='Tipo de Métrica'
    )
    
    # Gamificação
    coins_reward = models.IntegerField(default=10, verbose_name='Recompensa em Moedas')
    
    created_by = models.ForeignKey(
        User,
        on_delete=models.SET_NULL,
        null=True,
        limit_choices_to={'user_type': 'admin'},
        related_name='created_challenges'
    )
    
    created_at = models.DateTimeField(auto_now_add=True, verbose_name='Data de Criação')
    updated_at = models.DateTimeField(auto_now=True, verbose_name='Data de Atualização')
    published_at = models.DateTimeField(null=True, blank=True, verbose_name='Data de Publicação')
    
    class Meta:
        verbose_name = 'Desafio'
        verbose_name_plural = 'Desafios'
        ordering = ['-created_at']
    
    def __str__(self):
        return self.title


class ChallengeCopy(models.Model):
    """
    Cópia de desafio criada por um participante.
    Cada participante pode criar múltiplas cópias do mesmo desafio.
    """
    challenge = models.ForeignKey(
        Challenge,
        on_delete=models.CASCADE,
        related_name='copies'
    )
    participant = models.ForeignKey(
        User,
        on_delete=models.CASCADE,
        limit_choices_to={'user_type': 'participant'},
        related_name='challenge_copies'
    )
    
    copy_number = models.IntegerField(verbose_name='Número da Cópia')
    notebook_file = models.FileField(
        upload_to='challenges/copies/',
        verbose_name='Arquivo do Notebook'
    )
    
    is_submitted = models.BooleanField(default=False, verbose_name='Submetido')
    
    created_at = models.DateTimeField(auto_now_add=True, verbose_name='Data de Criação')
    updated_at = models.DateTimeField(auto_now=True, verbose_name='Data de Atualização')
    
    class Meta:
        verbose_name = 'Cópia de Desafio'
        verbose_name_plural = 'Cópias de Desafios'
        ordering = ['-created_at']
        unique_together = ['challenge', 'participant', 'copy_number']
    
    def __str__(self):
        return f"{self.challenge.title} - Cópia #{self.copy_number} - {self.participant.nickname}"


class Submission(models.Model):
    """
    Submissão de uma cópia de desafio.
    Cada cópia pode ter apenas uma submissão.
    """
    challenge_copy = models.OneToOneField(
        ChallengeCopy,
        on_delete=models.CASCADE,
        related_name='submission'
    )
    team = models.ForeignKey(
        Team,
        on_delete=models.CASCADE,
        related_name='submissions'
    )
    
    # Resultados
    accuracy = models.FloatField(verbose_name='Acurácia')
    execution_time = models.FloatField(null=True, blank=True, verbose_name='Tempo de Execução (s)')
    
    # Código submetido (backup/auditoria)
    code_snapshot = models.TextField(verbose_name='Snapshot do Código')
    
    submitted_at = models.DateTimeField(auto_now_add=True, verbose_name='Data de Submissão')
    
    class Meta:
        verbose_name = 'Submissão'
        verbose_name_plural = 'Submissões'
        ordering = ['-submitted_at']
    
    def __str__(self):
        return f"{self.team.name} - {self.challenge_copy.challenge.title} - {self.accuracy:.2%}"
    
    def save(self, *args, **kwargs):
        """Ao salvar, marca a cópia como submetida e adiciona moedas ao participante"""
        is_new = self.pk is None
        super().save(*args, **kwargs)
        
        if is_new:
            # Marca a cópia como submetida
            self.challenge_copy.is_submitted = True
            self.challenge_copy.save()
            
            # Adiciona moedas ao participante
            self.challenge_copy.participant.add_coins(
                self.challenge_copy.challenge.coins_reward
            )
