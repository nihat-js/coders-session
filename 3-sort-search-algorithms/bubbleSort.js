function bubbleSort(arr) {
  for (let i = 0; i < arr.length; i++) {
    for (let j = i; j < arr.length; j++) {
      if (arr[i] > arr[j]) {
        [arr[i], arr[j]] = [arr[j], arr[i]]
      }
    }
  }
  return arr
}

let testArr = [10, 50, 20, 30, 1, 88, 23, 67, 1025, 2, 7]

console.log(bubbleSort(testArr))