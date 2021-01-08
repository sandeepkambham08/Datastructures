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
const myLinkedList = new LinkedList(10);
myLinkedList.append(23);
myLinkedList.append(42);
myLinkedList.append(12);
myLinkedList.append(72);
myLinkedList.append(65);
myLinkedList.prepend(992);
myLinkedList.insert(9,444);
console.log(myLinkedList)

myLinkedList.printList();