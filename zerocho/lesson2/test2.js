var sayNode=function(){
    console.log('node');
};
var es='ES';
var oldObject={
    
    sayJS:function(){
        console.log('JS');
    },

    sayNode:sayNode,
}
oldObject[es+6]='fantastic';
oldObject.sayNode();
oldObject.sayJS();
console.log(oldObject.ES6);




const newObject={
    sayJS(){       //sayJS 같은 객체의 메서드에 함수를 연결할 때 더는 콜론과 function을 붙이지 않아됨
        console.log('JS'); 
    },
    sayNode,       //속성명과 변수명이 동일한 경우에는 한번만 써도 됨
    [es+6]:'fantastic',
};
newObject.sayNode();
newObject.sayJS();
console.log(newObject.ES6);

