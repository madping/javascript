// 01. join => 배열안의 요소들을 구분자를 넣어 문자열로 합쳐준다 
// 구분자 생략 가능
/** 
const fruits=['apple','banana','orange'];
const result=fruits.join('^');
console.log(fruits);
console.log(result);
**/


// 02. 문자열을 배열로 합쳐 준다.
/** 
const fruits='apple, orange, banana, strrow';
console.log(fruits);
const result=fruits.split(',',2);
console.log(result);
**/



// 03. 주어진 배열의 순서를 거꾸로 만들어 준다.
/** 
const arr=[1,2,3,4,5,6,7,8,9,10];
console.log(arr);
const result=arr.reverse();
console.log(result);
console.log(arr);
**/



// 04. 첫번째 두 요소를 제외한 새로운 배열을 만든다.
/** 
const arr=[1,2,3,4,5];
const result=arr.slice(2,5);
console.log(result);
console.log(arr);
**/



class Student{
    constructor(name,age,enlloed,score){
        this.name=name;
        this.age=age;
        this.enlloed=enlloed;
        this.score=score;
        
    }
}

const students=[
    new Student('A',29,true,45),
    new Student('B',28,false,80),
    new Student('C',30,true,90),
    new Student('D',40,false,66),
    new Student('E',18,true,88),
];

{
/** 
    const result=students.find(function(student){
      //console.log(student,index);
      return student.score===90;
});
**/

const result=students.find((student)=>student.score===90);
console.log(result);
}


{
const result=students.filter((student)=>student.enlloed);
console.log(result);  
}


// 배열의 요소들을 콜백 함수의 요청에 따라 가공 해서 출력
{
const result=students.map((student)=>student.score*2);
console.log(result);
}



{
//배열의 요소중에 50 이하가 있는지...
const result=students.some((student)=>student.score<50);
console.log(result);

//모든 배열의 점수가 50 이하인지...없으면 false
const result2=students.every((student)=>student.score<50);
console.log(result2);
}


{
//reduce 배열의 요소값을 누적    
const result=students.reduce((pre,next)=>{
    console.log('--------------');
    console.log(pre);
    console.log(next);
    return next;
},0);

}