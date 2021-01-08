class DoublyLinkedList {
    constructor(value){
        this.head = {
            value: value,
            next : null,
            previous:null
        }
        this.tail = this.head;
        this.length = 1;
    }
    append=(value)=>{
        const newObj = {
            value:value,
            next:null,
            previous:null
        }
        newObj.previous = this.tail
        this.tail.next = newObj;
        this.tail = newObj;
        this.length++;
        return this;
    }

    prepend = (value) =>{
        const newObj = {
            value:value,
            next: null,
            previous:null,
        }
        newObj.next = this.head;
        this.head.previous = newObj;
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
                next: null,
                previous:null
            }
            let present = this.head;
            for(let i=0;i<index-1; i++){ 
               present = present.next;
               console.log(present)
            }
            newObj.next = present.next;
            newObj.previous = present;             // for doubly
            present.next.previous= newObj;         // for doubly
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
        let holder       = currentNode.next;
        holder.next.previous = currentNode;
        currentNode.next = holder.next;
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
    
}
const myLinkedList = new DoublyLinkedList(10);
myLinkedList.append(23);
myLinkedList.append(42);
myLinkedList.append(12);
// myLinkedList.append(72);
// myLinkedList.append(65);
// myLinkedList.prepend(992);
 myLinkedList.insert(1,444);

myLinkedList.remove(2);
console.log(myLinkedList)
myLinkedList.printList();