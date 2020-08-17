//스코프=>범위,유효공간,허용공간..
//함수 스코프=>함수에 의해서 생기는 범위,변수의 유효 범위...
//블락 스코프=>블락에 의해 생기는 유효 범위....



//블락 스코프
{
    let a=10;
    {
        let a=20;
        console.log("1-> ",a);
    }
    console.log("2-> ",a);
}
//console.log("3-> ",a); //a is not defined



//함수 스코프
(function(){
    var a=10;
    (function(){
        var a=20;
        console.log(a);
    })();
    console.log(a);
})();
//console.log(a); //a is not defined




function hasvalue(p){
    //console.log(v);
    if(p){
        let v="blue";
        console.log(v);
    }else{
        let v="red";
        console.log(v);
    }
    //console.log(v);
}
hasvalue(10);