let arranimals = ["Dog","Cat","Giraffe","Snake","Anteater"];
function myPush(addition, ar){
    ar[ar.length]=addition;
    return ar.length;
}
console.log(myPush("Cow",arranimals)+"\n");
console.log(arranimals);
