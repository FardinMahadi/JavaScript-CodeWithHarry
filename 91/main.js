const sayHello = (name, greeting) => {
  console.log(greeting + " " + name);
  console.log("Hi");
};

const x = {
  name: "Fardin",
  role: "Sr Js developer",
  exp: 30,
  show: function () {
    let that = this;
    console.log(this);
    setTimeout(function () {
      console.log(`The name is ${that.name}\nThe role is ${that.role}`);
    }, 2000);
  },
};
sayHello("Fardin", "Good afternoon");

// console.log(x.name, x.exp);
x.show();
