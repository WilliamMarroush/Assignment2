//reduce() recreation
const arrprod = [1,2,3,4,5,6];
console.log("ARR1:: "+arrprod+"\n");
function adder(s1,s2){
    return s1+s2;
}
function myReduce(callback,ar){
    let finalval=0;
    for (let steps=0;steps<ar.length-1;steps++){
        finalval+=callback(ar[steps],ar[steps+1]);
        if(!steps%2==0){
            finalval-=ar[steps];
        }
    }
    return finalval;
}
console.log("ARR1 Reduced:: "+myReduce(adder,arrprod));
