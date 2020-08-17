'use strict'
let globalname='hahahah';
{
let name='han';
console.log(name);
name='hoon';
console.log(name);
console.log(globalname);
}
console.log(name);
console.log(globalname);


//어디에 선언했느냐에 상관 없이 제일 위로 선언을 끌어 올려주는것 
//console.log(age);
{
 var age=4;   
}
console.log(age);

const daysinweek=7;
const maxnumber=5;

const count=17;
const size=17.1;
console.log(`value: ${count},\n type: ${typeof count}`);
console.log(`value: ${size},\n type: ${typeof size}`);


const infinity = 1/0;
const negativeinfinity = -1/0;
const nAn = 'not a number'/2;

console.log(infinity);
console.log(negativeinfinity);
console.log(nAn);

//bigInt
const bigInt=1234567890123456789012345678901234567890;//over (-2**53)~(2*53)
console.log(`value: ${bigInt}, type: ${typeof bigInt}`);
Number.MIN_SAFE_INTEGER;//상수는 JavaScript에서 안전한 최소 정수값

//string
const char='c';
const brendan='brendan';
const greeting='hello'+brendan;
console.log(`value: ${greeting}, type: ${typeof greeting}`);
const helloBob=`hi ${brendan}!`; //template literals (string)
console.log(`value: ${helloBob}, type: ${typeof helloBob}`);

//boolean
//false: 0, null, undefined, NaN, ''
//true: any other value
const canRead=true;
const test=3 < 1;  //false
console.log(`value: ${canRead}, type: ${typeof canRead}`);
console.log(`value: ${test}, type: ${typeof test}`);

//null
let nothing=null;
console.log(`value: ${nothing}, type: ${typeof nothing}`);

//undefined
let x;
console.log(`value: ${x}, type: ${typeof x}`);

//symbol, create unique undentifiers for objects
const symbol1=Symbol('id'); //고유한 식별자가 필요할떄 심볼 사용
const symbol2=Symbol('id');
console.log(symbol1===symbol2); //false
const gSymbol1=Symbol.for('id'); //동일한 식별자가 필요 하면 .for
const gSymbol2=Symbol.for('id');
console.log(gSymbol1===gSymbol2); //true
console.log(`value: ${symbol1.description}, type: ${typeof symbol1}`);

//Dynamic typing
let text='hello';
console.log(text.charAt(0)); //h
console.log(`value: ${text}, type: ${typeof text}`);
text=1;
console.log(`value: ${text}, type: ${typeof text}`);
text='7' + 5;
console.log(`value: ${text}, type: ${typeof text}`);
text='8' / '2';
console.log(`value: ${text}, type: ${typeof text}`);


//object
const elite={name:'elite', age:20};
elite.age=21;

