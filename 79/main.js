class Employee {
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
