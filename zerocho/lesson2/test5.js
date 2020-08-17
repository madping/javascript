//구조 분해 할당

var candyMachine={
    status:{
        name:'node',
        count:5,
    },
    getCandy:function(){
        this.status.count--;
        return this.status.count;
    },
}
var getCandy=candyMachine.getCandy;
var count=candyMachine.status.count;

//위 코드는 아래와 같이 바꿀수가 있다

const candyMachine ={
    status:{
        name:'node',
        count:5,
    },
    getCandy(){
        this.status.count--;
        return this.status.count;

    },
}
const {getCandy,status:{count}}=candyMachine;


//배열에 대한 구조분해 할당.
var array=['nodejs',{},10,true];
var node=array[0];
var obj=array[1];
var bool=array[3];

//위 코드를아래와 같이...
//array란 배열의 첫번째,두번쨰,네번째 요소를 변수에 대입

const array=['nodejs',{},10,true];
const [node,obj,bool]=array;


