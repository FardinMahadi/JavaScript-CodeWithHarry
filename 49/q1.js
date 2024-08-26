let id1 = document.getElementById("id1");
let id2 = document.getElementById("id2");
let id3 = document.getElementById("id3");
let id4 = document.getElementById("id4");
let id5 = document.getElementById("id5");

let btn1 = function (e) {
  alert("Button '1' was clicked!");
};
let btn2 = function (e) {
  alert("Button '2' was clicked!");
};
let btn3 = function (e) {
  alert("Button '3' was clicked!");
};
let btn4 = function (e) {
  alert("Button '4' was clicked!");
};
let btn5 = function (e) {
  alert("Button '5' was clicked!");
};

id1.addEventListener("click", btn1);
id2.addEventListener("click", btn2);
id3.addEventListener("click", btn3);
id4.addEventListener("click", btn4);
id5.addEventListener("click", btn5);
