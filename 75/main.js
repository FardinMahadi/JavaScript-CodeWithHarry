let a = {
  name2: "Fardin",
  language: "JavaScript",
  run: () => {
    alert("self run");
  },
};
console.log(a);

let p = {
  run: () => {
    alert("run");
  },
};

p.__proto__ = {
  name: "jakie",
};

a.__proto__ = p;
a.run();

console.log(a.name);
