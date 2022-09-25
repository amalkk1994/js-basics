const addBy = (num) => {
  return (val) => {
    return num + val
  }
}

const addBy10 = addBy(10)
const addBy5 = addBy(5)

console.log(addBy10(7))
console.log(addBy5(7))

const Person1 = {
  name: "amal",
  personAge: 27,
}

const PersonCpy = { ...Person1, age: Person1.personAge }

console.log(PersonCpy)

const { name, personAge: age } = Person1

const person2 = {
  name: Person1.name,
  age: Person1.personAge,
}

console.log(person2)
