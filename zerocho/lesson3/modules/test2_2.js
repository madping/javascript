const {odd,even}=require('./test2_1');

function checkOddOrEven(num){
     if(num%2){  
       return odd;
    }
    return even;
}

module.exports=checkOddOrEven;
