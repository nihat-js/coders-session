function binarySearch(arr, number) {
  let result = arr
  while (true) {
    result = binaryHelper(result, number)
    if (typeof result == "number") {
      return result
    }
    if (result.length == 0){
      return -1
    }
  }

}

function binaryHelper(arr, number) {
  // console.log("now",arr,number)
  let middle = Math.floor(arr.length / 2)

  if (arr[middle] == number) {
    return middle
  } else if (number > arr[middle]) {
    return arr.splice(middle + 1,)
  } else {
    return arr.splice(0, middle)
  }
}
let testArr = [10, 20, 30, 60, 100, 120, 143, 312,542, ]

console.log("Result is" + binarySearch(testArr,90))