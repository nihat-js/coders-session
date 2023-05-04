
function quickSort(arr) {

  let pivot = arr[0]
  let left = []
  // let leftPivot 
  let right = []
  // let rightPivot = 
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] > pivot) {
      right.push(arr[i])
    } else {
      left.push(arr[i])
    }
  }
  arr = [...left, pivot, ...right]
  console.log(arr)
}

function quickSortMethod(arr) {
  if (arr.length <= 1) {
    return arr
  }
  let pivot = arr[0]
  let left = []
  let right = []

  for (let i = 1; i < arr.length; i++) {
  }

  return [...left]
}


quickSort([10, 50, 20, 30, 1, 88, 23, 67, 1025, 2, 7])