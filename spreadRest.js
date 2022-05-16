const obj1 = {
  name: "king",
  age: "26",
};

const obj2 = { obj1, address: "thanjavur" };

console.log("without spread new object", obj2);

const arr1 = [1, 2, 3, 4];
const arr2 = [arr1, 5, 6];

console.log("array without spread", arr2);

// without spread the first value is an object itself
// spread will expand an object or an array

const obj3 = {
  name: "king",
  age: "26",
};

const obj4 = { ...obj3, address: "thanjavur" };

console.log("without spread new object", obj4);

const arr3 = [1, 2, 3, 4];
const arr4 = [...arr3, 5, 6];

console.log("array without spread", arr4);

// rest operator, ususallt used for functions accepting n arguments

const { name, ...details } = obj4;

console.log("name", name);
console.log("details", details);
