"use strict"

const myObj = {
  name: "amal",
  age: 27,
  place: "kerala",
}

console.log(myObj)

// to delete a property
delete myObj.place

console.log(myObj)

// even though obj is constant , we can still assign or modify it's properties,

myObj.currPlace = "Bangalore"

console.log(myObj)

Object.freeze(myObj)
// Object.freeze()
//----------------------------
//- cannot add new property, cannot modify existing property, cannot delete property
//in normal mode, system just ignores this and doesn't throw any error
// myObj.currPlace = "Kochi"
//TypeError: Cannot assign to read only property 'currPlace' of object '#<Object>'
//myObj.age = 28
// TypeError: Cannot assign to read only property 'age' of object '#<Object>'
// delete myObj.currPlace
// TypeError: Cannot delete property 'currPlace' of #<Object>

console.log(myObj)
//----------------------------------------------
const player = {
  type: "batsman",
  age: 31,
  hand: "left",
}

Object.seal(player)
// Object.seal()
//---------------------------------
// - can only update value of existing property, cannot add new or delete a property
player.type = "All-rounder"
//player.name = "Vaithish"
// TypeError: Cannot add property name, object is not extensible

// delete player.age
// TypeError: Cannot delete property 'age' of #<Object>

const book = {
  pages: 358,
  name: "clean code",
}

Object.preventExtensions(book)
// object.preventExtensions - cannot add new property to object, can update or delete properties
// book.price = 400
// TypeError: Cannot add property price, object is not extensible
book.pages = 431
delete book.pages
