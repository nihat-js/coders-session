function buddyStrings (s , goal){

  if (s.length > 1000){
    
  }

  if (s.length != goal.length ) { return false}
  if ( s=== goal) {
    let set = new Set(s);
    return set.size !== goal.length;
  }
  for (let i=0;i<s.length;i++){
    for (let j=i+1;j<s.length;j++){
      // if ( i == j) continue
      console.log(  s.substring(0,i) , s[j] ,  s.substring(i+1,j) , s[i]  , s.substring(j+1) )
      let t = s.substring(0,i) + s[j] +  s.substring(i+1,j) + s[i] + s.substring(j+1)
      console.log({last:t})
      if ( t== goal) {
        return true
      }
    }
  }
  return false
}

console.log(buddyStrings("aaaa","aaaa"))