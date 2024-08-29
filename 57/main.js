let p1 = new Promise((resolve, reject) => {
  console.log("Hey i am not resolved");
  setTimeout(() => {
    resolve(1);
  }, 6000);
}).then((value) => {
  console.log(value);
});

p1.then(() => {
  console.log("Hurray");
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(5);
    }, 2000);
  });
}).then((value) => {
  console.log(value);
});

p1.then(() => {
  console.log("Congratulations this promise is now resolved");
});
