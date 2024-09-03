### Solid

    - Solid é um acrônimo que consolida 5 itens que são considerados como boas práticas no mundo do desenvolvimento orientado a objetos.
    - SRP = Single Responsibility Principle
    - OCP = Open-closed Principle
    - LSP = Liskov Substitution Principe
    - ISP = Interface Segregation Principle
    - DIP = Dependency Inversion Principle

      - SRP, classe ter apenas uma única responsabilidade
        - Deve ter apenas 1 motivo para mudar

      - OCP, classe deve ser aberta pra extensão mas fechada pra modificação

      - LSP, subclasses podem ser substituidas por suas classes pai

      - ISP, uma classe não é obrigada a implementar interfaces que ela não utilizará

      - DIP, dependa de abstrações e não de implementações
        - Inverter as dependências
        - Se você esta dando um new Class, Object dentro de uma classe. Provavelmente você está ferindo esse princípio.
