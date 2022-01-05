const arrnames = ["Christopher","Robin","Pooh","Tigger","Christopher"];
console.log("arrnames: "+arrnames+"\n");
function myLastIndexOf(target,ar){
    let currentindex=-1;
    for(let steps=0;steps<ar.length;steps++){
        if(ar[steps]==target){
            currentindex=steps;
        }
    }
    return currentindex;
}
console.log("Where does Christopher appear last in the array?: "+myLastIndexOf("Christopher",arrnames)+"\n");
console.log("Where does Piglet appear last int he array?: "+myLastIndexOf("Piglet",arrnames));

