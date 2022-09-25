const person = {
  name: "Amal",
  getName: function (message) {
    return message + " " + this.name
  },
}

console.log("person's name:" + person.getName("Hi"))

const getPersonName = person.getName

console.log(getPersonName.call({ name: "venky" }, "Hello"))
console.log(getPersonName.apply({ name: "Anjana" }, ["Hello Ms"]))

const getAapath = getPersonName.bind({ name: "Aapath" }, "Mr")

console.log("getAapath", getAapath)
console.log(getAapath())
