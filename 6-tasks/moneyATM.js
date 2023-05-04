function moneyATM(money) {
  let arr = []
  let exists = [5, 10, 20, 50, 100, 200, 500]

  while (money > 5) {
    for (let i = exists.length - 1; i >= 0; i--) {
      if (money >= exists[i]) {
        money -= exists[i]
        arr.push(exists[i])
        break;
      }
    }
  }


  return arr

}