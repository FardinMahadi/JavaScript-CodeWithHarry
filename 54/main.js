let promise = new Promise(function (resolve, reject) {
  alert("Hello");
  resolve(56);
});

console.log("Hello");
setTimeout(function () {
  console.log("Hello Two in 2 seconds");
}, 2000);

console.log("My name is " + "Fardin");
console.log(promise);

// fetch googl.com homepage ==> cosole.log("google.com homepage done")
// fetch data from the data api
// fetch pitcures from the server
// print downloading
// rest of the script
