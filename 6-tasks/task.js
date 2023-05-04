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

function moneyATM(money) {
  let arr = []
  let exists = [5, 10, 20, 50, 100, 200, 500]

  while (money > 5) {
    for (let i = exists.length - 1; i >= 0; i--) {
      if (money >= exists[i]) {
        money -= exists[i]
        arr.push(exists[i])
        break;
      }
    }
  }


  return arr

}

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


// console.log(moneyATM(101))


function canBeIncreasing(nums) {
  let extraNum

  for (let i in nums) {
    for (let j in nums) {
      if (j == i) continue
      console.log("dont include", nums[i], nums[j])

      if (nums[j] <= (j - 1 != i ? nums[j - 1] : nums[j - 2])) { console.log("break 1 case"); break }
      if (j == (i == nums.length - 1 ? nums.length - 2 : nums.length - 1)) return true
    }
  }

  return false


}

// console.log(canBeIncreasing([1, 2, 10, 5, 7]))
// console.log(canPlaceFlowers([1,0,0,0,1],1))


function searchInsert(nums, target) {
  let lastOne
  let copy = nums.map(x=> x)
  while (nums.length > 0) {
    console.log("nn", nums)
    let mid = Math.floor(nums.length / 2)
    let repeated = false    
    nums.length == 1 ? lastOne = nums[0] : ""
    if (target == nums[mid]) return mid
    else if (target > nums[mid]) {
     nums = nums.slice(mid+1)
    } else {
      nums = nums.slice(0,mid)
    }
  }

  let findIndex = copy.findIndex( x => x == lastOne )
  console.log("Not found but last sliced index is",findIndex)
  if (target > findIndex) {
    return findIndex+1
  }else{
    return findIndex-1 > -1  ?findIndex-1 : 0
  }
  

};





// console.log("test",searchInsert([1, 3, 5,  6,13,17],8))