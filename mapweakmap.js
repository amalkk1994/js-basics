// javascript object supports only one key object, to support multiple key objects,
// map and weak map was introduced.

// Map: A Map is an unordered list of key-value pairs where the key and the value can be of any type
//like string, boolean, number, etc. For better understanding,
// we take an example of Map and its properties.

const myMap = new Map();

myMap.set("info", { name: "Sam", age: 22 });

console.log(myMap);
console.log(myMap.get("info"));

console.log("check if info is present or not:", myMap.has("info"));
console.log("No of elements in the map:", myMap.size);

myMap.delete("info");

console.log("After deletion", myMap);

const map2 = new Map();

map2.set("name", "sam");
map2.set("age", 23);

console.log("map2", map2);

// looping through Map
map2.forEach(function (value, key) {
  console.log(key + "- " + value);
});

const obj1 = { key: 1 };
const obj2 = { key: 2 };
const map3 = new WeakMap([
  [obj1, "2"],
  [obj2, "4"],
]);

console.log("map3", map3.get(obj1));

//weakmap can accept only object as key
