//some() recreation
const arr4 = [3,16,25,13,35,24,18,19,752,32,124];
function isdivisibleby6(num){
    if(num%6==0){
        return true;
    }
    else{
        return false;
    }
}
function mySome(callback,ar){
    let backcount = ar.length;
    for (let steps=0;steps<ar.length;steps++){
        if(backcount<ar.length){
            return true;
        }
        else{
            if (callback(ar[steps])){
                backcount--;
            }
        }
    }
}
const somedarray = mySome(isdivisibleby6,arr4);
console.log("Original Array\n" + arr4);
console.log("\nArray has member divisibly by 6?: "+somedarray);
