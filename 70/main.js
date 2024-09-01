// sessionStorage.setItem("name", "fardin");
// sessionStorage.clear();
// sessionStorage.removeItem("name");
// sessionStorage.setItem("name", "fardin");
// sessionStorage.removeItem("name");

window.onstorage = (e) => {
  alert("changed");
  console.log(e);
};

localStorage.setItem("name", "fardin");
