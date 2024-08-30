let p = fetch("https://official-joke-api.appspot.com/random_joke");

p.then((value) => {
  console.log(value.status);
  console.log(value.ok);
  return Response.json();
  //   return value.json;
}).then((value) => {
  console.log(value);
});
