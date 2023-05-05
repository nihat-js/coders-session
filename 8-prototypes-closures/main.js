const animal = {
  walk : function () { console.log("walking ...") },

}

String.prototype.capitalize = function (){
  return this.slice(0,1).toLocaleUpperCase() + this.slice(1).toLocaleLowerCase()
}


String.prototype.insertPlus = function (){
  return this.slice(0,Math.floor(this.length/2)) + "+" + this.slice(Math.floor(this.length/2),)
}

Number.prototype.double = function () { return this*2 }

// console.log("debuggin".insertPlus())


// console.log( 15..dou//9ble() )
console.log( (15).double() )


Array.prototype.push = function(x){
  console.log('de')
  return [...this,x]
}

console.log([1,5,10].push(30))


function add (x){
  let total=0
  return function(){
    total++
    return total
  }
}

function rectangle()


let a = add()

a()
a()
a()

console.log(a())

