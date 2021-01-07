class MyArray {
    constructor(){
        this.length = 0;
        this.data={};
    }

    get(index){
        return this.data[index]
    }
    push(item){
        this.data[this.length] = item;
        this.length++;
        return this.length;
    }
    pop(item){
        this.data[this.length] = item;
        this.length++;
        return this.length;
    }
}

const newArray = new MyArray();

// newArray.get(0);

newArray.push("hi")
newArray.push("hi")
newArray.push("hi")

console.log(newArray)