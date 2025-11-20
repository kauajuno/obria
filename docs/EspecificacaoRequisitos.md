# **Especificação de Requisitos de Software**

> Plataforma Olimpíada de Inteligência Artificial Aplicada

## 1. Introdução
### 1.1 Objetivo
Este documento tem como objetivo definir, de forma clara, completa e verificável, os requisitos do software plataforma olimpíada de inteligência artificial aplicada. O documento servirá como base para stakeholders, desenvolvedores, testadores e gerentes de projeto, garantindo rastreabilidade, consistência e conformidade com normas e legislação vigente.

### 1.2 Escopo
O sistema proposto tem como objetivo criar uma plataforma online para gerenciamento, execução e acompanhamento da Olimpíada de Inteligência Artificial Aplicada, direcionada principalmente a alunos do ensino médio. A proposta busca oferecer um ambiente seguro, responsivo e intuitivo, além de usar o processo de gamificação para aumentar motivação e engajamento, por parte dos participantes.
	A plataforma possibilitará a publicação de desafios, a submissão de soluções em diferentes formatos para questões mais “abertas” e a execução automática de códigos em ambiente isolado para questões mais “fechadas”, com avaliação baseada em critérios pré-definidos e feedback imediato. Também permitirá gerenciar equipes, acompanhar seu progresso ao longo das etapas e aplicar desclassificações quando necessário. No entanto, não haverá módulo próprio de cadastro de usuários, pois o registro e a verificação de elegibilidade serão realizados em outro sistema, do qual serão recebidas as credenciais de login e os dados de inscrição e editais.
	O módulo de gestão de desafios contemplará a criação, edição e exclusão de provas, organizadas por categorias e níveis de dificuldade, com enunciados, datasets e arquivos auxiliares, além da divulgação do cronograma oficial, contendo prazos, etapas e conteúdos. Em cada etapa será gerado um ranking de classificação, sendo a avaliação dos desafios “fechados” automatizada e objetiva, enquanto nos desafios “abertos” poderá haver análise subjetiva, com a possibilidade de configurar os resultados manualmente, inclusive por meio da importação de planilhas.
A plataforma também apresentará informações sobre premiações, incluindo medalhas, certificados e outros prêmios, além de contar com elementos de gamificação, como conquistas, pontos de experiência, níveis de progressão, streaks de participação e badges personalizáveis.Quanto à usabilidade, será compatível com dispositivos móveis e navegadores modernos, com interface intuitiva, navegação clara e tutoriais explicativos, além de adotar boas práticas de acessibilidade digital, como suporte a leitores de tela, contraste adequado e navegação por teclado, garantindo inclusão para todos os participantes.
No aspecto da segurança, haverá mecanismos de verificação de plágio, detecção de tentativas de trapaça, controle de acesso por papéis, execução em sandbox, auditoria de atividades e proteção de dados em conformidade com a LGPD. Por fim, o sistema contará com relatórios e painéis para que professores e organizadores possam acompanhar o desempenho de alunos e equipes, com opções de exportação de dados em formatos como PDF e CSV.

### 1.3 Principais Stakeholders

* **Participante** (aluno do ensino médio): este é o público-alvo principal da Olimpíada. Conforme o regulamento, podem participar estudantes do 9º ano do Ensino Fundamental e do 1º, 2º ou 3º ano do Ensino Médio, tanto de escolas públicas quanto privadas. Seu principal papel é interagir com os desafios propostos, adquirir conhecimento por meio de cursos e participar de atividades gamificadas. Ele está sempre vinculado a uma equipe, sendo que suas ações podem impactar o desempenho coletivo no leaderboard (ranking de equipes). 
* **Tutor**: O Tutor é um usuário autenticado na plataforma, responsável por orientar e acompanhar uma equipe de estudantes na Olimpíada de Inteligência Artificial Aplicada. Seu papel principal é facilitar a participação da equipe, garantindo a inscrição inicial de si e dos três integrantes da equipe, e oferecendo apoio técnico e orientativo durante os desafios, sem, no entanto, executar as soluções diretamente. O Tutor também é fundamental para o acompanhamento do desempenho da equipe, visualizando seu progresso nos desafios e suas posições no ranking geral. Para equipes que avançam para as etapas presenciais, o Tutor atua como um apoio estratégico em momentos definidos pela organização.
*  **Tutor de mais de uma equipe**: O Tutor de mais de uma equipe é um usuário autenticado na plataforma que, além das responsabilidades de um Tutor de equipe única, possui a capacidade de orientar e acompanhar múltiplas equipes de estudantes na Olimpíada de Inteligência Artificial Aplicada. Este ator gerencia a inscrição de cada uma de suas equipes e seus respectivos integrantes, e oferece suporte técnico e orientativo individualizado para cada grupo. Seu principal objetivo é monitorar o progresso e o desempenho de todas as suas equipes nos desafios, acompanhando seus rankings de forma consolidada, e fornecendo o apoio necessário para que cada uma atinja seu potencial máximo na competição.

