//includes() recreation
arpetnames = ["Fido","Spot","Scratchy","Jeff","Snowball"]
console.log("arpetnames: "+arpetnames+"\n");
function myIncludes(target,ar){
    for (let steps=0;steps<ar.length;steps++){
        if (ar[steps]==target){
            return true;
        }
    }
    return false;
}
console.log("Does arpetnames contain \"Fido\"?: "+myIncludes("Fido",arpetnames));
