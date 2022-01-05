//filter() recreation
const arr3 = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20];
function evennumber(num){
    if (num%2==0){
        return true;
    }
    else{
        return false;
    }
}
function myFilter(callback,ar){
    const finalarray = [];
    for (let steps=0;steps<ar.length;steps++){
        if(callback(ar[steps])){
            finalarray.push(ar[steps]);
        }
    }
    return finalarray;
}
const myFilteredArray = myFilter(evennumber,arr3);
console.log(myFilteredArray);