function equalFrequency(word) {
  for (let i = 0; i < word.length; i++) {
    let s = word.substring(0, i) + word.substring(i + 1,)
    let obj = {}
    for (let j = 0; j < s.length; j++) {
      if (obj[s[j]]) { obj[s[j]]++ } else { obj[s[j]] = 1 }
    }
    console.log({ word: s, obj })
    let o = null
    for (let k of  Object.keys(obj) ){
      if (o === null ) {
        console.log("bir defe gel")
        o = obj[k]
        console.log("first",o)
      } else if (   obj[k] != o) {
        o = false
        break
      }
    }
    // console.log({ "ooo": o })
    if (o != false) {
      return true
    }

  }
  return false
};


console.log(equalFrequency("ddaccb"))