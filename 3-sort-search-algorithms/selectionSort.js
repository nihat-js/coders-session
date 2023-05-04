
function selectionSort(arr) {
  let newArr = []
  // arr.splice(0,1)
  while (arr.length > 0) {
    // console.log("now old arr is" + arr)
    min = 0
    for (let i = 0; i < arr.length; i++) {
      if (arr[min] > arr[i]) {
        min = i
      }
    }
    // console.log("and minimum is "+ arr[min])
    newArr.push(arr[min])
    arr.splice(min, 1)
  }
  return newArr
}

