function sumOddLengthSubarrays(arr){
  let sum = 0
  for (let i=1;i<=arr.length;i+=2){

    for (let j=0;j<arr.length;j++){
      if (j+i > arr.length ){
        break
      }
      let a = arr.slice(j,j+i).reduce((x,y) => x+y) 
      sum +=a
      console.log(a)
    }
    

  }
  return sum
}

sumOddLengthSubarrays([1,4,2,5,3])