* **Administrador da plataforma (equipe técnica)**: esse stakeholder é responsável pela manutenção técnica e operacional da plataforma digital utilizada na Olimpíada. É o ator responsável por gerenciar conteúdos, controle de acesso, o processamento das métricas de avaliação, monitorar atividades e controlar o fluxo da competição na plataforma da Olimpíada de IA Aplicada. Possui acesso privilegiado tanto à área pública quanto à área logada da aplicação, podendo criar, editar, publicar, bloquear ou liberar conteúdos conforme as etapas da competição e o perfil dos usuários

### 1.4 Documentos relevantes
> A seguir, são apresentados os documentos-chave que servem como a principal fonte de referência para o desenvolvimento deste sistema:


* LGPD (Lei 13.709/2018): a Lei Geral de Proteção de Dados regula o tratamento de dados pessoais de todos os participantes, incluindo alunos, professores e mentores. Deve-se ter atenção especial ao tratamento de dados de menores de idade, assegurando que o uso dessas informações ocorra conforme os princípios da legislação, com consentimento e finalidade clara.

* Estatuto da Criança e do Adolescente (ECA): esse estatuto é aplicável nos casos em que há participação de alunos menores de 18 anos. Ele estabelece regras específicas sobre o uso da imagem e dos dados pessoais desses menores, além da exigência de autorização formal dos responsáveis legais para participação e exposição em quaisquer meios.

* Normas da instituição de ensino dos estudantes de ensino médio: cada instituição de ensino pode possuir diretrizes próprias que regulam a participação de alunos e professores em eventos, o uso de plataformas digitais, e a forma de comunicação entre os participantes, incluindo a interação entre alunos e mentores. Essas normas devem ser observadas para garantir conformidade institucional.

