const myPromise = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("foo");
  }, 3000);
});

myPromise.then(() => {
  console.log("wait is over");
});

const promise1 = new Promise((resolve, reject) => {
  setTimeout(() => {
    console.log("3 seconds over!!!");
    resolve("foo 1");
  }, 3000);
});

const promise2 = new Promise((resolve, reject) => {
  setTimeout(() => {
    console.log("4 seconds over");
    resolve("foo 2");
  }, 8000);
});

Promise.all([promise1, promise2]).then(() => {
  console.log("7 seconds is over");
});
