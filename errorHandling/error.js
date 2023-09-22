const { CustomError } = require("./customError");

//Method-1 => Using Error Object

// const error = new Error("Something went wrong");
// console.log(error.message);
//throw new Error("I am from throw");
//throw new CustomError("I am custom Error");

function doSomething() {
  console.log("Function called");
  const data = fetch("localhost:3000/api");
  //   const data = "Hi there !";
  //   return data;
}

//Method-2 => Using Try & Catch

// try {
//   doSomething();
// } catch (e) {
//   console.log("Error Occurend");
//   console.log(e);
// }

//Method-3 => Using Uncaught Exception

// process.on("uncaughtException", (err) => {
//   console.log("There was an uncaught error :", err);
//   process.exit(1);
// });
// doSomething();

//Method-3 => Using Promises
// const promise = new Promise((resolve, reject) => {
//   if (false) {
//     resolve(doSomething());
//   } else {
//     reject(doSomething());
//   }
// });

// promise
//   .then((val) => {
//     console.log(val);
//   })
//   .catch((err) => {
//     console.log("Error Occured");
//     console.log(err);
//   });

//Method-3 => Using Async & Await

const someFunction = async () => {
  try {
    await doSomething();
  } catch (err) {
    throw new CustomError(err.message);
  }
};

someFunction();
