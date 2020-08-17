
const fruit=['apple','banana','mango'];
const target='mango';

{
for(var i=0;i<fruit.length;i++){
    if(target===fruit[i]){
        console.log("mango하고 일치 함!!");
    }
}
}


{
const result=fruit.find((element)=>element===target);
console.log(result);
}


