/*
setInterval(()=>{
    console.log("시작");
    try{
        throw new Error("서버 고장");
    }catch(err){
       console.log(err);
    }
}, 1000);
*/


//노드에서의 에러 처리
/*
const fs = require('fs');
setInterval(()=>{
    fs.unlink('./abcdefg.js',(err)=>{
        if(err){
            console.log(err);
        }
    });
},1000);
*/


//프로미스
/*
const fs=require('fs').promises;
setInterval(()=>{
    fs.unlink('./asdfasd.js');
},1000);
*/


//예측 불가능한 에러
process.on('unexception', (err)=>{
    console.error("예기치 못한 에러",err);
});

setInterval(()=>{
    throw new Error("서버 고장");
}, 1000);

setTimeout(()=>{
    console.log("실행")
},1000);

