// Implementation of stacks using linked lists
console.log("Implementation of stacks using linked lists");

class Node {
  constructor(value) {
    this.value = value,
    this.next = null
  }
}

class Stack {
  constructor() {
    this.arr=[]
  }
  push(value) {
    console.log("push", value);
    this.arr.push(value);
    console.log(this.arr);
  }

  pop() {
    if(this.arr.length>0){
        console.log('pop')
        this.arr.pop();
        console.log(this.arr);
    }
    else {
        console.log('Stack is already empty')
    }
  }

  peek() {
      console.log(this.arr[this.arr.length-1]);
  }

  isEmpty() {
      if(this.arr.length===0){
          console.log('The stack is empty')
          return true;
      }
      else{
          console.log('Stack has a length of: ',this.arr.length);
          return this.arr.length;
      }
  }
}

const myStack = new Stack();

myStack.push(10);


// myStack.pop();
myStack.push(10);
myStack.push(20);
myStack.push(30);
myStack.pop();
myStack.peek();

myStack.isEmpty();
