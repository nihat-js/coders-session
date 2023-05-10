function arrayPairSum (nums) {
  nums = nums.sort((a,b) => a-b)
  let sum = 0
  for (let i=0;i<nums.length;i+=2){
      sum += nums[i]
  }
  console.log(sum)
  return sum
};


arrayPairSum([6,2,6,5,1,2])