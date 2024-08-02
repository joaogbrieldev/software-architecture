# software-architecture

### Entendendo quais são as diversas opções que temos para desenvolver a mesma coisa e escolher a melhor solucão para determinado contexto 
### Pensar a longo prazo no projeto e sua sustetabilidade 
### Ter mais clareza do impacto que o software possui na organização como um todo

### Características arquiteturais: Operacionais:
  -  Disponibilidade
  -  Recuperação de desastres
  -  Performance  
  -  Recuperação (backup)
  - Confiabilidade e segurança
  - Robustez
  - Escalabilidade

## Características arquiteturais: Estruturais
  - Configurável
  - Extensibilidade
  -  Fácil instalação
  - Fácil manutenção

## Características arquiteturais: Cross-cuting
  - Acessibilidade
  - Processo de retenção e recuperação de dados
  - Autenticação e autorização
  - Segurança

### Perspectiva para arquitetar software de qualidade
  - Performance
  - Escalabilidade
  - Resiliencia


### Performance - Desempenho que um software possui para completar um determinado workload
  - latência / response time
  - throughput

## software performático é diferente de escalável 
### como diminuir a latência:
	- Normalmente medida em miliseconds
	- É afetada pelo tempo de processamento da aplicação, rede e chamadas extras.
### Aumentar o throughput
	- Quantidade de requisições
	- Diretamente ligado a latência
	
### Principais razões para baixa perfomance 
	- Processamento ineficiente
	- Recursos computacionais limitados
	- Trabalhar de forma bloqueante
	
### Aumentar eficiencia
	- Aumentar a capacidade computacional
	- Lógica por trás do software (Algoritmos, queries, overhead de frameworks)
	- Concorrência e paralelismo
	- Banco de dados
	- Caching
	
### Diferença entre concorrência e paralelismo
	- CONCORRÊNCIA É SOBRE LIDAR COM MUITAS COISAS AO MESMO TEMPO E PARALELISMO É FAZER MUITAS COISAS AO MESMO TEMPO


### Cache
	- Cache na borda/Edge computing
	- Dados estáticos
	- Páginas web
	- Funções internas
		- Evita reprocessamento de algoritmos pesados
		- Acesso ao banco de dados
	- Objetos
	- Cache Exclusivo:
		- Baixa latência 
		- Duplicado entre nós 
		- Problemas relacionados a sessões
	- Cache Compartilhado: 
		- Maior latência
		- Não há duplicação
		- Sessões compartilhadas
		- Banco de dados externo
			- Redis
	- Edge Computing
		- Cache realizado mais próximo do usuário
		- Evita a requisição chegar até o Cloud Provider / Infra
		- Normalmente arquivos estáticos
		- CDN - Content Delivery Network
		- Cloudflare workers
		- Vercel
		- Akamai
	
### Escalabilidade
	- Escalabilidade é a capacidade de sistemas suportarem o aumento (ou a redução) dos workloads incrementando (ou reduzindo) o custo em menor ou igual proporção
 
### Escalabilidade vs Performance
	- Enquanto performance tem o foco em reduzir a latência e aumentar o throughput, a escalabilidade visa termos a possibilidade de aumentar ou diminuir o throughput adicionando ou removendo a capacidade computacional
	- Escala vertical 🔝 Recursos Computacionais
	- Escala Horizontal 🔜 Proxy, Microservices, Load Balancer

### Escala de banco de dados
	- Aumentando recursos computacionais
	- Distribuindo responsabilidades (escrita vs leitura)
	- Shards de forma horizontal
	- Serverless
	- Otimização de queries e índices
		- Trabalhar com índices de forma consciente
		- APM (Application performance monitoring) nas queries
		- Explain na queries
		- CQRS (Command Query Responsibility Segregation)

### Estratégias para proteger o software
	- Health check
		- Sem sinais vitais, não é possível saber a 'saúde' de um sistema 
	- Rate Limit
		- Protege o sistema baseado no que ele foi projetado para suportar
	- Circuit breaker
		- Protege o sistema fazendo com que as requisições feitas para ele sejam negadas. Ex: 500
		- Circuito fechado = Requisições chegam normalmente no sistema 
		- Circuito aberto = Requisições não chegam ao sistema. Erro instantâneo no cliente.
