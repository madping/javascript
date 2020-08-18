const fs=require('fs');
const util=require('util');

/*
fs.readFile('./readme.txt',(err,data)=>{
    if(err){
        throw err;
    }
    console.log(data);
    console.log(data.toString());
});
*/



//fs는 기본적으로 콜백 형식의 모듈이므로 사용하기가 불편
//따라서 fs 모듈을 프로미스 형식으로 바꿔줘야 할 필요가 있음


//첫번째

{
    const fs=require('fs').promises;

    fs.readFile('./readme.txt')
    .then(data=>{
        console.log(data);
        console.log(data.toString());
    })
    .catch(err=>{
        console.error(err);
    });
}

//두번째

/*
const readFile=util.promisify(fs.readFile);

readFile('./readme.txt')
.then(data=>{
  
    console.log(data);
    console.log(data.toString());
})
.catch(err=>{
    console.error(err);
});
*/


