let p1 = new Promise((resolve, reject) => {
  setTimeout(() => {
    // resolve("Value 1");
    reject(new Error("Error"));
  }, 1000);
});

let p2 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("Value 2");
    // reject(new Error("Error"));
  }, 2000);
});

let p3 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("Value 3");
  }, 3000);
});

// p1.then((value) => {
//   console.log(value);
// });

// p2.then((value) => {
//   console.log(value);
// });

// p3.then((value) => {
//   console.log(value);
// });

// promise.all
// let promiseAll = Promise.all([p1, p2, p3]);
// promiseAll.then((value) => {
//   console.log(value);
// });

// promise.allSettled
// let promiseAllSettled = Promise.allSettled([p1, p2, p3]);
// promiseAllSettled.then((value) => {
//   console.log(value);
// });

// promise.race
// let promiseRace = Promise.race([p1, p2, p3]);
// promiseRace.then((value) => {
//   console.log(value);
// });

// promise.any
// let promiseAny = Promise.any([p1, p2, p3]);
// promiseAny.then((value) => {
//   console.log(value);
// });

// promise.resolve
let promiseResolve = Promise.resolve(6);
promiseResolve.then((value) => {
  console.log(value);
});

// promise.rejected
let promiseRejected = Promise.resolve([p1, p2, p3]);
promiseRejected.then((value) => {
  console.log(value);
});
