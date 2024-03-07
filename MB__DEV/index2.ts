type User = interface IPerson {
    name: string;
    email: string;
    sayMyName: () => void;
  }
  
  class Person implements IPerson {
    name: string;
    email: string;
  
    constructor(name: string, email: string) {
      this.name = name;
      this.email = email;
    }
  
    sayMyName() {
      console.log(`My name is ${this.name}`);
    }
  }
  
  const person = new Person("Leonardo", "email@email.com");
  person.sayMyName();
  