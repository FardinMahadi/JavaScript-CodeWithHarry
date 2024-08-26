setInterval(async function () {
  let url = "https://jsonplaceholder.typicode.com/posts";
  console.log(await fetchContent(url), 10000);
});
