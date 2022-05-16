// 1. shallow copy

const obj1 = {
  name: "king",
  age: "26",
};

const obj2 = obj1;

obj2.name = "Tintu"; // here the reference is copied and hence original value is lost

console.log(obj1);

// 2 deep copy - cloning
const obj3 = {
  name: "king",
  age: 26,
};

const obj4 = { ...obj3 };

obj4.name = "Tintu";

console.log(obj3);
console.log(obj4);

const obj5 = Object.assign({}, obj3);
obj5.name = "Critho";

console.log(obj3);
console.log(obj5);

// spread and object assign will perform only shallow copy if there are nested objects
// nested objects are still copied as reference.

const obj6 = JSON.parse(JSON.stringify(obj3));

obj6.name = "Tharun";

console.log(obj6);
