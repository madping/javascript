/*
배열에서 유니크한 값을 뽑아 올때

*/

// const arr=[1,1,4,1,1]
// const han=arr.filter(a=>{if(arr.indexOf(a)==arr.lastIndexOf(a))
//             return a});
// console.log(han);

//_________________________
const str='11411';
const arr=str.split('');
console.log(arr);
const han=arr.filter(a=>{if(arr.indexOf(a)==arr.lastIndexOf(a))
             return a});
console.log(han);
//_________________________



//_________________________
// const arr=[1,2,3,4,5];
// let result=[];
// //0에서2까지의 요소를 잘라내서 새로운 배열을 만들고
// //concat을 이용행 두 배열을 합친다
// result=arr.slice(0,2).concat(arr.slice(3,arr.length));
// console.log(result);
// console.log(arr);
//_________________________


//_________________________
// let arr=[1,2,3,4,5];
// arr.splice(2,1);
// console.log(arr);
//_________________________



//return (a=>(4%2==0) ? a+':짝수':a+':홀수');




