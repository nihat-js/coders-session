function squareStar(en, uzunluq) {
  for (let i = 1; i <= uzunluq; i++) {
    console.log("*".repeat(en))
  }
}

// squareStar(10,5)

function hallowSquare(en, uzunluq) {
  for (let i = 1; i <= uzunluq; i++) {
    if (i == 1 || i == uzunluq) {
      console.log("*".repeat(en))
    } else {
      console.log("*" + " ".repeat(en - 2) + "*")
    }
  }
}
// hallowSquare(8, 5)


function leftTriangleAngle(n) {
  for (let i = 1; i <= n; i++) {
    console.log("*".repeat(i))
  }
}
// leftTriangleAngle(4)

function rightTriangleAngle(n) {
  for (let i = 0; i < n; i++) {
    console.log(" ".repeat(n - i) + "*".repeat(i))
  }
}
// rightTriangleAngle(10)


function downwardTriangleAngle(n) {
  for (let i = n; i >= 1; i--) {
    console.log("*".repeat(i))
  }
}
// downwardTriangleAngle(7)


// function pyramid(n, reversed = false) {

//   let fullWidth = n * 2 - 1
//   // console.log("fullWidth: " + fullWidth)
//   for (let i = !reversed ? 1 : n; !reversed ? i <= n : i >= 1; !reversed ? i++ : i--) {
//     let starsWidth = !reversed ? i * 2 - 1 : fullWidth - (i-1) * 2 + 1
//     console.log("reversed stars: " + starsWidth)
//     console.log(" ".repeat((fullWidth - starsWidth) / 2) + "*".repeat(starsWidth) + " ".repeat((fullWidth - starsWidth) / 2))

//   }
// }
function pyramidNormal(n) {
  let fullWidth = n * 2 - 1

  for (let i = 1; i <= n; i++) {
    let starsWidth = i * 2 - 1
    console.log(" ".repeat((fullWidth - starsWidth) / 2) + "*".repeat(starsWidth) + " ".repeat((fullWidth - starsWidth) / 2))
  }
}
function pyramidReversed(n) {
  let fullWidth = n * 2 - 1
  for (let i = n; i >= 1; i--) {
    let starsWidth = i * 2 - 1
    console.log(" ".repeat((fullWidth - starsWidth) / 2) + "*".repeat(starsWidth) + " ".repeat((fullWidth - starsWidth) / 2))
  }
}


function diamondAngle(n) {
  // pyramid(n, false)
  // pyramid(n, true)
  pyramidNormal(n)
  pyramidReversed(n)
}



diamondAngle(5)


