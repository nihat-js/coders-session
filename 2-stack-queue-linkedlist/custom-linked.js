class LinkedList {
  constructor() {
    this.head = null
    this.size = 0
  }


  push(val) {
    let node = new Node(val,)
    let current = this.head
    if (!current) {
      this.head = node
      return undefined
    }
    while (current) {
      if (current.next) {
        current = current.next
      } else {
        current.next = node
        break;
      }
    }

  }

  unshift(val) {
    this.head = new Node(val, this.head)

  }

  reverse() {
    if (!this.head) return new ListNode()
    let current = this.head
    let list = new Node(current.val,)
    while (current.next) {
      current = current.next
      list = new Node(current.val, list)
    }

    this.head = list
  }

  log() {
    let current = this.head
    while (current) {
      console.log(current.val)
      current = current.next
    }
  }


}

class Node {
  constructor(val, next = null) {
    this.val = val
    this.next = next
  }


}


let l = new LinkedList()
l.push(10)
l.push(20)
l.push(30)
l.push(40)

l.reverse()

l.log()