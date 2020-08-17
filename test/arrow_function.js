var foo = x => x;
console.log(foo('bar'));

var foo = (a,b) => a+b;
console.log(foo(1,2));

var foo = (a,b) =>{return a+b};
console.log(foo(1,2));

var foo = (a,b) => {a+b};
console.log(foo(1,2));


var foo = (a,b) => {
    var c = 3;
    return a+b+c;
}
console.log(foo(1,2))


// 객체 반환 
var foo=()=>({a:1, b:2, c:3});
console.log(foo());


