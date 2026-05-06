class Person {
  readonly name: string;
  readonly age: number;
  readonly address: string;

  constructor(name: string, age: number, address: string) {
    this.name = name;
    this.age = age;
    this.address = address;
  }

  public get nameOfUser() {
    return this.name;
  }
}

//instance
const Lodu = new Person("Lodu Mia", 24, "Noakhali");

console.log(Lodu.nameOfUser);
