// Find the first recurring element in an array

//Given an array = [2,5,1,2,3,5,1,2,4]:
//It should return 2

//Given an array = [2,1,1,2,3,5,1,2,4]:
//It should return 1

//Given an array = [2,3,4,5]:
//It should return undefined.

// We can solve this by a simple nested loop but it will have a time complexity of O(n^2)

recurringCharacter=(arr)=>{
    let map = {};
    // console.log("Inside function");
    for(i=0;i<arr.length;i++){
        if(map[arr[i]]!== undefined){                       // Checking if the value is already in the object(which acts as a Hash here) 
            console.log(arr[i]) 
            return arr[i]                                   // If yes, then return the value
        }
        else 
            map[arr[i]]=i                                   // If No, add the value to the object 
            // console.log(map)
    }
    console.log("Inside function");
}  // O(n)


recurringCharacter([1,4,4,1,3,2,4]);
