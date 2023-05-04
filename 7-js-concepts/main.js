// async class await promise callback rest spread closure  deconstructing prototypes inheritance 


function strS(haystack, needle) {



  for (let i=0;i<haystack.length;i++ ) {
    for (let j=0;j<needle.length;j++) {
      console.log("tester ",haystack[i] ,haystack[i+j])
      if (haystack[i + j] != needle[j]) {
        break
      }
      if (j == needle.length - 1) {
        return i
      }
    }
  }
  return -1
}
console.log(strS("sadbutsad", "but"))