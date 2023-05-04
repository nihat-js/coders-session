let arr1 = [1, 4, 26, 4, 7, 9, 13]


function order(arr) {
  let odd = []
  let even = []
  for (let el of arr) {
    el % 2 == 0 ? even.push(el) : odd.push(el)
  }
  odd.sort((a, b) => a - b)
  even.sort((a, b) => a - b)

  return [...odd,...even]

}

console.log(order(arr1))