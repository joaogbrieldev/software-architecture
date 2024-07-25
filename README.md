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
		- 
