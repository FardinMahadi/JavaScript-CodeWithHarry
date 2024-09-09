message = "Good Global";
function hello() {
  let message = "Good Morning";

  // let message = "Good afternoon";
  console.log("Hello: " + message);

  let c = function hello2() {
    console.log("I am C " + message);
  };
  return c;
}
c = hello();
c();

function returnFunc() {
  const x = () => {
    let a = 1;
    console.log(a);
    const y = () => {
      //   let a = 2;
      console.log(a);
      const z = () => {
        // let a = 3;
        console.log(a);
      };
      z();
    };
    a = 999;
    y();
  };
  return x;
}

let a = returnFunc();
a();
