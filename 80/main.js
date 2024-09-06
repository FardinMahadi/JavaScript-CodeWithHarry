class Employee {
  constructor(name) {
    console.log(`${name} - employee constractor is here.`);
    this.name = name;
  }
  logIn() {
    console.log(`Employee has logged in.`);
  }
  logOut() {
    console.log(`Employee has logged out.`);
  }
  requestLeaves(leaves) {
    console.log(`Employee has requested ${leaves} leaves - Auto approved`);
  }
}

class Programmer extends Employee {
  constructor(name) {
    super(name);
    console.log(`This is a newly written constructor.`);
    this.name = name;
  }
  //   constructor(...args) {  --> If there is no constructor in the child class, this is created automatically
  //     super(...args);
  //   }
  requestCoffee() {
    console.log(`Employee has requested ${x} coffee.`);
  }
  requestLeaves(leaves) {
    super.requestLeaves(4);
    console.log(`One extra is granted.`);
  }
}

let e = new Programmer("Fardin");
e.logIn();
e.requestLeaves(3);
