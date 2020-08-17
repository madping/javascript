function add1(x,y){
    return x+y;
}
console.log(add1(1,2));

const add2=(x,y)=>{
    return x+y;
}
console.log(add2(1,2));

{
const add3=(x,y)=>x+y;
console.log(add3(1,2));
}

{
const add4=(x,y)=>(x+y);
console.log(add4(1,2));
}

function not1(x){
    return !x;
}
console.log(not1(1));

const not2=x=>!x;
console.log(not2(1));





