//copyObject를 이용한 복사

var user={
    name:"han",
    gender:"nam"
};

// var changeName=function(user,newName){
//     return{
//         name:newName,
//         gender:user.gender
//     };
// };

var copyObject=function(target){
    var result={};
    for(var prop in target){
        result[prop]=target[prop];
    }
    return result;
};//기존 정보를 복사해서 새로운 객체를 반환하는 함수(얕은 복사)


//var user2=changeName(user,'dong');

var user2=copyObject(user);
user2.name='dong';


if(user!==user2){
   console.log("유저 정보가 변경 되었습니다.");
}
console.log(user.name, user2.name);
console.log(user===user2);


//changeName 함수가 새로운 객체를 반환 하도록 수정.
//user와 user2는 서로 다른 객체이므로 안전하게 변경 전과 변경 후를 비교
//changeName 함수는 새로운 객체를 만들면서 변결할 필요가 없는 기존 객체의
//프로퍼티(gender)를 하드 코딩으로 입력 했다.
//이런 식으로는 대상 객체의 정보가 많을수록 수고가 늘어 난다.

