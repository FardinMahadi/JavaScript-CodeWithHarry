class Animal {
  constructor(name) {
    this._name = name;
  }
  fly() {
    console.log("ami urtesi");
  }
  get name() {
    return this._name;
  }
  set name(newName) {
    this._name = newName;
  }
}

class Rabbit extends Animal {
  eatCarrot() {
    console.log("Eeating carrot");
  }
}

let a = new Rabbit("Bunny");
a.fly();
console.log(a.name);
a.name = "Ponny";
console.log(a.name);
let c = 53;

console.log(a instanceof Animal);
console.log(c instanceof Animal);
