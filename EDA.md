### Oque são eventos

- Situações que ocorreram no passado
- Normalmente deixa efeitos colaterais
- Pode trabalhar de forma internalizada no software ou externalizada
- Domain Events: Eventos de domínio:

  - Significa que algo aconteceu na camada de domínio, na camada de negócio
  - mudança no estado interno da aplicação

- Event Notification

  - É quando um sistema quer notificar outro sistema que algo mudou
  - Forma curta de comunicação

- Event Carried State Transfer

  - Formato completo para trafegar as informações
  - Stream de dados
  - Trás o dado, e não uma simples notificação. Ex: {"pedidos": 1, "produtos": [{...}]}

- Event Sourcing

  - é um padrão de design arquitetural que registra alterações em um domínio como eventos em um log de apenas adição
  - Registro de auditoria confiável
  - Consultas temporais
  - Migração para arquitetura de microsserviços
  - Prevenção de conflitos

- CQRS (Command Query Responsibility Segregation)

  - CQRS (command query responsibility segregation) trata-se de um padrão arquitetural escalável, propondo a separação das responsabilidades em canais de comunicação distintos, descritos como modelo de Escrita (command) e leitura (query). Em sua essência, o CQRS visa segregar as atividades exercidas pelos componentes do software, entre Comandos e Consultas.
  - comandos ficam responsáveis por alterar o estado da aplicação, podendo gerar eventos refletindo determinadas mudanças, ao mesmo tempo em que Consultas (queries) podem ser usadas para resgatar o estado atual da aplicação sem alterá-lo.
  - CQS vs CQRS
    - Nível de granularidade
