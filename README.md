* Sistema de Comunicação Genérico para as nossas aplicações:
Inspirado no WhatsApp 

* Diretrizes:
  * PubSub
  * 

Interfaces:

===========================================================================================
Para o usuário logado: (frontend)
Para o usuário sistêmico: (backend)

Síncrona:
    - criar tópicos
    - convidar usuários para um tópico
    - Lista de tópicos que esse usuário está inscrito
    - Mensagens de um dado tópico, com paginação, mais recentes que certa data
    - Posta uma mensagem em um tópico

Assincrona:
    - Saber quando o usuário logado foi inscrito em um novo tópico
    - Saber quando uma nova mensagem foi postada em um tópico que o usuário está inscrito


===========================================================================================

Modelo de dados:

Usuário: @Cognito

Tópicos:
    - id topicId
    - Nome
    - Descrição
    - Data de criação
    - Data de atualização
    - Usuário criador
    - Número de Usuários inscritos
    @ Lista de Usuários inscritos
    - Número de Mensagens postadas
    @ Lista de Mensagens postadas

Mensagens:
    - id
    - Tópico
    - Usuário
    - Data de criação
    - Data de atualização
    - Payload { JSON }
    - Anexos [ URL 1, URL 2, ...]
    @ Lista de Usuários que receberam a mensagem (MsgStatus)

Assinaturas:
    - id
    - Tópico
    - Usuário
    - Data de criação
    - Data de acknowledgement
    - Data de expiração
    - Ativa/inativa

MsgStatus:
    - id
    - Mensagem
    - Usuário
    - Data de entrega
    - Data de leitura
