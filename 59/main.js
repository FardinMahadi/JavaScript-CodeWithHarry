async function fardin() {
  let dhakaWeather = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("32 deg");
    }, 1000);
  });

  let narsingdiWeather = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("33 deg");
    }, 3000);
  });

  // dhakaWeather.then(alert);
  // narsingdiWeather.then(alert);

  console.log("Fetching Dhaka Weather. Please wait....");
  let dhakaW = await dhakaWeather;
  console.log("Fetched Dhaka Weather: " + dhakaW);

  console.log("Fetching Narsingdi Weather. Please wait....");
  let narsingdiW = await narsingdiWeather;
  console.log("Fetched Narsingdi Weather: " + narsingdiW);

  return [dhakaW, narsingdiW];
}

const charry = () => {
  console.log("Hey i am charry and i am waiting");
};

const main1 = async () => {
  console.log("Welcome to weather control room");
  let a = await fardin();
  let b = await charry();
};

main1();
