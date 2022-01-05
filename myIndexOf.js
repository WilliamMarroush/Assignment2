let arrnum=[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25];
function myIndexOf(target,ar){
    for(let steps=0;steps<ar.length;steps++){
        if(ar[steps]==target){
            return steps;
        }
    }
    return -1;
}
console.log("Where in the array does 23 lie?: Index"+myIndexOf(23,arrnum));