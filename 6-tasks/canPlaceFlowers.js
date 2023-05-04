
function canPlaceFlowers(flowerBed, n) {
  let k = 0
  for (let i = 0; i < flowerBed.length; i++) {
    if (flowerBed[i] == 0 && flowerBed[i - 1] == 0 && flowerBed[i + 1] == 0) {
      console.log(i)
      k++
    }
  }
  if (k >= n) {
    return true
  } else {
    return false
  }
}