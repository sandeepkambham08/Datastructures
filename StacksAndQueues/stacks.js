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
    this.top = null,
    this.bottom = null,
    this.length = 0
  }
  push(value) {
    console.log("push", value);
    const newElement = new Node(value);
    // this.top.next = newElement;
    if(this.length===0){
        this.top = newElement;
        this.bottom = newElement;
    }
    else{
        newElement.next = this.top;
        this.top = newElement;
    }
    this.length++;
  }

  pop() {
    if(this.length>0){
        this.top = this.top.next;
        if(this.length===1){
            this.bottom = this.top;
        }
        this.length--;
    }
    else {
        console.log('Stack is already empty')
    }
  }

  peek() {
      this.top;
      console.log(this);
  }

  isEmpty() {
      if(this.length===0){
          console.log('The stack is empty')
          return true;
      }
      else{
          console.log('Stack has a length of: ',this.length);
          return this.length;
      }
  }
}

const myStack = new Stack();

myStack.push(10);

myStack.pop();
myStack.pop();
myStack.push(10);
myStack.push(20);
myStack.push(30);
myStack.peek();

myStack.isEmpty();
