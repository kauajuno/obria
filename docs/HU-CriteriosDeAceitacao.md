# Histórias de Usuário

#### **ID: HU-001**
Requisitos relacionados: RF-01, RF-02, RNF-02
Como tutor, eu quero visualizar o desempenho e o ranking da minha equipe com métricas e histórico de submissões, para acompanhar o progresso e identificar pontos de melhoria em tempo real.
CRITÉRIOS DE ACEITAÇÃO

1. DADO que o tutor acessa o painel da equipe, QUANDO visualizar o resumo de desempenho, ENTÃO o sistema deve exibir as métricas consolidadas e o histórico de submissões.

2. DADO que o tutor seleciona uma submissão específica, QUANDO solicitar detalhes, ENTÃO o sistema deve apresentar as métricas de cada tentativa.

3. DADO que o tutor consulta o ranking, QUANDO o ranking for atualizado, ENTÃO o sistema deve refletir a nova posição da equipe em tempo real.

4. DADO que o tutor exporta dados, QUANDO solicitar relatório, ENTÃO o sistema deve permitir exportação em formato PDF ou CSV

#### **ID: HU-002**
Requisitos relacionados: RF-03, RF-06, RF-07
Como tutor, eu quero acessar e publicar notícias e mensagens curtas no feed interno, para manter minha equipe informada e engajada durante a competição.

CRITÉRIOS DE ACEITAÇÃO

1. DADO que o tutor acessa o feed interno, QUANDO houver publicações disponíveis, ENTÃO o sistema deve exibir as notícias mais recentes.

2. DADO que o tutor deseja publicar uma mensagem, QUANDO digitar e enviar o conteúdo, ENTÃO o sistema deve validar e publicar a mensagem no feed.

3. DADO que uma publicação viola regras da comunidade, QUANDO o tutor tentar enviar, ENTÃO o sistema deve exibir uma mensagem de erro explicando o motivo.

4. DADO que o tutor posta uma mensagem válida, QUANDO a publicação for aceita, ENTÃO o sistema deve notificar os membros da equipe.

#### **ID: HU-003**
Requisitos relacionados: RF-04, RF-05
Como tutor, eu quero acessar o perfil e as conquistas dos membros da minha equipe e visualizar conteúdos formativos como o curso de IA Aplicada, para orientar melhor meus alunos e promover aprendizado contínuo.
CRITÉRIOS DE ACEITAÇÃO

1. DADO que o tutor acessa a área da equipe, QUANDO selecionar um membro, ENTÃO o sistema deve mostrar seu perfil, conquistas e progresso.

2. DADO que o tutor acessa a área de cursos, QUANDO visualizar o curso de IA Aplicada, ENTÃO o sistema deve exibir o conteúdo e o progresso dos participantes.

3. DADO que um membro possui informações restritas, QUANDO o tutor tentar acessá-las, ENTÃO o sistema deve ocultar os dados e informar que o acesso é limitado.

4. DADO que o tutor precisa orientar a equipe, QUANDO acessar os perfis, ENTÃO o sistema deve garantir a exibição clara das conquistas e resultados.

#### **ID: HU-004**
Requisitos relacionados: RF-08, RF-09, RNF-05
Como tutor, eu quero receber notificações e alertas sobre o progresso da equipe e prazos da competição, para não perder etapas importantes e agir rapidamente.
CRITÉRIOS DE ACEITAÇÃO

1. DADO que ocorre um evento relevante, QUANDO o sistema identificar a situação, ENTÃO deve enviar uma notificação ao tutor.

2. DADO que o tutor recebe notificações, QUANDO abrir o painel de alertas, ENTÃO deve visualizar todas as mensagens recentes.

3. DADO que o canal principal esteja indisponível, QUANDO o sistema não conseguir enviar uma notificação, ENTÃO deve usar um canal alternativo.

4.  DADO que um prazo se aproxima, QUANDO faltar menos de 24 horas, ENTÃO o sistema deve emitir um lembrete automático.
#### **#### **ID: HU-005**
Requisitos relacionados: RF-10
Como tutor, eu quero acessar uma central de ajuda ou FAQ, para solucionar dúvidas sem depender do suporte técnico.
CRITÉRIOS DE ACEITAÇÃO

