'use strict'

const fruit=["apple","orange","banana"];

const imgarray = new Array();
imgarray[0]="apple";
imgarray[1]="orange";
imgarray[2]="banana";

for(let i=0; i<imgarray.length; i++){
    console.log(imgarray[i])
}

{
imgarray.forEach=(function(fru,index){
    console.log(index);
})
}

imgarray.push("watermelon");
console.log(imgarray);

imgarray.pop();
console.log(imgarray);

imgarray.length=0;
console.log(imgarray);

