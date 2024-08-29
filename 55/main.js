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

// to get the value
p1.then((value) => {
  console.log(value);
});

// to catch the error
p2.then(
  (value) => {
    console.log(value);
  },
  (error) => {
    console.log(error);
  }
);
