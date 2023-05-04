class MyQueue {
  constructor() {
    this.stack1 = [] // main
    this.stack2 = []
  }

  push(q) {
    this.stack1.push(q)
  }
  pop(){
    return this.stack1.pop()
  }

  empty() {
    return this.stack1.length > 0
  }

  enqueue(q) {
    while (this.stack1.length > 0) {
      this.stack2.push(this.stack1.pop())
    }
    this.stack1.push(q)

    while (this.stack2.length > 0) {
      this.stack1.push(this.stack2.pop())
    }
  }

  dequeue() {
    while (this.stack1.length > 1) {
      this.stack2.push(this.stack1.pop())
    }
    // console.log("dequeueing",this.stack1,this.stack2)
    this.stack1.pop()

    while (this.stack2.length > 0) {
      this.stack1.push(this.stack2.pop())
    }

  }

  peek (){
    return this.stack1[0]
  }

  log() {
    console.log("From front to back")
    this.stack1.forEach(s => console.log(s))
    // for (let i = this.stack1.length - 1; i >= 0; i--) {
    //   console.log(this.stack1[i])
    // }

  }

}



let q = new Queue()

q.enqueue(10)
q.enqueue(20)
q.enqueue(30)
q.enqueue(40) //  40 , 30 20 ,10 


 
q.dequeue() // 30 , 20 , 10

q.log()
