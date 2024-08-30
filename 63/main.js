// question 1
function loadScript(src, callback) {
  let script = document.createElement("script");
  script.src = src;
  script.onload = () => {
    callback(script);
  };
  document.head.append(script);
}
loadScript(
  "https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0-beta.2/js/bootstrap.min.js",
  (script) => {
    console.log("Script is loaded");
    console.log(script.src);
  }
);

// question 2
const loadScript2 = async (src) => {
  return new Promise((resolve, reject) => {
    let script = document.createElement("script");
    script.src = src;
    script.onload = () => {
      resolve(src);
    };
    document.head.append(script);
  });
};

const main2 = async () => {
  let a = await loadScript2(
    "https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0-beta.2/js/bootstrap.min.js"
  );
  console.log(a);
  console.log("Script is loaded");
};
main2();

// question 3
// incomplete
