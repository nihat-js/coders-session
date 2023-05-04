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
