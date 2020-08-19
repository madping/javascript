
// 요청이 수백개 이상 들어 오면 성능에 문제가 생김
/*
const fs=require('fs');

console.log('시작');
let data=fs.readFileSync('/Users/han/dev/javascript/zerocho/readme2.txt');
console.log('3번', data.toString());

data=fs.readFileSync('/Users/han/dev/javascript/zerocho/readme2.txt');
console.log('2번', data.toString());

data=fs.readFileSync('/Users/han/dev/javascript/zerocho/readme2.txt');
console.log('1번', data.toString());

console.log('끝');
*/



//위와 같은 성능 문제를 해셕 하기 위해선
//readFile의 콜백에 다음 readFile을 넣으면 된다
// 이른바 콜백 지옥이 펼쳐지지만 적어도 순서가 어긋나는 일은 없다.
const fs=require("fs");


console.log('시작');
fs.readFile('/Users/han/dev/javascript/zerocho/readme2.txt',(err,data)=>{
    if(err){
        throw err;
    }
    console.log('1번', data.toString());
    fs.readFile('/Users/han/dev/javascript/zerocho/readme2.txt',(err,data)=>{
        if(err){
            throw err;
        }
        console.log('2번', data.toString());
        fs.readFile('/Users/han/dev/javascript/zerocho/readme2.txt',(err,data)=>{
            if(err){
                throw err;
            }
            console.log('3번', data.toString());
            console.log('끝');
        });
    });
});
