try {
  let age = prompt("Enter your age: ");
  age = Number.parseInt(age);
  if (age > 150) {
    throw new ReferenceError("This is probably not true");
  }
  console.log("Fardin");
  throw new ReferenceError("Fardin is not good");
} catch (error) {
  console.log(error.name);
  console.log(error.message);
  console.log(error.stack);
}

console.log("The script is still running");
