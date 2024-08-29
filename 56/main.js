// let p1 = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     console.log("Resolved after 2 seconds");
//     resolve(56);
//   }, 2000);
// });

// p1.then((value) => {
//   console.log(value);
//   let p2 = new Promise((resolve, reject) => {
//     setTimeout(() => {
//       resolve("Promise 2");
//     }, 2000);
//   });
//   return p2;
// })
//   .then((value) => {
//     console.log("We are done");
//     return 2;
//   })
//   .then((value) => {
//     console.log("Now we are pakka done");
//   });

const loadScript = (src) => {
  return new Promise((resolve, reject) => {
    let script = document.createElement("script");
    script.type = "text/javascript";
    script.src = src;
    document.body.appendChild(script);
    script.onload = () => {
      resolve("Script has been loaded");
    };
    script.onerror = () => {
      reject(0);
    };
  });
};

let p1 = loadScript(
  "https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.12.9/umd/popper.min.js"
);

p1.then((value) => {
  console.log(value);
  return loadScript(
    "https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.12.9/umd/popper.min.js"
  );
})
  .then((value) => {
    console.log(value);
    console.log("Second script ready");
  })
  .catch((error) => {
    console.log(
      "We are sorry but we are having a problem loading the script. "
    );
  });