1. DADO que o tutor acessa a central de ajuda, QUANDO buscar um tema, ENTÃO o sistema deve exibir os artigos correspondentes.

2. DADO que o tutor não encontra resposta, QUANDO usar o formulário de contato, ENTÃO o sistema deve registrar um ticket de suporte.

3. DADO que há novos artigos disponíveis, QUANDO o tutor acessar novamente, ENTÃO o sistema deve mostrar atualizações recentes.

#### **#### **ID: HU-006**
Requisitos relacionados: RF-11, RF-12, RNF-07
Como tutor, eu quero acumular moedas, streaks e badges e personalizar minha experiência na plataforma, para aumentar minha motivação e engajamento com a comunidade.
CRITÉRIOS DE ACEITAÇÃO

1. DADO que o tutor conclui uma atividade, QUANDO completar o requisito, ENTÃO o sistema deve conceder moedas ou badges.

2. DADO que o tutor acessa sua conta, QUANDO visualizar seu perfil, ENTÃO deve ver saldo de moedas, streaks e conquistas.

3. DADO que o tutor adquire itens na loja, QUANDO confirmar a compra, ENTÃO o sistema deve aplicar a personalização escolhida.

4. DADO que o tutor não tem saldo suficiente, QUANDO tentar comprar um item, ENTÃO o sistema deve informar a falta de saldo.

#### **#### **ID: HU-007**
Requisitos relacionados: RF-13, RF-14, RF-15, RF-16, RF-17, RF-18
Como tutor de múltiplas equipes, eu quero visualizar o desempenho consolidado e rankings de todas as equipes que oriento, com filtros e relatórios personalizados, para acompanhar de forma centralizada o progresso de todos os meus grupos.
CRITÉRIOS DE ACEITAÇÃO

1. DADO que o tutor acessa o painel consolidado, QUANDO aplicar filtros, ENTÃO o sistema deve atualizar os dados conforme os parâmetros.

2. DADO que o tutor seleciona uma equipe, QUANDO abrir detalhes, ENTÃO o sistema deve exibir desempenho individual.
3. DADO que o tutor solicita relatório consolidado, QUANDO confirmar a exportação, ENTÃO o sistema deve gerar o arquivo completo.

4. DADO que não há dados disponíveis, QUANDO aplicar filtros inconsistentes, ENTÃO o sistema deve informar ausência de resultados.
#### **#### **ID: HU-008**
Requisitos relacionados: RF-19
Como participante, eu quero acessar notícias e comunicados internos da competição, para me manter informado sobre regras, prazos e resultados.
CRITÉRIOS DE ACEITAÇÃO

1. DADO que o participante acessa a área de notícias, QUANDO houver comunicados disponíveis, ENTÃO o sistema deve exibir os mais recentes.

2. DADO que o participante tenta acessar notícias restritas, QUANDO não estiver vinculado a uma equipe, ENTÃO o sistema deve limitar o acesso e informar o motivo.

3. DADO que o participante abre um comunicado, QUANDO selecionar o item, ENTÃO o sistema deve mostrar o conteúdo completo.
#### **#### **ID: HU-009**
Requisitos relacionados: RF-20, RF-21, RF-22, RS-01, RS-02, RS-03, RNF-02
Como participante, eu quero submeter códigos e soluções de desafios em ambiente seguro (sandbox), testando versões antes da submissão final, para competir com segurança, eficiência e controle sobre minhas entregas.
CRITÉRIOS DE ACEITAÇÃO

1. DADO que o participante cria uma versão de desafio, QUANDO executar em sandbox, ENTÃO o sistema deve processar o código com isolamento e devolver resultado.

2. DADO que o participante envia a submissão final, QUANDO o sistema validar, ENTÃO deve registrar no histórico e atualizar o ranking.

3. DADO que o participante não pertence a uma equipe, QUANDO tentar submeter, ENTÃO o sistema deve bloquear e informar a restrição.

