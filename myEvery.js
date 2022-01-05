//every() recreation
const ar1 = [1,2,3,4,5];
console.log("ARR1 :: "+ar1+"\n");
const ar2 = [4,5,6,7,8];
console.log("ARR2 :: "+ar2+"\n");
function greatorequal4(num){
    if (num>=4){
        return true;
    }
    else{
        return false;
    }
}
function myEvery(callback,ar){
    let count=0;
    for(let steps=0;steps<ar.length;steps++){
        if(callback(ar[steps])){
            count++;
        }
    }
    if (count==ar.length){
        return true;
    }
    else{
        return false;
    }
}
console.log("ARR1 Greater than or Equal to 4?:: "+myEvery(greatorequal4,ar1)+"\n");
console.log("ARR2 Greater than or Equal to 4?:: "+myEvery(greatorequal4,ar2)+"\n");