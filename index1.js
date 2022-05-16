// 1.

/*
console.log(1);

setTimeout(function () {
  console.log(2);
}, 1000);
setTimeout(function () {
  console.log(3);
}, 0);

console.log(4);
*/

// output 1, 4, 3, 2

// 2.

/*
function x() {
  setTimeout(function () {
    console.log(i);
  }, 1000);

  var i = 1;
}

x();
*/

/*
function sum(num) {
  let tot;
  if (num > 0) {
    return num + sum(num - 1);
  } else {
    return num;
  }
}

console.log(sum(3));

var a = [1, 1, 2];

[...new Set(a)];
*/

let a = 5;

const printout = () => {
  console.log("a:", a);
};

printout();

{
  var val1 = 100;
  let val2 = 20;
}

console.log("val1", val1);
console.log("val2", val2);