* Marco Civil da Internet (Lei 12.965/2014): essa lei trata da responsabilidade sobre os conteúdos publicados na internet, incluindo em plataformas educacionais. Também aborda questões relativas à guarda de registros de acesso, sendo essencial para definir direitos e deveres dos usuários e provedores de serviços online.
* Políticas de Acessibilidade Digital (em específico WCAG 2.1): quando o sistema é público e acessível a todos, é necessário seguir requisitos de acessibilidade digital, como os definidos pelas diretrizes WCAG 2.1. Isso garante que pessoas com deficiência possam utilizar as plataformas sem barreiras, promovendo inclusão e igualdade de acesso.
* Regulamento da Olimpíada de Inteligência Artificial Aplicada (https://olimpiadaia.ceia.ai/wiki/regulamento): o regulamento estabelece normas detalhadas para participação, estrutura da competição, critérios de avaliação, premiação e regras de conduta. A olimpíada é voltada para estudantes do 9º ano do Ensino Fundamental e do Ensino Médio de escolas públicas e privadas do Estado de Goiás, que comprovem matrícula ativa. A competição ocorre em três etapas: uma classificatória online com resolução de desafios práticos em IA (Visão Computacional, PLN e Dados Tabulares), uma etapa presencial durante a Campus Party Goiás com aprimoramento dos modelos, e uma etapa final, também presencial, com o desenvolvimento de uma solução prática para um problema real do estado de Goiás. As equipes são reorganizadas na etapa final em duplas mistas, unindo escolas públicas e privadas. A avaliação das soluções segue critérios técnicos e objetivos, como métricas de desempenho, clareza técnica, adequação ao problema e potencial de aplicação prática. Há regras específicas para desempates e desclassificação, incluindo exigências de participação mínima em treinamentos, entrega de documentação e autorização de uso de imagem. A premiação é individual e em dinheiro para estudantes e tutores, variando conforme a colocação final. A participação implica a aceitação total do regulamento, e a comissão organizadora é responsável por resolver casos omissos.


### 1.5 Sistemas relacionados
No contexto de um levantamento inicial para a definição de requisitos de uma plataforma voltada a competições acadêmicas e desafios de inteligência artificial, foi realizada uma pesquisa sobre iniciativas já consolidadas nesse domínio. O objetivo é identificar referências que combinam tanto o modelo de plataformas de competição estilo Kaggle, com foco em ciência de dados e problemas aplicados, quanto o modelo de olimpíadas de conhecimento, voltadas a estudantes do ensino médio em áreas estratégicas como programação, algoritmos e inteligência artificial. A seguir, são apresentados exemplos relevantes, organizados por categoria, que podem servir de base comparativa para orientar o projeto em desenvolvimento.
#### Plataformas estilo Kaggle
* AIcrowd
    * Categoria: Plataforma estilo Kaggle
    * Área de foco: Ciência de dados, IA, aprendizado de máquina, problemas aplicados
    *   Público-alvo: Parcial — não feito especificamente para ensino médio, mas acessível a estudantes preparados
    * Diferencial: Ampla variedade de desafios de diferentes níveis; datasets reais; comunidade ativa; premiações e reconhecimento

* DrivenData

    * Categoria: Plataforma estilo Kaggle
    * Área de foco: Ciência de dados / IA com impacto social (saúde, meio ambiente, educação, etc.)
    * Público-alvo: Parcial — similar ao AIcrowd, algumas competições exigem mais preparo técnico
    * Diferencial: Foco em impacto social (“AI for good”); soluções vencedoras frequentemente open source; transparência nos processos


#### Olimpíadas de conhecimento
* International Olympiad in Informatics (IOI)
    * Categoria: Olimpíada de conhecimento
    * Área de foco: Programação / algoritmos / informática competitiva
    * Público-alvo: Sim — estudantes do ensino médio de vários países
    * Diferencial: Reconhecimento internacional; porta de entrada para talentos em computação; preparação técnica profunda
    * Link: ioinformatics.org


* International Olympiad in Artificial Intelligence (IOAI)
    * Categoria: Olimpíada de conhecimento
    * Área de foco: Inteligência Artificial / projetos de IA / tecnologias emergentes
    * Público-alvo: Sim — estudantes do ensino médio, com categorias nacionais e internacionais
    * Diferencial: Competição recente e inovadora; foco moderno em IA; integração de etapas regionais e internacionais
    * Link: ioai-official.org

Uma plataforma de Olimpíada de Inteligência Artificial precisa integrar diferentes sistemas que garantam tanto a parte técnica quanto o engajamento dos participantes. Entre eles estão: autenticação e gestão de usuários, submissão e avaliação automática de código, repositório de datasets, ranking e gamificação, comunidade e fóruns, trilhas de aprendizado e quizzes, além de painéis administrativos, mecanismos de segurança e compliance e conexões com universidades e empresas. Juntos, esses módulos criam um ecossistema completo, que combina competição, aprendizado e reconhecimento.

## 2. Requisitos Funcionais e Não Funcionais
### 2.1 Requisitos Funcionais
**Requisitos – Tutor**

    ID: RF-01
    Fonte: Stakeholder (história de usuário – Tutor)
    Descrição: O sistema deve permitir ao tutor visualizar o desempenho de sua equipe nos desafios, incluindo histórico de submissões, códigos e métricas.
    Importância: Obrigatório
    Prioridade: Alta

    ID: RF-02
    Fonte: Stakeholder (história de usuário – Tutor)
    Descrição: O sistema deve permitir ao tutor visualizar o ranking da sua equipe em relação às outras equipes.
    Importância: Obrigatório
    Prioridade: Alta

    ID: RF-03
    Fonte: Stakeholder (história de usuário – Tutor)
    Descrição: O sistema deve permitir ao tutor acessar notícias e comunicados internos da competição.
    Importância: Desejável
    Prioridade: Média

    ID: RF-04
    Fonte: Stakeholder (história de usuário – Tutor)
    Descrição: O sistema deve permitir ao tutor acessar o perfil de cada membro da equipe, incluindo informações e conquistas.
    Importância: Opcional
    Prioridade: Baixa

    ID: RF-05
    Fonte: Stakeholder (história de usuário – Tutor)
    Descrição: O sistema deve permitir ao tutor acessar o curso de Introdução à Inteligência Artificial Aplicada.
    Importância: Desejável
    Prioridade: Média

    ID: RF-06
    Fonte: Stakeholder (história de usuário – Tutor)
    Descrição: O sistema deve permitir ao tutor visualizar o feed de publicações.
    Importância: Opcional
    Prioridade: Baixa

    ID: RF-07
    Fonte: Stakeholder (história de usuário – Tutor)
    Descrição: O sistema deve permitir ao tutor publicar textos curtos no feed.
    Importância: Opcional
    Prioridade: Baixa

    ID: RF-08
    Fonte: Stakeholder (história de usuário – Tutor)
    Descrição: O sistema deve enviar notificações ao tutor sobre o progresso da equipe.
    Importância: Desejável
    Prioridade: Média

    ID: RF-09
    Fonte: Stakeholder (história de usuário – Tutor)
    Descrição: O sistema deve enviar alertas ao tutor sobre prazos da competição.
    Importância: Desejável
    Prioridade: Média

    ID: RF-10
    Fonte: Stakeholder (história de usuário – Tutor)
    Descrição: O sistema deve disponibilizar um FAQ ou central de ajuda ao tutor.
    Importância: Desejável
    Prioridade: Média

    ID: RF-11
    Fonte: Stakeholder (história de usuário – Tutor)
    Descrição: O sistema deve permitir ao tutor acumular moedas por atividades e trocá-las na loja da plataforma. Além de visualizar a quantia de moedas, streaks e badges que possui.
    Importância: Opcional
    Prioridade: Baixa

    ID: RF-12
    Fonte: Stakeholder (história de usuário – Tutor)
    Descrição: O sistema deve permitir ao tutor personalizar sua experiência através de itens adquiridos na loja. Além da adição, personalização e configuração das badges.
    Importância: Opcional
    Prioridade: Baixa

**Requisitos – Tutor de múltiplas equipes**

    ID: RF-13
    Fonte: Stakeholder (história de usuário – Tutor múltiplo)
    Descrição: O sistema deve permitir ao tutor visualizar o desempenho consolidado de todas as suas equipes nos desafios.
    Importância: Obrigatório
    Prioridade: Alta

    ID: RF-14
    Fonte: Stakeholder (história de usuário – Tutor múltiplo)
    Descrição: O sistema deve permitir ao tutor visualizar rankings consolidados de todas as equipes que orienta. 
    Importância: Obrigatório
    Prioridade: Alta

    ID: RF-15
    Fonte: Stakeholder (história de usuário – Tutor múltiplo)
    Descrição: O sistema deve permitir ao tutor acessar perfis de membros de todas as suas equipes.
    Importância: Opcional
    Prioridade: Baixa

    ID: RF-16
    Fonte: Stakeholder (história de usuário – Tutor múltiplo)
    Descrição: O sistema deve enviar notificações ao tutor sobre o progresso de todas as suas equipes.
    Importância: Desejável
    Prioridade: Média

    ID: RF-17
    Fonte: Stakeholder (história de usuário – Tutor múltiplo)
    Descrição: O sistema deve disponibilizar painéis e relatórios para professores e organizadores, com filtros por equipe, etapa e desempenho.
    Importância: Obrigatório
    Prioridade: Média

    ID: RF-18
    Fonte: Stakeholder (história de usuário – Tutor múltiplo)
    Descrição: O sistema deve permitir filtragem e organização das informações de várias equipes em um único painel.
    Importância: Desejável
    Prioridade: Média

**Requisitos – Participante**

    ID: RF-19
    Fonte: Stakeholder (história de usuário – Participante)
    Descrição: O sistema deve permitir ao participante acessar notícias internas da competição.
    Importância: Obrigatório
    Prioridade: Alta

    ID: RF-20
    Fonte: Stakeholder (história de usuário – Participante)
    Descrição: O sistema deve permitir ao participante acessar os desafios da competição, editar e submeter soluções junto com sua equipe.
    Importância: Obrigatório
    Prioridade: Alta

    ID: RF-21
    Fonte: Stakeholder (história de usuário – Participante)
    Descrição: O sistema deve permitir ao participante criar diferentes versões de um desafio para testar estratégias antes da submissão final.
    Importância: Obrigatório
    Prioridade: Alta

    ID: RF-22
    Fonte: Stakeholder (história de usuário – Participante)
    Descrição: O sistema deve permitir a execução automática de códigos submetidos pelos participantes em ambiente sandbox, com isolamento de recursos e limitação de tempo de execução.
    Importância: Obrigatório
    Prioridade: Alta

    ID: RF-23
    Fonte: Stakeholder (história de usuário – Participante)
    Descrição: O sistema deve exibir ao participante o ranking de equipes em tempo real.
    Importância: Desejável
    Prioridade: Média

    ID: RF-24
    Fonte: Stakeholder (história de usuário – Participante)
    Descrição: O sistema deve permitir ao participante visualizar todas as submissões realizadas por sua equipe.
    Importância: Obrigatório
    Prioridade: Alta

    ID: RF-25
    Fonte: Stakeholder (história de usuário – Participante)
    Descrição: O sistema deve disponibilizar tutoriais interativos e materiais de apoio para uso da plataforma, como um curso de IA Aplicada.
    Importância: Obrigatório
    Prioridade: Baixa

    ID: RF-26
    Fonte: Stakeholder (história de usuário – Participante)
    Descrição: O sistema deve atribuir moedas, streaks e badges ao participante por concluir módulos do curso e realizar submissões.
    Importância: Obrigatório
    Prioridade: Baixa

    ID: RF-27
    Fonte: Stakeholder (história de usuário – Participante)
    Descrição: O sistema deve permitir ao participante trocar moedas por itens personalizados na loja.
    Importância: Opcional
    Prioridade: Baixa

    ID: RF-28
    Fonte: Stakeholder (história de usuário – Participante)
    Descrição: O sistema deve permitir ao participante compartilhar conquistas adquiridas na loja no feed da plataforma.
    Importância: Opcional
    Prioridade: Baixa

    ID: RF-29
    Fonte: Stakeholder (história de usuário – Participante)
    Descrição: O sistema deve permitir ao participante publicar textos curtos no feed.
    Importância: Opcional
    Prioridade: Baixa

    ID: RF-30
    Fonte: Stakeholder (história de usuário – Participante)
    Descrição: O sistema deve permitir ao participante visualizar publicações e conquistas de outros usuários no feed.
    Importância: Opcional
    Prioridade: Baixa

    ID: RF-31
    Fonte: Stakeholder (história de usuário – Participante)
    Descrição: O sistema deve permitir ao participante acessar perfis de outros usuários, incluindo conquistas e histórico de publicações.
    Importância: Opcional
    Prioridade: Baixa

    ID: RF-32
    Fonte: Stakeholder (história de usuário – Participante)
    Descrição: O sistema deve permitir ao participante comentar em publicações de outros usuários.
    Importância: Opcional
    Prioridade: Baixa

    ID: RF-33
    Fonte: Stakeholder (história de usuário – Participante)
    Descrição: O sistema deve permitir ao participante visualizar comentários em publicações.
    Importância: Opcional
    Prioridade: Baixa

    ID: RF-34
    Fonte: Stakeholder (história de usuário – Participante)
    Descrição: O sistema deve enviar notificações aos participantes também via e-mail, além da plataforma.
    Importância: Opcional
    Prioridade: Baixa

**Requisitos – Administrador (ADM)**
    ID: RF-35
    Fonte: Stakeholder (história de usuário – ADM)
    Descrição: O sistema deve permitir ao administrador publicar notícias na área pública do site.
    Importância: Desejável
    Prioridade: Média

    ID: RF-36
    Fonte: Stakeholder (história de usuário – ADM)
    Descrição: O sistema deve permitir ao administrador publicar notícias internas segmentadas para tutores e participantes.
    Importância: Desejável
    Prioridade: Média

    ID: RF-37
    Fonte: Stakeholder (história de usuário – ADM)
    Descrição: O sistema deve permitir ao administrador cadastrar novos desafios de IA, além de fornecer suporte à importação de planilhas para configuração manual de notas em desafios abertos.
    Importância: Obrigatório
    Prioridade: Baixa

    ID: RF-38
    Fonte: Stakeholder (história de usuário – ADM)
    Descrição: O sistema deve permitir ao administrador editar desafios de IA existentes, incluindo métricas.
    Importância: Opcional
    Prioridade: Baixa

    ID: RF-39
    Fonte: Stakeholder (história de usuário – ADM)
    Descrição: O sistema deve integrar mecanismos de verificação de plágio e detecção de trapaças nas submissões.
    Importância: Desejável
    Prioridade: Média

    ID: RF-40
    Fonte: Stakeholder (história de usuário – ADM)
    Descrição: O sistema deve permitir ao administrador acessar métricas de acurácia em tempo real geradas por submissões.
    Importância: Opcional
    Prioridade: Baixa

    ID: RF-41
    Fonte: Stakeholder (história de usuário – ADM)
    Descrição: O sistema deve permitir ao administrador liberar módulos e unidades do curso conforme as etapas da competição.
    Importância: Alta
    Prioridade: Média 

    ID: RF-42
    Fonte: Stakeholder (história de usuário – ADM)
    Descrição: O sistema deve permitir ao administrador acessar e exportar logs e relatórios de navegação dos usuários.
    Importância: Opcional
    Prioridade: Baixa

    ID: RF-43
    Fonte: Stakeholder (história de usuário – ADM)
    Descrição: O sistema deve permitir ao administrador ativar ou desativar conteúdos por perfil ou etapa da competição.
    Importância: Opcional
    Prioridade: Baixa

    ID: RF-44
    Fonte: Stakeholder (história de usuário – ADM)
    Descrição: O sistema deve permitir ao administrador publicar e fixar regras da comunidade no feed.
    Importância: Opcional
    Prioridade: Baixa

    ID: RF-45
    Fonte: Stakeholder (história de usuário – ADM)
    Descrição: O sistema deve permitir ao administrador visualizar publicações e comentários em ordem cronológica.
    Importância: Opcional
    Prioridade: Baixa

    ID: RF-46
    Fonte: Stakeholder (história de usuário – ADM)
    Descrição: O sistema deve permitir ao administrador apagar publicações consideradas ofensivas ou irrelevantes.
    Importância: Opcional
    Prioridade: Baixa

    ID: RF-47 
    Fonte: Stakeholder (história de usuário – ADM)
    Descrição: O sistema deve permitir ao administrador bloquear usuários de realizar novas publicações ou comentários.
    Importância: Opcional
    Prioridade: Baixa

    ID: RF-48
    Fonte: Stakeholder (história de usuário – ADM)
    Descrição: O sistema deve permitir ao administrador visualizar todas as postagens e comentários de um usuário específico.
    Importância: Opcional
    Prioridade: Baixa

    ID: RF-49
    Fonte: Stakeholder (história de usuário – ADM)
    Descrição: O sistema deve permitir ao administrador enviar notificações segmentadas para participantes, tutores ou ambos.
    Importância: Opcional
    Prioridade: Baixa

    ID: RF-50
    Fonte: Stakeholder (história de usuário – ADM)
    Descrição: O sistema deve permitir a criação, edição e visualização do cronograma oficial da competição.
    Importância: Alta
    Prioridade: Alta

    ID: RF-51
    Fonte: Stakeholder (história de usuário – ADM)
    Descrição: O sistema deve integrar-se com o sistema externo de autenticação e inscrição, recebendo dados de login e elegibilidade.
    Importância: Alta
    Prioridade: Alta

### 2.2 Requisitos Não Funcionais
    ID: RNF-01
    Fonte: Stakeholder (administração e auditoria)
    Descrição: O sistema deve registrar logs de auditoria de todas as ações administrativas e sensíveis, além de permitir incluir visualização/exportação detalhada por ADM.
    Importância: Obrigatório
    Prioridade: Alta

    ID: RNF-02
    Fonte: Stakeholder (competição em tempo real)
    Descrição: O sistema deve processar submissões com tempo de resposta inferior a 60 segundos.
    Importância: Obrigatório
    Prioridade: Alta

    ID: RNF-03
    Fonte: Stakeholder (integridade de dados)
    Descrição: O sistema deve garantir integridade dos dados de desafios, submissões e resultados através de mecanismos de verificação de plágio e detecção de trapaças.
    Importância: Obrigatório
    Prioridade: Alta

    ID: RNF-04
    Fonte: Stakeholder (confiabilidade da competição)
    Descrição: O sistema deve possuir disponibilidade mínima de 99,5% durante a competição.
    Importância: Obrigatório
    Prioridade: Alta

    ID: RNF-05
    Fonte: Stakeholder (alertas da competição)
    Descrição: O sistema deve enviar notificações críticas em tempo real, com atraso máximo de 10 segundos.
    Importância: Obrigatório
    Prioridade: Alta

    ID: RNF-06
    Fonte: Norma de usabilidade (WCAG 2.1, Lei Brasileira de Inclusão - LBI nº 13.146/2015)
    Descrição: O sistema deve estar em conformidade mínima com as Diretrizes de Acessibilidade para Conteúdo Web (WCAG 2.1) no nível AA.
    Importância: Obrigatório
    Prioridade: Alta

    ID: RNF-07
    Fonte: Stakeholder (usuários com deficiências cognitivas)
    Descrição: O sistema deve fornecer feedback claro e imediato para ações do usuário, incluindo mensagens de confirmação e erros compreensíveis.
    Importância: Desejável
    Prioridade: Média

    ID: RNF-08
    Fonte: Stakeholder (usabilidade móvel)
    Descrição: O sistema deve oferecer responsividade adaptada a dispositivos móveis, garantindo acessibilidade em telas pequenas e toque.
    Importância: Obrigatório
    Prioridade: Alta

    ID: RNF-09
    Fonte: Stakeholder / Recomendação de alinhamento visual
    Descrição: O sistema deve utilizar uma paleta de cores compatível com a identidade visual do governo estadual, incluindo a aplicação obrigatória de logotipos institucionais e padrões de comunicação oficial. O design deve respeitar as diretrizes de estética, harmonia e legibilidade, assegurando consistência visual em todas as interfaces.
    Importância: Obrigatório
    Prioridade: Alta

    ID: RNF-10
    Fonte: LGPD e ECA
    Descrição: O sistema deve disponibilizar a política de privacidade de forma visível e obter consentimento informado dos responsáveis legais para tratamento de dados de menores.
    Importância: Obrigatório
    Prioridade: Alta

    ID: RNF-11
    Fonte: LGPD
    Descrição: O sistema deve definir e aplicar tempo de retenção de dados (mínimo 1 ano), realizando anonimização ou exclusão após expiração.
    Importância: Obrigatório
    Prioridade: Alta

    ID: RNF-12
    Fonte: Stakeholder (logs de atividade)
    Descrição: O sistema deve registrar logs de acesso de participantes a desafios (data, hora, IP e ação), com possibilidade de anonimização futura para atender à LGPD.
    Importância: Obrigatório
    Prioridade: Alta

    ID: RNF-13
    Fonte: Política de segurança da informação
    Descrição: O sistema deve apresentar uma política de segurança acessível aos usuários e adotar boas práticas, incluindo armazenamento seguro de credenciais (hashing forte) e autenticação multifator para administradores.
    Importância: Obrigatório
    Prioridade: Alta

### 2.3 Restrições 
    ID: RS-01
    Fonte: Stakeholder (regra de submissão)
    Descrição: Submissões só são aceitas por participantes vinculados a equipes.
    Importância: Obrigatório
    Prioridade: Alta

    ID: RS-02
    Fonte: Stakeholder (papel do tutor)
    Descrição: O tutor não pode criar ou editar submissões de desafios.
    Importância: Obrigatório
    Prioridade: Alta

    ID: RS-03
    Fonte: Stakeholder (controle de cópias)
    Descrição: Cada cópia de desafio só pode ser submetida uma vez.
    Importância: Obrigatório
    Prioridade: Alta

    ID: RS-04
    Fonte: Stakeholder (papel do administrador)
    Descrição: O administrador não pode alterar submissões de participantes.
    Importância: Obrigatório
    Prioridade: Alta
    
    ID: RS-05
    Fonte: Stakeholder (integridade da avaliação)
    Descrição: Avaliações devem usar datasets ocultos e imutáveis.
    Importância: Obrigatório
    Prioridade: Alta