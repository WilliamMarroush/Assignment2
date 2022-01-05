//map() recreation
const arr2=[1,2,3,4]
function triple(s1){
    return s1*3;
}
function myMap(callback,ar){
    const finalarr = [];
    for (let steps=0;steps<ar.length;steps++){
        finalarr[steps]=callback(ar[steps]);
    }
    return finalarr;
}
const maparray=myMap(triple,arr2);
console.log(maparray);