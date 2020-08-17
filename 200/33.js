const symbol=Symbol();
const hello=Symbol("hello");

console.log(Number(3)===Number(3));
console.log(Number("symbol")===Number("symbol"));
console.log(Symbol()===Symbol());
console.log(typeof Symbol());


// 심볼을 객체의 키로도 사용할수가 있다.
const nationality=Symbol("nationality");
const user={
    name:"jay"
};
user[nationality]="korean";
console.log(user[nationality]);

for(let key in user){
    console.log(key);
}

//console.log(Object.keys(user));
console.log(Object.getOwnPropertyNames(user));
//console.log(JSON.stringify(user));//json 객체를 string 객체로 변환

const symbolProperties=Object.getOwnPropertySymbols(user);
//console.log(symbolProperties);
//console.log(user[symbolProperties[0]]);



