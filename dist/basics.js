"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Person {
    name;
    age;
    address;
    constructor(name, age, address) {
        this.name = name;
        this.age = age;
        this.address = address;
    }
    get nameOfUser() {
        return this.name;
    }
}
//instance
const Lodu = new Person("Lodu Mia", 24, "Noakhali");
console.log(Lodu.nameOfUser);
//# sourceMappingURL=basics.js.map