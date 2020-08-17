var user={
    name:"han",
    urls:{
        portpolio:"http://github.com/abc",
        blog:"http://blog.com",
        facebook:"http://facebook.com/abc"
    }
};

//객체의 깊은 복사를 수행 하는 범용 함수
//target이 객체인 경우에는 내부 프로퍼티들을 순회하며 copyObjectDeep 함수를
//재귀적으로 호출 하고 객체가 아닌 경우에는 target을 그대로 지정 출력


var copyObjectDeep=function(target){
    var result={};
    if(typeof target==="object" && target!==null){
        for(var prop in target){
            result[prop]=copyObjectDeep(target[prop]);
        }
    }else{
        result=target;
    }
    return result;
};

var user2=copyObjectDeep(user);

user2.name="dong";
console.log(user.name===user2.name);


user.urls.portpolio="http://portpolio.com";
console.log(user.urls.portpolio===user2.urls.portpolio);

user2.urls.blog="";
console.log(user.urls.blog===user2.urls.blog);
