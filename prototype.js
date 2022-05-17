const myObject = {
  city: "Bangalore",
  greet() {
    console.log(`greetings from  ${this.city}`);
  },
};

// myObject.greet();

// console.log(Object.getPrototypeOf(myObject));

const myDate = new Date();
let object = myDate;

do {
  object = Object.getPrototypeOf(object);
  // console.log(object);
} while (object);

// creating a prototype using Obkect.create

const personPrototype = {
  greet() {
    console.log("hello!!");
  },
};

const carl = Object.create(personPrototype);

carl.greet();

// using constructor

const personPrototype2 = {
  greet() {
    console.log(`Hello i'm ${this.name}`);
  },
};

function Person(name) {
  this.name = name;
}

Person.prototype = personPrototype2;
Person.prototype.constructor = Person;

const ruben = new Person("Ruben");

ruben.greet();
