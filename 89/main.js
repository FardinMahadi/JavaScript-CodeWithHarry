console.log(a);
// great();
var great = function () {
  console.log("Good Morning.");
};
great();

var a = 9; // Declaration hoisted to the top but initialization is not
console.log(a);

// console.log(b);
// let b = 8; // Cannot access 'b' before initialization
// console.log(b);
