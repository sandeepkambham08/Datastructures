class Node{
    constructor(value){
        this.value=value,
        this.next=null
    }
}

class Queue{
    constructor(){
        this.first=null,
        this.last=null,
        this.length=0
    }

    enqueue(value){
        const newNode = new Node(value);
        if(this.length===0){
            this.first= newNode;
            this.last = newNode;
        }
        else{
        this.last.next = newNode;
        this.last = newNode;
        }
        this.length++;
        console.log(this)
    }

    dequeue(){
        if(this.length>0){
            this.first= this.first.next;
            this.length--;
        }
        else {
            console.log('Queue is already empty')
        }
    }
    showQueue(){
        console.log(this)
    }

    peek(){
        console.log(this.first);
    }
    isEmpty(){
        if(this.length===0){
            console.log('The queue is empty');
        }
        else{
            console.log('The queue is of length: ', this.length);
        }
    }

}

const myQueue = new Queue();

myQueue.enqueue(10);
myQueue.enqueue(200);
myQueue.enqueue(300);
myQueue.enqueue(400);
myQueue.dequeue();
myQueue.showQueue();
myQueue.peek();
myQueue.isEmpty();
