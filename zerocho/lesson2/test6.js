//클래스
//다른 언어처럼 클래스 기반으로 동작하는 것이 아니라 여전히 프로토타입 기반으로 동작

var Human=function(type){
    this.type=type||'human';
}

Human.isHuman=function(human){
    return human instanceof Human;
}

Human.prototype.breathe=function(){
    alert('hahahahaha');
}

var Zero=function(type,firstName,lastName){
    Human.apply(this.arguments);
    this.firstName=firstName;
    this.lastName=lastName;
}

Zero.prototype=Object.create(Human.prototype);
Zero.prototype.constructor=Zero;
Zero.prototype.satName=function(){
    alert(this.firstName + ' ' + this.lastName);
}
var oldZero=new Zero('human','zero','cho');
Human.isHuman(oldZero);



//위 코드를 아래와 같이...

class Human{
    constructor(type='human'){
        this.type=type
    }
    
    static isHuman(human){
        return  human instanceof Human;
    }

    breathe(){
        alert('hahahaha');
    }

}

class Zero extends Human{
    constructor(type,firstName,lastName){
        super(type);
        this.firstName=firstName;
        this.lastName=lastName;
    }

    sayName(){
        super.breathe();
        alert(`${this.firstName} ${this.lastName}`);
    }
}
const newZero=new Zero('human','zero','cho');
Human.isHuman(newZero);

