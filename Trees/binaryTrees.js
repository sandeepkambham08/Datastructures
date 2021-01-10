class Node {
    constructor(value){
        this.left = null;
        this.right= null;
        this.value=value;
    }
}

class BinarySearchTree{
    constructor(){
        this.root = null;
    }
    insert(value){
        const newNode = new Node(value);
        if(this.root===null){               // First insertion
            this.root = newNode;
        }
        else{                               // After first 
            let currentNode = this.root;
            while(true){
                
                if(value<currentNode.value){
                // Left side of Tree
                    if(!currentNode.left){
                        currentNode.left=newNode;
                        return this;
                    }
                    else{
                        currentNode=currentNode.left;
                        console.log(value,'the value is less than current node', this.currentNode)
                    }
                    
                }
                else {
                // Right side of Tree
                    if(!currentNode.right){
                        currentNode.right=newNode;
                        return this;
                    }
                    else{
                        currentNode = currentNode.right;
                        console.log(value,'the value is greater than current node', this.currentNode)
                    }
                                    }
                // currentNode.left= newNode;
            }
           
        }
        console.log(this);
    }
    lookup(value){
        console.log('looking for : ', value);
        let currentNode = this.root;

        if(!this.root){
            console.log('Item not found : Empty tree')
            return false;
        }

        while(true){
            if(value===currentNode.value){
                // Item found 
                console.log("Found the item", currentNode)

                return true;
            }
            else if(value < currentNode.value){
                // Left side
                if(!currentNode.left){
                    console.log('Item not found in the tree');
                    return false;
                }
                currentNode = currentNode.left;

            }
            else if(value > currentNode.value){
                // Right side
                 if(!currentNode.right){
                    console.log('Item not found in the tree');
                    return false;
                }
                currentNode = currentNode.right;
            }
        }

    }
}

const myTree = new BinarySearchTree();

myTree.insert(100);
myTree.insert(50);
myTree.insert(120);
myTree.insert(30);
myTree.insert(60);
myTree.insert(110);
myTree.insert(190);
myTree.lookup(120);