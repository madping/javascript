// 배열.map((요소,인덱스,배열)=>{return 요소});

const oneTwoThree=[1,2,3];

let result=oneTwoThree.map((v)=>{
    //console.log(v);
    if(v%2===0){
        return "짝수";
    } 

    return "홀수";
});

//oneTwoThree;
console.log(result);
//console.log(oneTwoThree===result);

