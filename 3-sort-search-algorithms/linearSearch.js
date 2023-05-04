function linearSearch(arr, number) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] == number) {
      return i;
    }
  }
  return -1
}

let testArr = [10, 50, 20, 30, 1, 88, 23, 67, 1025, 2, 7]
console.log(linearSearch(testArr,102))