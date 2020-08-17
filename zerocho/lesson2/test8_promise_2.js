//calback --> promise
/*
function findAndSaveUser(Users){
    Users.findOne({},(err,user)=>{
        if(err){
            return console.log(err);
        }
        user.name='zero';
        user.save((err)=>{
            if(err){
                return console.log(err);
            }
            Users.findOne({gender:'m'},(err,user)=>{

            });
        });
    });
}
*/

/* 아래는 메서드가 프로미스 방식을 지원해야 한다 */ 
/*
function findAndSaveUser(Users){
    Users.findOne({})
      .then((user)=>{
          user.name='zero';
          return user.save();
      })
      .then((user)=>{
          return Users.findOne({gender:'m'});
      })
      .then((user)=>{
          //생략
      })
      .catch(err=>{
          console.log(err);
      });
}
*/
/* async/await 문법을 사용하면 다음과 같이 바꿀수가 있음. */
/*
async function findAndSaveUser(Users){
    try{
        let user=await Users.findOne({});
        user.name='zero';
        user=await user.save();
        user=await Users.findOne({gender:'m'});
        //생략
    }catch(error){
        console.log(error);
    }
}
*/

/* 위를 화살표 함수로 바꿀수가 있음. 

const findAndSaveUser=async(Users)=>{
    try{
      let user=await Users.findOne({});
      user.name='zero';
      user=await user.save();
      user=await Users.findOne({gender:'m'});
      //생략   
    }catch(error){
      console.log(error);
    }
}

*/

/* 
프로미스 여러개를 한번에 실행 할수 있는 방법
Promise.all을 사용하면 된다.
*/

/* 
Promise.all에 넣으면 모두 resolve될때까지 기다렸다가
then으로 넘어감. result 매개변수에 각각의 프로미스 
결과 값이 배열로 들어 있음. Promise 중 하나라도
reject가 되면 catch로 넘어감.
*/


const promise3=Promise.resolve('성공3');
const promise4=Promise.resolve('성공4');
Promise.all([promise3,promise4])
  .then((result)=>{
      console.log(result);
  })
  .catch((error)=>{
      console.error(error);
  });

  
  /* 
  for문과 async/await을 같이 써서 프로미스를 순차적으로 실행 할수가 있음.
  for문과 함께 쓰는 것은 노드 10부터 지원 하는 ES2018 문법임.
  for wait of 문 사용...
  */

  const promise1=Promise.resolve('성공1');
  const promise2=Promise.resolve('성공2');
  (async()=>{
      for await (promise of [promise1,promise2]){
          console.log(promise);
      }
  })();


  
  /* 
  async 함수 안에서 await을 붙여서 처리 할수 있음.
  */

  async function findAndSaveUser(Users){
      //생략
      findAndSaveUser().then(()=>{/*생략 */});
      async function other(){
          const result=await findAndSaveUser();
      }
  }