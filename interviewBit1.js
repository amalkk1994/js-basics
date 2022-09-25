function func1() {
  setTimeout(() => {
    console.log(x);
    console.log(y);
  }, 3000);

  var x = 2;
  let y = 12;
}

//func1();
// outputs 2 and 12, even though let keyword won''t get hoisted,
// the program parses the variable before the execution of the callback function.

function func2() {
  for (var i = 0; i < 3; i++) {
    setTimeout(() => console.log(i), 2000);
  }
}

//func2();
// returns 3 3 3 as var is not block scoped

function func3() {
  for (let i = 0; i < 3; i++) {
    setTimeout(() => console.log(i), 2000);
  }
}

//func3();
// returns 0 1 2, since let is block scoped

function func4() {
  for (const i = 0; i < 3; i++) {
    setTimeout(() => console.log(i), 2000);
  }
}

// func4();
// throws error assignment to constant variable;

function func5() {
  for (var i = 0; i < 3; i++);
  {
    setTimeout(() => console.log(i), 2000);
  }
}

//func5();
// returns 3 once, since ; ends the loop, same code will throw reference error
//if let is used, since let is block scoped

/*
(function () {
  setTimeout(() => console.log(1), 2000);
  console.log(2);
  setTimeout(() => console.log(3), 0);
  console.log(4);
})();
*/

//2 4 3 1

let x = {},
  y = { name: "Ronny" },
  z = { name: "John" };

x[y] = { name: "Vivek" };
x[z] = { name: "Akki" };

//console.log(x[y]);
// returns Akki as, js does type coerscion, so y and z will become object Object

function runFunc() {
  console.log("1" + 1);
  console.log("A" - 1);
  console.log(2 + "-2" + "2");
  console.log("Hello" - "World" + 78);
  console.log("Hello" + "78");
}

//runFunc();

console.log(typeof null);
// type of null is an object

const a = 0;
const b = false;

console.log(a == b);
console.log(a === b);
