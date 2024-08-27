function clock() {
  let a = new Date();
  let hours = a.getHours();
  let minute = a.getMinutes();
  let second = a.getSeconds();
  let date = a.getDate();
  let month = a.getMonth();
  let year = a.getFullYear();

  let clock = document.getElementById("clock");
  clock.innerHTML = `${hours} : ${minute} : ${second}<br/><h1>${date}/${month}/${year}</h1>`;
}

setInterval(clock, 1000);
