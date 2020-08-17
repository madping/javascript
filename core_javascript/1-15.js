var user={
    name:"han",
    urls:{
        portpolio:"http://github.com/abc",
        blog:"http://blog.com",
        facebook:"http://facebook.com/abc"
    }
};

var copyObject=function(target){
    var result={};
    for(var prop in target){
        result[prop]=target[prop];
    }
    return result;
};


var user2=copyObject(user);
user2.urls=copyObject(user.urls); // 중첩된 객체에 대한 깊은 복사

user2.name="dong";
console.log(user.name===user2.name);
//user2의 name 프로퍼티를 바꿔도 user의 name 프로퍼티는 바뀌지 않음

user.urls.portpolio="http://portpolio.com";
console.log(user.urls.portpolio===user2.urls.portpolio);

user2.urls.blog="";
console.log(user.urls.blog===user2.urls.blog);
//원본과 사본 중 어느 쪽을 바꾸더라도 다른 한쪽의 값도 함께 바뀜 