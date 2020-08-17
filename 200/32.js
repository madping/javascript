//ES6
//비구조화 할당

var obj={a:1,b:2,c:30,d:44,e:5};

var {a,c}=obj;
console.log(`a >>> ${a}`);
console.log(`c >>> ${c}`);

var {a:newA=10,f:newF=5}=obj;
console.log(`newA >>> ${newA}`);//속성값이 없을 경우 10을 할당
console.log(`newF >>> ${newF}`);//f속성이 없기 때문에 5가 할당 됨


//배열 비구조화 할당은 중괄호를 대괄호[]로 바꾸면 된다.

var arr=[1,2,30,44,5];

 var [b,c,...rest]=arr;
 console.log(`0) b >>> ${b}`);
 console.log(`0) c >>> ${c}`);
 console.log(`0) rest >>> ${rest}`);

var [a=10,f=9]=[1];
console.log(`1) a >>> ${a}`);
console.log(`1) f >>> ${f}`);

[a,f]=[f,a];
console.log(`2) a >>> ${a}`);
console.log(`2) f >>> ${f}`);

function getArr(){
    return [1,2,3,4,5,6];
}
[a,,,,,f]=getArr();
console.log(`3) f >>> ${a}`);
console.log(`3) f >>> ${f}`);


