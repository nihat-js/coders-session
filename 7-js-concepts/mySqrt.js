function mySqrt(num) {
  if (num == 0) return 0
  for (let i = 1; i <= num; i++) {
    let sq1 = i * i
    let sq2 = (i + 1) * (i + 1)

    if (sq1 == num) return i
    if (sq2 == num) return i+1

    if (sq2 > num) return i
      // return sq2 - num < num-sq1  ? i+1 : i

  }
}


console.log(mySqrt(8))