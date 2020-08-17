//소수점 이하를 버림
// console.log(Math.floor(45.95));
// console.log(Math.floor(45.05));
// console.log(Math.floor(4));
// console.log(Math.floor(-45.05));
// console.log(Math.floor(-45.95));

//소수점 이하 올림
// console.log(Math.ceil(.95));
// console.log(Math.ceil(4));
// console.log(Math.ceil(7.004));
// console.log(Math.ceil(-0.95));
// console.log(Math.ceil(-4));
// console.log(Math.ceil(-7.004));



// var numobj=12345.6789;
// console.log(numobj.toFixed());
// console.log(numobj.toFixed(1));
// console.log(numobj.toFixed(6));



var imgarray = new Array();
imgarray[0]="han0";
imgarray[1]="han1";
imgarray[2]="han2";
imgarray[3]="han3";

//var random2=Math.random()*3;
var random2 = Math.round(Math.random()*3);
var objimg = imgarray[random2];
console.log(objimg);

//5~10안의 램덤 수

// var min=5;
// var max=10;

// var a=Math.floor(Math.random()*(max+1-min))+min;
// console.log(a);

