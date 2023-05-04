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
