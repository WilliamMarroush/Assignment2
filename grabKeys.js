const arrfoo = {"Richard":"Dick","William":"Billy","Daniel":"Danny"}
function grabKeys(ar){
    let emptyarray=[];
    count=0;
    for(var steps in ar){
        emptyarray[count]=steps;
        count++;
    }
    return emptyarray;
}
console.log("Keys only of arrfoo: "+grabKeys(arrfoo));
