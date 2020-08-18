const util=require('util');
const crypto=require('crypto');

const dontUseMe=util.deprecate((x,y)=>{
    console.log(x+y);
}, 'dontUseMe 함수는 deprecate 되었으니 더 이상 사용하지 마세요');
dontUseMe(1,2);

const randomBytesPromise=util.promisify(crypto.randomBytes);//util.promisify -> promise로 감싸지 않고 비동기 처리 할수 있음.
randomBytesPromise(64)
.then((buf)=>{
    console.log(buf.toString('base64'));
})
.catch((error)=>{
    console.log(error);
});
