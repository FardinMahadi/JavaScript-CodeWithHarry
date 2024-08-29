let p1 = new Promise((resolve, reject) => {
  console.log("Promise is pending");
  setTimeout(() => {
    console.log("I am a promise and i am fulfilled");
    resolve(true);
  }, 5000);
});

let p2 = new Promise((resolve, reject) => {
  console.log("Promise is pending");
  setTimeout(() => {
    console.log("I am a promise and i am fulfilled");
    reject(new Error("I am an error"));
  }, 5000);
});

p1.then((value) => {
  console.log(value);
});

p2.catch((error) => {
  console.log("Some error occured in p2");
});

// p2.then((value) => {
//   console.log(value);
// });

console.log(p1);
console.log(p2);
