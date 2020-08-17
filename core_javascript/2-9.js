// console.log(sum(1,2));
// console.log(multiply(3,4));


// function sum(a,b) {
//     return a+b;
// }


// var multiply = function(a,b){
//     return a*b;
// }


var a = function sum(a,b){
    return a+b;
}

var multiply;   // 변수 선언부만 끌오 올림

console.log(sum(1,2));
console.log(multiply(3,4));

multiply =  function (a,b){  // 변수 할당부는 원래 그 자리에 남겨둠
    return a*b;
} 


