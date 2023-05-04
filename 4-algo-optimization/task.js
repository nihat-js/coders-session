
// 1 5 10 
// 2 3 9 12

function findIntersection_() {
  let result = []
  for (let i = 0; i < arr1.length; i++) {
    for (let j = 0; j < arr2.length; j++) {
      if (arr1[i] == arr2[j]) {
        result.push(arr1[i])
        break;
      } else if (arr2[j] > arr1[i]) {
        break
      }
    }
  }
  return result
}




function findIntersection(arr1, arr2) {
  if (arr1.length == 0 || arr2.length == 0) {
    return []
  }
  let result = []
  let i = 0, j = 0

  let pointer = 0

  while (i < arr1.length) {
    console.log("i and j", i, j)
    if (arr1[i] == arr2[j]) {
      result.push(arr1[i])
      let pointer = j
      i++
    }

    else if (arr1[i] < arr2[j]) {
      j = pointer
      i++
    } else if (j == arr1.length - 1) {
      i++
      j = pointer
    } else {
      j++
    }


  }

  return result

}

let arr1 = [1, 2, 5, 15, 25, 39, 62, 300, 500]

let arr2 = [3, 5, 12, 59, 72, 120, 240, 300, 700, 1200]

// console.log("intersection of " + findIntersection_(arr2, arr1))




function palindromeChecker(text) {
  if (!text) return false
  return text.split("").reverse().join("") === text
}

function palindromeChecker_(text) {
  if (!text) return false
  for (let i = 0; i < Math.floor(text.length / 2); i++) {
    if (text[i] != text[text.length - 1 - i]) {
      return false
    }
  }
  return true
}

function checkPrime(x) {
  for (let i = 2; i <= x - 1; i++) {
    if (x % i == 0) {
      return false
    }
  }
  return true
}


// console.log(checkPrime(101))

// console.log(palindromeChecker_("warrawa"))


// Given a function that checks if a number is positive (isPositive), inline it within a function that returns the square of a positive number or zero for negative numbers


function isPositive(n) {
  if (x < 0) return 0
  return n * n

}

// Write a function that finds the first non-repeated character in a string. Implement a check to skip further iterations once the non-repeated character is found.
function nonRepeated(str) {
  let stepCount=0
  for (let i = 0; i < str.length; i++) {
    for (let j = i + 1; j < str.length; j++) {
      // console.log(str[i],str[j])
      stepCount++
      if (str[i] == str[j]) {
        break
      } else if (j == str.length - 1) {
        console.log("stepCount is" + stepCount)
        return str[i]
      }
    }
  }
}




// console.log(nonRepeated("testertester"))