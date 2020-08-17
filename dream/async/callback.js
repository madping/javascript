'use strict';
console.log('1');
setTimeout(() => console.log('10') ,1000);
console.log('3');



//동기 콜백
function printImmediately(print){
    print();
}
printImmediately(()=>console.log('hello'));

//비동기 콜백
function printWithDelay(print, timeout){
    setTimeout(print,timeout);
}
printWithDelay(()=>console.log('async callback'),2000);




//callback hell examlpe
class UserStorage{
    loginUser(id,password,onSuccess,onError){
        setTimeout(()=>{
            if(
               (id==='han'&&password==='mh') ||
               (id==='coder'&&password==='academy')
            ){
                onSuccess(id);
            }else{
                onError(new Error('not found'));
            }
        }, 2000);
    }

    getRoles(user,onSuccess,onError){
       setTimeout(()=>{
           if(user==='han'){
               onSuccess({name:'han',role:'admin'});
           }else{
               onError(new Error('on access'));
           }
       }, 1000);
    }
}


const userStorage=new UserStorage();
const id=prompt('enter your id');
const password=prompt('enter your pass');
userStorage.loginUser(
    id,
    password,
    user=>{
        userStorage.getRoles(
            user,
            userWithRole=>{
                alert(
                    `hello ${userWithRole.name}, you have a ${userWithRole.role} role`
                );
            },
            error=>{
                console.log(error);
            }
        );
    },   
    error=>{
        console.log(error);
    }
);

