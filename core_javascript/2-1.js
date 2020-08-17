var user={
    name:"han",
    gender:"nam"
};

var changeName=function(user,newName){
    var newUser=user;
    newUser.name=newName;
    return newUser;
};

var user2=changeName(user,"dong");

if(user!==user2){
    console.log("정보가 변경 되었습니다.");
}
console.log(user.name,user2.name);
console.log(user===user2);


//첫번째 줄에서 user 객체를 생성하고 
//열두번쨰 줄에서 user 객체의 name 프로퍼티를 'dong'으로
//바꾸는 함수 changrName을 호출해서 그 결과를 user2 변수에 넣음

//열네번째 줄에서 user변수와 user2 변수가 서로 같지 않다는 조건이
//성립하면 열다섯번째 줄의 내용이 출력되겠지만 실제로는 출력 없이 통과 한다.

// 열일곱번째 줄에서 두 변수의 name 프로퍼티 모두 'dong'으로 출력되고 
//열여덟번째 줄에서는 두 변수가 서로 동일 하다고 한다

