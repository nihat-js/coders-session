function sortSentence(sentence){
  let lastNum = 1
  let newSentence = []
  sentence = sentence.split(" ")
  while(true){
    let found = false
    // console.log("sente",sentence)
    for (let x of sentence){
      if ( x.at(-1)  == lastNum){
        lastNum++
        found = true
        newSentence.push(x.substring(0,x.length-1))
        break
      }
    }
    if (!found){
      return newSentence.join(" ")
    }
  }
}

let case1="is2 sentence4 This1 a3"
console.log(sortSentence(case1))