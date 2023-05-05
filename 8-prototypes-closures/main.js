String.prototype.capitalize = function () {
  return this.slice(0, 1).toLocaleUpperCase() + this.slice(1).toLocaleLowerCase()
}
String.prototype.insertPlus = function () {
  return this.slice(0, Math.floor(this.length / 2)) + "+" + this.slice(Math.floor(this.length / 2),)
}
Number.prototype.double = function () { return this * 2 }

Array.prototype.push = function (x) {
  console.log('de')
  return [...this, x]
}

function add(x) {
  let total = 0
  return function () {
    total++
    return total
  }
}

function Rectangle(w, h) {
  this.w = w
  this.h = h
}
Rectangle.prototype.getArea = function () {
  return this.w * this.h
}


function Person(name, age) {
  this.name = name
  this.age = age
}
Person.prototype.introduce = function () {
  return "Hi " + this.name + " " + this.age
}


function Animal(name) {
  this.name = name
}
Animal.prototype.eat = function () {
  console.log("Animal is eating...")
}


Array.prototype.last = function () {
  return this.length == 0 ? -1 : this.at(-1)
}
