//forEach() recreation
const array1 = [1,2,3];
function printout(num){
    console.log(num);
}
function myEach(callback,arr1){
    for (let steps=0;steps<arr1.length;steps++){
        callback(arr1[steps]);
    }
}
myEach(printout,array1);