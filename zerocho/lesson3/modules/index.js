const {odd,even}=require('./test2_1');
const checkNumber=require('./test2_2');
//const checkOddOrEven = require('./test2_2');

function checkStringOddEvent(str){
    if(str.length%2){
        return odd;
    }
    return even;
}
console.log(checkNumber(10));
console.log(checkStringOddEvent('hello'));