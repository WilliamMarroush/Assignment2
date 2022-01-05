const arrfoo = {"Richard":"Dick","William":"Billy","Daniel":"Danny"}
function grabValues(ar){
    let emptyarray=[];
    count=0;
    for(var steps in ar){
        emptyarray[count]=ar[steps];
        count++;
    }
    return emptyarray;
}
console.log("Values only of arrfoo: "+grabValues(arrfoo));