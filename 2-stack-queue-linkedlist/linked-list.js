class LinkedList {
  constructor() {
    this.head = null
    this.size = 0
  }

  insertFirst(data) {
    this.head = new Node(data, this.head)
    this.size++
  }

  insertLast() {
    let current = this.head
    let node = new Node(this.head)

    if (!this.head) {
      this.head = node
    } else {
      while (current.next) {
        current = current.next
      }
      current.next = node
    }
    this.size++
  }
  insertAtIndex() {

  }

  log() {
    let current = this.head
    while (current) {
      console.log(current.data)
      current = current.next
    }
  }

  isPalindrome() {
    let x = []
    let result = true
    let current = this.head


    while (current) {
      x.push(current.data)
      current = current.next
    }

    if (x.length <= 2) {
      // console.log("falsy")
      return false
    }

    for (let i = 0; i < x.length / 2; i++) {
      if (x[i] != x[x.length - 1 - i]) {
        result = false
        break;
      }
    }

    // console.log("isPalindrome", x, result)
    return result
  }

  findMiddle() {
    let x = [], result
    let current = this.head
    while (current) {
      x.push(current.data)
      current = current.next
      // console.log("what is" + current.data)
    }
    // console.log("my arr", x)
    if (x.length % 2 == 1) {
      result = x[Math.floor(x.length / 2) + 1]
    } else {
      result = x[x.length / 2]
    }
    return result
  }

  findMiddle_() {
    let current = this.head
    let now = 1
    let main = this.size % 2 == 1 ? Math.floor(this.size / 2) : this.size / 2 + 1
    while (current) {
      if (main == now) {
        return current.data
      }
      now++
      current = current.next
    }
  }

  converBinaryToInteger() {
    let result = 0
    let current = this.head
    let arr = []
    while (current) {
      arr.push(current.data)
      current = current.next
    }

    for (let i = arr.length - 1; i >= 0; i--) {
      result += arr[i] * Math.pow(2, i)
    }

    console.log("arr", arr, result)

    return result


  }

  converBinaryToInteger_() {
    let result = 0
    let current = this.head
    let iterator = 0
    while (current) {
      result += current.data * Math.pow(2, this.size - iterator - 1)
      current = current.next
      iterator++
    }
    return result
  }

}

class Node {
  constructor(data, next = null) {
    this.data = data;
    this.next = next
  }
}


const ll = new LinkedList()
ll.insertFirst(15)
ll.insertFirst(35)
ll.insertFirst(55)
ll.insertFirst(75)



// ll.converBinaryToInteger()
// console.log(ll.converBinaryToInteger_())

console.log(ll.findMiddle())
console.log(ll.findMiddle_())

// ll.log()
// ll.isPalindrome()