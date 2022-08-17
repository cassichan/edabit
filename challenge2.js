//   1. Create a simple promise and pass the resolve function a string value of your choice. Use the setTimeout function as your asynchronous operation. Your setTimeout() function should not exceed 1000ms. Store the promise inside a variable named promise.

let promise = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("meow");
  }, 500);
});

// 2. Christmas Eve is almost upon us, so naturally we need to prepare some milk and cookies for Santa! Create a function that accepts a Date object and returns true if it's Christmas Eve (December 24th) and false otherwise. Keep in mind JavaScript's Date month is 0 based, meaning December is the 11th month while January is 0.

function timeForMilkAndCookies(date) {
  if (date.getMonth() === 11 && date.getDate() === 24) {
    return true;
  } else {
    return false;
  }
}
