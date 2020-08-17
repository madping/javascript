//자동으로 undefined를 부여 하는 경우

var a;
console.log("1=> ",a);

var obj={a:1};
console.log("2=> ",obj.a);
console.log("3=> ",obj.b);
//console.log(b); // 에러, 정의 되지 않음 

var func=function(){};
var c=func();     //return 값이 없으면 undefined를 반환 한것으로 간주 
console.log("4=> ",c);



