//리터럴 방식
var family={
    "address":"seoul",
    
    members:{},
    
    addFamily:function(age,name,role){
        this.members[role]={ //this를 통해 family 객체 내부 속성에 접근 가능 
            age:age,
            name:name
        };
    },
    
    getHeadcount:function(){
        return Object.keys(this.members).length;
    }
};

family.addFamily(30,"choi","aunt");
family.addFamily(3,"lyn","niece");
family.addFamily(10,"dangi","dog");

console.log(family.getHeadcount());


