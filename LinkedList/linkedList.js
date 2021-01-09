class LinkedList {
    constructor(value){
        this.head = {
            value: value,
            next : null
        }
        this.tail = this.head;
        this.length = 1;
    }
    append=(value)=>{
        const newObj = {
            value:value,
            next:null
        }
        this.tail.next = newObj;
        this.tail = newObj;
        this.length++;
    }

    prepend = (value) =>{
        const newObj = {
            value:value,
            next: null
        }
        newObj.next = this.head;
        this.head =  newObj;
        this.length++;
    }

    insert(index, value){
        if( index>=this.length){
            this.append(value)
        }
        else if(index===0){
            this.prepend(value)
        }
        else if(index < this.length){
            const newObj = {
                value:value,
                next: null
            }
            let present = this.head;
            for(let i=0;i<index-1; i++){ 
               present = present.next;
               console.log(present)
            }
            newObj.next = present.next;
            present.next = newObj;
            console.log(present)
        }

    }

    remove(index){
        let currentNode = this.head;
        for(let i=0; i<index-1; i++){
            // console.log(currentNode);
            currentNode = currentNode.next;
            // console.log(currentNode);
        }
        currentNode.next = currentNode.next.next;
        this.length--;
        console.log(currentNode);
    }

    printList(){
        let array = [];
        let presentNode = this.head;
        while(presentNode !== null){
            array.push(presentNode.value);
            presentNode = presentNode.next;
        }
        console.log(array);
    }

    reverse(){
        console.log('reversing the list');
        let first = this.head;
        this.tail = this.head;
        let second = first.next;
        while(second){
            // console.log(this.currentNode.value)
            let temp  = second.next;
            console.log("First: ",first,"  Second: ", second, "Temp: ",temp, ".. " , this.head);
            second.next = first;
            first = second;
            // console.log("First: ",first,"  Second: ", second);
            second= temp;
        }
        this.head.next = null;
        this.head = first; 
    }
    
}
const myLinkedList = new LinkedList(10);
myLinkedList.append(23);
myLinkedList.append(42);
myLinkedList.append(12);
myLinkedList.append(72);
myLinkedList.append(65);
myLinkedList.prepend(992);
myLinkedList.insert(9,444);
console.log(myLinkedList)
myLinkedList.remove(2);

myLinkedList.printList();

myLinkedList.reverse();
myLinkedList.printList();