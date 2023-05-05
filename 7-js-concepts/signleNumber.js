// function singleNumber(nums){
//   let obj = {8 : 1}
//   for (let x of nums){
//     typeof obj[x] == undefined ? obj[x] = "f" : obj[x] =2
//     console.log(
//     )
//     //  typeof obj[x]  === undefined ?  obj[x] = a: obj[x]+=1
//   }
//   console.log(obj)
// }


function singleNumber(nums){
  let obj = {}
  for (let i=0;i<nums.length;i++){
    if (typeof obj[nums[i]] == 'undefined' ){
      obj[nums[i]] = 1
    }else{
      obj[nums[i]] +=1
    }
  }
  return Object.keys(obj).find(key => obj[key] == 1 )
  console.log(obj)
}


let case1 = [4,1,2,1,2]
console.log(singleNumber(case1))

