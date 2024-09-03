class Course {
  tec;
  category;

  connection() {
    throw new Error("IM CONNECT TO DB");
  }

  createCourse() {
    throw new Error("IM CREATE A NEW USER");
  }

  // Ferindo o princípio SRP, classe ter apenas uma única responsabilidade
}

class Pessoa {
  nome;

  constructor(nome) {
    this.nome = nome;
  }

  get getNome() {
    return this.nome;
  }

  set setNome(novoNome) {
    if (novoNome.length >= 3) {
      this.nome = novoNome;
    } else {
      console.log("O nome deve ter pelo menos 3 caracteres.");
    }
  } // Exemplo de classe com apenas uma única responsabilidade, usando getters e setters por exemplo
}
