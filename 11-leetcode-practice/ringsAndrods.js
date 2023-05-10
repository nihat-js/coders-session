
function countPoints(rings) {
  let count = 0
  let obj = { 0: [], 1: [], 2: [], 3: [], 4: [], 5: [], 6: [], 7: [], 8: [], 9: [] }



  for (let i = 0; i < rings.length; i += 2) {

    obj[rings[i + 1]].push(rings[i])
  }
  // console.log({obj })
  Object.keys(obj).forEach(k => {
    let arr = obj[k]
    if (arr.indexOf("R")  > -1 && arr.indexOf("B") > -1 && arr.indexOf("G") > -1 ){
      count++
      // console.log("bbb")
    }
  })

  return count

}

countPoints("B0B6G0R6R0R6G9")