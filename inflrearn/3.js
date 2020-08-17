//this
/** 
var value=0;
var obj={
    value: 1,
    setvalue: function(){
        this.value=2;  //this: obj-> obj.value=2;
        //var self=this;
        (function(){
            this.value=3; //this: window-> window.value=3;
                          //전역 value=3;
        }).call(this);    //콜 어플라이, 함수안에 this를 넘겨주는 방법
    }
}

obj.setvalue();
console.log(value);
console.log(obj.value);
//console.log(this);
**/

var value=0;
var obj={
    value:1,
    setvalue: function(){
        //let a=20;
        this.value=2;
        {
            //let a=10;
            this.value=3;
        }
    }
}
obj.setvalue();
console.log(value);
console.log(obj.value);

