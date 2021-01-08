// Merge 2 arrays(sorted individually) to become a big sorted array 
// I/p : ([0,1,3,7,10] , [2,5,9]) 
// O/p : ([0,1,2,3,5,7,9,10])

mergeSortedArrays=(arr1,arr2)=>{
    console.log(arr1,arr2)
    const merged=[];
    let i = 0;
    let j = 0;

    
    while(i<arr1.length){
        console.log(i);
        if(arr1[i]<arr2[j] || !arr2[j]){   // if value in arr1 is less than value at arr2 (OR) arr2 doesn't exist 
            merged.push(arr1[i]);
            i++;
            console.log("If ",merged)
        }
        else{
            merged.push(arr2[j]);
            j++;
            console.log("Else ", merged)
        }
    }
    if(j<arr2.length){                      // To handle the remaining elements in the second array
        for(pending=j; pending<arr2.length;pending++){
            merged.push(arr2[pending]);
        }
    }
    console.log("Merged array: ", merged);

}

mergeSortedArrays([], [])