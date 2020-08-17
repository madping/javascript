const condition=true;
const promise=new Promise((resolve,reject)=>{
    if(condition){
        resolve('성공');
    }else{
        reject('실패');
    }
});

promise
   .then((message)=>{
       console.log(message);
   })
   .catch((error)=>{
       console.log(error);
   })
   .finally(()=>{
       console.log('무조건');
   });


/*    // then에서 new Promise를 return 해야 다음 then에서 받을수가 있음.
   promise
     .then((message)=>{
         return new Promise((resolve,reject)=>{
             resolve(message);
         });
     })
     .then((message2)=>{
         console.log(message2);
         return new Promise((resolve,reject)=>{
             resolve(message2);
         });
     })
     .then((message3)=>{
         console.log(message3);
     })
     .catch((error)=>{
         console.error(error);
     });

*/