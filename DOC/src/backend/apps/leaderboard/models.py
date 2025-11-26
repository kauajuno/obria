from django.db import models
from apps.users.models import Team
from apps.challenges.models import Submission


class LeaderboardEntry(models.Model):
    """Entrada no Leaderboard - calculada automaticamente"""
    team = models.OneToOneField(Team, on_delete=models.CASCADE, related_name='leaderboard_entry')
    best_submission = models.ForeignKey(Submission, on_delete=models.SET_NULL, null=True, blank=True)
    best_accuracy = models.FloatField(default=0.0, verbose_name='Melhor Acurácia')
    total_submissions = models.IntegerField(default=0, verbose_name='Total de Submissões')
    rank = models.IntegerField(default=0, verbose_name='Posição')
    updated_at = models.DateTimeField(auto_now=True)
    
    class Meta:
        verbose_name = 'Entrada do Leaderboard'
        verbose_name_plural = 'Entradas do Leaderboard'
        ordering = ['-best_accuracy', 'updated_at']
    
    def __str__(self):
        return f"{self.team.name} - {self.best_accuracy:.2%}"