4. DADO que ocorre erro na execução, QUANDO o sandbox interromper o processo, ENTÃO o sistema deve exibir mensagem explicativa.
#### **#### **ID: HU-010**
Requisitos relacionados: RF-23, RF-24
Como participante, eu quero visualizar o ranking em tempo real e o histórico de submissões da minha equipe, para acompanhar nosso desempenho e planejar melhorias.

CRITÉRIOS DE ACEITAÇÃO

1. DADO que o participante acessa o ranking, QUANDO houver atualização, ENTÃO o sistema deve mostrar a nova posição em tempo real.

2. DADO que o participante abre o histórico, QUANDO selecionar uma submissão, ENTÃO o sistema deve exibir detalhes e métricas.

3. DADO que há instabilidade no ranking, QUANDO não for possível atualizar, ENTÃO o sistema deve mostrar o último dado disponível com aviso de atualização.
#### **#### **ID: HU-011**
Requisitos relacionados: RF-25, RF-26
Como participante, eu quero acessar tutoriais e cursos interativos sobre IA e ganhar moedas, streaks e badges ao progredir, para aprender de forma prática e motivadora.
CRITÉRIOS DE ACEITAÇÃO

1. DADO que o participante acessa a área de cursos, QUANDO abrir uma unidade, ENTÃO o sistema deve exibir o conteúdo e progresso.

2. DADO que o participante conclui uma unidade, QUANDO finalizar o conteúdo, ENTÃO o sistema deve creditar recompensas e atualizar o progresso.

3. DADO que o participante abandona um curso, QUANDO sair antes de concluir, ENTÃO o sistema deve salvar o progresso parcial.
#### **ID: HU-012**
Requisitos relacionados: RF-27, RF-28
Como participante, eu quero trocar moedas por itens personalizados e compartilhar minhas conquistas no feed, para expressar minha identidade e celebrar meu progresso.
CRITÉRIOS DE ACEITAÇÃO

1. DADO que o participante acessa a loja, QUANDO visualizar itens disponíveis, ENTÃO o sistema deve exibir preços e disponibilidade.

2. DADO que o participante realiza uma compra, QUANDO confirmar a transação, ENTÃO o sistema deve aplicar o item ao perfil.

3. DADO que o participante compartilha a conquista, QUANDO publicar no feed, ENTÃO o sistema deve exibir a mensagem para outros usuários.

4. DADO que o item está indisponível, QUANDO o participante tentar comprar, ENTÃO o sistema deve informar a indisponibilidade.
#### **ID: HU-013**
Requisitos relacionados: RF-29, RF-30, RF-31, RF-32, RF-33
Como participante, eu quero interagir no feed publicando, comentando e visualizando conquistas de outros usuários, para trocar experiências e fortalecer a comunidade.
CRITÉRIOS DE ACEITAÇÃO

1. DADO que o participante acessa o feed, QUANDO houver postagens, ENTÃO o sistema deve exibir publicações recentes.

2. DADO que o participante cria uma postagem, QUANDO enviar o conteúdo, ENTÃO o sistema deve publicá-la após validação.

3. DADO que o participante comenta em uma publicação, QUANDO enviar o comentário, ENTÃO o sistema deve exibi-lo imediatamente.

4. DADO que o participante tenta postar conteúdo inadequado, QUANDO o sistema detectar violação, ENTÃO deve bloquear e exibir aviso.
#### **ID: HU-014**
Requisitos relacionados: RF-34, RNF-05
Como participante, eu quero receber notificações e alertas via plataforma e e-mail, para acompanhar atualizações mesmo fora do sistema.
CRITÉRIOS DE ACEITAÇÃO

1. DADO que ocorre um novo evento, QUANDO gerado pelo sistema, ENTÃO deve ser enviada notificação interna e e-mail.

2. DADO que o participante abre as notificações, QUANDO visualizar, ENTÃO o sistema deve mostrar detalhes do evento.

