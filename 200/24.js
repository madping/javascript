var condition=5<10;
condition ? console.log("left") : console.log("right");
var result=condition ? (
    console.log("삼항 연산자의 첫번쨰 표현식 입니다."),
    "표현식 1"
):(
    console.log("삼항 연산자의 두번쨰 표현식 입니다."),
    "표현식 2"
);
console.log(result);

