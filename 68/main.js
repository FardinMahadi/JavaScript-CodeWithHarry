console.log(document.cookie);
document.cookie = "name=fardin2015";
document.cookie = "name2=fardin2015";
document.cookie = "name=fardin";
let key = prompt("Enter your value: ");
let value = prompt("Enter your value: ");
document.cookie = `${encodeURIComponent(key)}=${encodeURIComponent(value)}`;
console.log(document.cookie);
