// Create a function that reverses a given string input
// Input : "abcdef"
// Output: "fedcba"

function reverse(str){
    if(!str || str.length<2 || typeof str!== 'string'){
        return "Thats not a string"
    }

    const splitStr = str.split("")
    console.log(splitStr.length);
    for(i=0;i<((splitStr.length)/2);i++){
        const temp = splitStr[i];
        splitStr[i] = splitStr[splitStr.length-1-i];
        splitStr[splitStr.length-1-i] = temp;
    }
    const reversed = splitStr.join('');
    console.log(reversed)
}
reverse2=(str)=>{
    const reversed2= str.split('').reverse().join('');
    console.log(reversed2);
}


reverse('abc');
reverse2('abcdef');