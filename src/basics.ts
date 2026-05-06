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

class Retard extends Person {
  gooningStatus: boolean;
  constructor(
    name: string,
    age: number,
    address: string,
    gooningStatus: boolean,
  ) {
    super(name, age, address);
    this.gooningStatus = gooningStatus;
  }

  goonFor(hours: number) {
    console.log(`${this.name} Goons for ${hours} hours.`);
  }
}

//instance
const Lodu = new Person("Lodu Mia", 24, "Noakhali");

console.log(Lodu.nameOfUser);
