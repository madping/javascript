// function a(){
//     console.log(b);
//     var b="bbb";
//     console.log(b);
//     function b(){}
//     console.log(b);
// }
// a(); //함수를 실행 하는 순간 함수의 실행 컨텍스트가 실행 됨
//      //이때 변수는 선언부와 할당부를 나누어 선언부만 끌어올리는 반면 
//      //함수 선언은 함수 전체를 끌어 올림.


     
function a(){
    var b;
    function b(){}

    console.log(b);
    b="bbb";
    console.log(b);
    console.log(b);
}
a();
