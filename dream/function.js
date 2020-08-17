//1. Function declaration
function printHello(){
    console.log('Hello');
}
printHello();


function log(message){
    console.log(message);
}
log('Hello');
log(1234);


//2. Parameters
//premitive parameters: passed by value
//object parameters: passed by reference
function changeName(obj){
    obj.name='color';
}
const han={name: 'han'};
changeName(han);
console.log(han);


//3. Default parameters (added in ES6)
function showMessage(message, from='unknown'){
    console.log(`${message} by ${from}`);
}
showMessage('Hi!');


//4. Rest parameters (added in ES6)
//... -> rest parameter (배열 형태로 값이 전달 됨)
function printAll(...args){
    for(let i=0;i<args.length;i++){
        console.log(args[i]);
    }

    for(const arg of args){
        console.log(arg);
    }

    args.forEach((arg)=>console.log(arg));
}
printAll('dream','coding','han');


//5. Local scope
let globalMessage='global';
function printMessage(){
    let message='hello';
    console.log(message);
    console.log(globalMessage);
    //console.log(childMessage);

    function printAnother(){
        console.log(message);
        let childMessage='child hello';
    }
    printAnother();
}
printMessage();
//printAnother();


//6. Return a value
function sum(a,b){
    return a+b;
}
const result=sum(1,2);
console.log(`sum: ${sum(1,2)}`);
console.log(result);


//7. Early return, early exit
//bad case
function upgradeYser(user){
    if(user.point > 10){
        //long upgrade logic....
    }
}

//good case
function upgradeUser(user){
    if(user.point <=10){
        return;  //조건이 맞지 않는 경우 빨리 함수를 종료하고 다음 로직 실행
    }
    //long upgrade logic...
}


//First-class function
//1. Function expression
const print=function(){ //anonymous function
    console.log('print');
};
print();
const printAgain=print;
printAgain();
const sumAgain=sum;
console.log(sumAgain(1,3));


//2. Callback function using function expression
function randomQuiz(answer, printYes, printNo){
    if(answer==='love you'){
        printYes();
    }else{
        printNo();
    }
}
  //anonymous function
const printYes=function(){
    console.log('yes');
};
  //named function
  //디버깅 할때 스택 트레이스에 함수 이름이 나오게 하기 위해 함수 이름을 붙여준다.
const printNo=function print(){ 
    console.log('no!');
    //print();  //함수 내부에 함수 자신을 호출(무한 반복), 리커젼
};
randomQuiz('wrong', printYes, printNo);
randomQuiz('love you', printYes, printNo);

  //Arrow function
  //always anonymous
const simplePrint=function(){
    console.log('simple print');
};

const simplePrint2=()=>console.log('simple print');
const add=(a,b)=>a+b;
const simpleMultiply=(a,b)=>{
    return a*b;
};

  //IIFE: Immediately Invoked Function Expression
  //함수를 선언 함과 동시에 바로 호출
(function hello(){
    console.log('IIFE');
})();
