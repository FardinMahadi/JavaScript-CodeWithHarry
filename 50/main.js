let btn = document.getElementById("btn");

// fetch api
const url = "https://official-joke-api.appspot.com/random_joke";

let x = function () {
  let index = Math.floor(Math.random() * 29);
  fetch(url)
    .then((res) => {
      return res.json();
    })
    .then((data) => {
      console.log(data.setup);
      console.log(data.punchline);

      let setup = data.setup;
      let punchline = data.punchline;
      let joke = document.getElementById("joke");
      joke.innerHTML = `<span class="highlight">Me:</span> ${setup} <br/> <br/> <span class="highlight">Joker:</span> ${punchline}`;
    });
};
