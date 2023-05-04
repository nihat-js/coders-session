function quickSort(arr) {
  if (arr.length <= 1) return arr


  const pivot = arr.at(-1)
  const leftArr = []
  const rightArr = []
  for (let i = 0; i < arr.length - 1; i++) {
    if (arr[i] < pivot) {
      leftArr.push(arr[i])
    } else {
      rightArr.push(arr[i])
    }
  }

  return [...quickSort(leftArr) , pivot , ...quickSort(rightArr)];

}


let testArr = [15, 4, 2, 8, 345,  43, 32, 63, 123]





console.log(quickSort(testArr))