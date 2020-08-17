//JSON을 활용한 간단한 깊은 복사

//함수나 숨겨진 프로퍼티인 __proto__나 getter/setter등과 같이
//JSON으로 변경할 수없는 프로퍼티들은 모두 무시한다.

//httpRequest로 받은 제이터를 저장한 객체를 복사할 때 등 
//순수한 정보만 다룰 때 활용 하기 좋은 방법

var copyObjectViaJSON=function(target){
    return JSON.parse(JSON.stringify(target));
};


var obj={
    a:1,
    b:{
        c:null,
        d:[1,2],
        func1:function(){
            console.log(3);
        },
        func2:function(){
            console.log(4);
        }
    }
};

var obj2=copyObjectViaJSON(obj);

obj2.a=3;
obj2.b.c=4;
obj.b.d[1]=3;

console.log(obj);
console.log(obj2);

