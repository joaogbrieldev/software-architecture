class AdminCategory {} // uma classe sobre uma categoria muito específica

class Person {
  getCategory() {
    return new AdminCategory(); // toda vez que RETORNAR esse método, devera passar igual a essa classe -> DEPENDÊNCIA
  }
}

class Person2 {
  category;
  setCategory(category: AdminCategory) {
    this.category = category; // toda vez que USAR esse método, devera passar igual a essa classe -> DEPENDÊNCIA
  }
} // ACOPLAMENTO MUITO FORTE

// SOLUÇÃO

// Interface ou classe abstrata que representa uma categoria
interface Category {
  getCategoryName(): string; // Define um método abstrato
}

// Implementação concreta de uma categoria específica
class AdminCategory2 implements Category {
  getCategoryName(): string {
    return "Admin Category";
  }
}

// Classe Person que agora depende da abstração (interface Category)
class PersonWithNotDependence {
  private category: Category;

  constructor(category: Category) {
    this.category = category;
  }

  getCategory(): Category {
    return this.category;
  }
}

// Exemplo de uso
const adminCategory = new AdminCategory2();
const person = new PersonWithNotDependence(adminCategory);

console.log(person.getCategory().getCategoryName()); // "Admin Category"
