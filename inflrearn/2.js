// if문, for문, while문, switch-case문 결과를 리턴하지 않음
//식. expression, 값이 될 수 있는 경우
//값.

/** 
if(true){
    let a=10;
    if (true){
        console.log(a);
        const a=20;
    }
    console.log(a);
}
**/
//console.log(a);
//호이스팅이 된다면... -> a=> undefined
//호이스팅이 안된다면.. -> a=> TDZ(임시사각지대)



(function(){
    var a=10;
    (function(){
        console.log(a);
        var a=20;
    })();
    console.log(a);
})();