/*
1. 서적별로 그루핑
2. 배열 셔플
3. 첫번째 추출및 당첨
*/

var list=require('./list');

/*
console.log(list[0].no);
console.log(list.length);

{
  const result=list.filter((han)=>han.book==='자바스크립트');
  console.log("-----1-----");
  console.log(result);
  console.log("-----------");
}
*/

var books=['클린 코드','클린 아키텍처','타입스크립트','자바스크립트','클린 코드'];

/*
books.forEach((book)=>{
    var result=list.filter(han=>han.book===book);
    console.log(result);
});
*/

function shuffle(a) {
    var j, x, i;
    for (i = a.length - 1; i > 0; i--) {
        j = Math.floor(Math.random() * (i + 1));
        x = a[i];
        a[i] = a[j];
        a[j] = x;
    }
    return a;
}

var groups={};
books.forEach((book)=>{
    var result=list.filter(han=>han.book===book);
    var shuffled=shuffle(result);
    groups[book]=shuffled;
});
//console.log(groups);
//console.log(shuffle([1,2,3,4,5,6,7,8,9,10]));


books.forEach(book=>{
   var one=groups[book].pop();
   console.log(one,groups[book].length);
});


