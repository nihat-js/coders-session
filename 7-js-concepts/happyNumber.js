function isHappy(num) {
    let steps = 0
  while (true) {
    let digits = getDigits(num)
    let sum = 0
    for (let i = 0; i < digits.length; i++) {
      sum += digits[i] * digits[i]
    }
    num = sum
    steps++
    if (num == 1){ return true }
    if (steps == 100) { return false}
    console.log(num)
  }

}

function getDigits(num) {
  let arr = []
  while (num >= 1) {
    arr.unshift(num % 10)
    num = Math.floor(num / 10)
  }
  return arr
}

// console.log(getDigits(123))

console.log(isHappy(142))