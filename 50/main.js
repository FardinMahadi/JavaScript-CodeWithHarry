let btn = document.getElementById("btn");

// fetch api
const url = "https://v2.jokeapi.dev/joke/Any?blacklistFlags=nsfw";

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
      let delivery = data.delivery;
      let type = data.type;
      let joke = data.joke;

      let joke_container = document.getElementById("joke");

      if (type == "twopart") {
        joke_container.innerHTML = `<span class="highlight">Me:</span> ${setup} <br/> <br/> <span class="highlight">Joker:</span> ${delivery}`;
      }
      if (type == "single") {
        joke_container.innerHTML = `<span class="highlight">Me:</span> ${joke}`;
      }
    });
};