3. DADO que um e-mail não é entregue, QUANDO ocorrer falha, ENTÃO o sistema deve registrar e sugerir atualização do contato.
#### **ID: HU-015**
Requisitos relacionados: RF-35, RF-36, RNF-04
Como administrador, eu quero publicar notícias e comunicados internos e externos segmentados, para manter a comunidade informada conforme o público e a etapa.
CRITÉRIOS DE ACEITAÇÃO

1. DADO que o administrador cria um comunicado, QUANDO definir o público-alvo, ENTÃO o sistema deve publicar a notícia apenas para o segmento escolhido.

2. DADO que o comunicado exige aprovação, QUANDO submetido, ENTÃO o sistema deve aguardar autorização antes da publicação.

3. DADO que a publicação é aprovada, QUANDO liberada, ENTÃO o sistema deve exibir o conteúdo nas áreas correspondentes.
#### **ID: HU-016**
Requisitos relacionados: RF-37, RF-38, RF-39, RF-40, RS-04, RS-05, RNF-03
Como administrador, eu quero cadastrar, editar e avaliar desafios de IA com métricas e mecanismos de plágio, para garantir integridade e justiça nas avaliações.
CRITÉRIOS DE ACEITAÇÃO

1. DADO que o administrador cria um desafio, QUANDO definir enunciado e datasets, ENTÃO o sistema deve salvar e disponibilizar o desafio.

2. DADO que o administrador edita um desafio, QUANDO salvar alterações, ENTÃO o sistema deve atualizar as informações mantendo histórico.

3. DADO que o sistema recebe submissões, QUANDO processar, ENTÃO deve aplicar verificação de plágio e métricas de avaliação.

4. DADO que o administrador importa notas, QUANDO houver planilha, ENTÃO o sistema deve validar formato e aplicar resultados.
#### **ID: HU-017**
Requisitos relacionados: RF-41, RF-50
Como administrador, eu quero gerenciar o cronograma e liberar módulos de curso conforme as etapas, para alinhar o progresso de ensino e competição.
CRITÉRIOS DE ACEITAÇÃO

1. DADO que o administrador acessa o cronograma, QUANDO criar ou editar eventos, ENTÃO o sistema deve salvar e publicar as informações.

2. DADO que chega a data de liberação de um módulo, QUANDO o evento for alcançado, ENTÃO o sistema deve liberar automaticamente o conteúdo.

3. DADO que há conflito de datas, QUANDO o administrador salvar o cronograma, ENTÃO o sistema deve alertar para revisão.
#### **ID: HU-018**
Requisitos relacionados: RF-42, RNF-01, RNF-12
Como administrador, eu quero registrar e exportar logs de navegação e ações, para auditoria, rastreabilidade e conformidade com a LGPD.
CRITÉRIOS DE ACEITAÇÃO

1. DADO que o sistema registra atividades, QUANDO o administrador solicitar exportação, ENTÃO o sistema deve gerar relatório com filtros.

2. DADO que há dados sensíveis, QUANDO exportar, ENTÃO o sistema deve aplicar anonimização conforme a LGPD.

3. DADO que uma exportação é concluída, QUANDO finalizada, ENTÃO o sistema deve registrar o evento de auditoria.
#### **ID: HU-019**
Requisitos relacionados: RF-43, RF-44, RF-45, RF-46, RF-47, RF-48
Como administrador, eu quero moderar o conteúdo do feed (publicações e comentários), podendo ocultar, bloquear ou visualizar atividades por usuário, para manter um ambiente seguro e saudável.
CRITÉRIOS DE ACEITAÇÃO

1. DADO que o administrador acessa o painel de moderação, QUANDO filtrar por usuário ou data, ENTÃO o sistema deve listar publicações correspondentes.

2. DADO que o administrador identifica conteúdo ofensivo, QUANDO optar por remover, ENTÃO o sistema deve ocultar a publicação e notificar o autor.

3. DADO que o usuário contesta a remoção, QUANDO solicitar recurso, ENTÃO o sistema deve registrar o pedido e encaminhar à revisão.
#### **ID: HU-020**
Requisitos relacionados: RF-49, RNF-05
Como administrador, eu quero enviar notificações segmentadas em tempo real, para comunicar rapidamente decisões, prazos ou alertas específicos.
CRITÉRIOS DE ACEITAÇÃO

