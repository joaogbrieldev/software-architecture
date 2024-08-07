### Comunicação Síncrona
  - Acontece em tempo real
    - Responde na hora

### Comunicação Assíncrona
  - Não recebe a resposta na hora

### REST
  - Simplicidade
  - Stateless
  - Cacheável
  - Utilização de resources
    - verbos http - GET, POST, PUT, DELETE
    - URI - /users 
    - Operação - Buscar, inserir
  - HATEOAS
    - Sempre vai responder o endpoint, mas também trazendo informações a mais para prosseguir com a API
  - Uma boa API REST
    - Utiliza URIs únicas para serviços e itens que expostos para esses serviços
    - Utiliza todos os verbos HTTP para realizar as operações em seus recursos, incluindo caching
    - Provê links relacionais para os recursos exemplificando oque pode ser feito
  - REST: HAL
    - Media type application/hal+json
      - Contem _link: "www.test.com" => indica em que parte do sistema você está
      - _embedded: Consegue juntar informações de 2 lugares diferentes, como user/mari & user/wesley
  - REST: Options
    - Esse método permite informar quais métodos são permitidos ou não em determinado recurso
    - retorno 200 OK Allow: GET, POST
    - retorno 405 Not Allowed, Allow: GET, POST