1. DADO que o administrador cria uma notificação, QUANDO definir público e prioridade, ENTÃO o sistema deve enviá-la imediatamente.

2. DADO que há grande volume de mensagens, QUANDO ultrapassar a capacidade, ENTÃO o sistema deve priorizar notificações críticas.

3. DADO que o envio é concluído, QUANDO processado, ENTÃO o sistema deve registrar métricas de entrega.
#### **ID: HU-021**
Requisitos relacionados: RF-51, RNF-13
Como administrador, eu quero integrar a plataforma com o sistema externo de autenticação e inscrição e aplicar boas práticas de segurança, para garantir acesso confiável e proteger dados sensíveis.
CRITÉRIOS DE ACEITAÇÃO

1. DADO que o administrador configura integração, QUANDO inserir credenciais corretas, ENTÃO o sistema deve validar e conectar-se ao serviço externo.

2. DADO que a integração falha, QUANDO ocorrer erro, ENTÃO o sistema deve exibir mensagem e manter login alternativo.
3. DADO que a autenticação é bem-sucedida, QUANDO o usuário acessa, ENTÃO o sistema deve garantir acesso seguro conforme perfil.
#### **ID: HU-022**
Requisitos relacionados: RNF-06, RNF-07, RNF-08
Como usuário com deficiência, eu quero acessar a plataforma com recursos de acessibilidade, responsividade e feedback claro, para interagir com autonomia e inclusão.
CRITÉRIOS DE ACEITAÇÃO

1. DADO que o usuário ativa modo acessível, QUANDO habilitar o recurso, ENTÃO o sistema deve ajustar contraste, navegação e leitores de tela.

2. DADO que o usuário realiza uma ação, QUANDO houver resposta, ENTÃO o sistema deve exibir feedback textual e sonoro conforme configuração.

3. DADO que um recurso não é compatível, QUANDO detectado, ENTÃO o sistema deve oferecer alternativa equivalente.
#### **ID: HU-023**
Requisitos relacionados: RNF-09
Como usuário, eu quero visualizar a plataforma dentro da identidade visual do governo estadual, para reconhecer legitimidade e coerência institucional.
CRITÉRIOS DE ACEITAÇÃO

1. DADO que o usuário acessa o site, QUANDO carregar a interface, ENTÃO o sistema deve aplicar paleta e logotipos oficiais.

2. DADO que o tema visual conflita com acessibilidade, QUANDO ativado modo de alto contraste, ENTÃO o sistema deve ajustar cores mantendo identidade.
#### **ID: HU-024**
Requisitos relacionados: RNF-10, RNF-11
Como responsável legal, eu quero visualizar a política de privacidade e conceder consentimento para tratamento de dados do participante, para garantir conformidade com a LGPD e o ECA.
CRITÉRIOS DE ACEITAÇÃO

1. DADO que o responsável acessa a tela de consentimento, QUANDO visualizar o documento, ENTÃO o sistema deve exibir a política de forma clara.

2. DADO que o responsável concede consentimento, QUANDO confirmar, ENTÃO o sistema deve registrar o termo e vincular ao participante.

3. DADO que o responsável nega consentimento parcial, QUANDO escolher opções, ENTÃO o sistema deve limitar funcionalidades conforme seleção.
#### **ID: HU-025.**
Requisitos relacionados: RNF-13.
Como administrador, eu quero aplicar autenticação multifator e armazenamento seguro de credenciais, para proteger contas administrativas e reduzir riscos de invasão.
CRITÉRIOS DE ACEITAÇÃO

1. DADO que o administrador acessa a configuração de segurança, QUANDO ativar a autenticação multifator, ENTÃO o sistema deve exigir verificação adicional.

2. DADO que ocorre login de administrador, QUANDO usar credenciais válidas, ENTÃO o sistema deve validar também o segundo fator.

3. DADO que o dispositivo de autenticação é perdido, QUANDO o administrador acionar recuperação, ENTÃO o sistema deve aplicar verificação extra e registrar incidente.