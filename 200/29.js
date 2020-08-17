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


var printMembers=function(){
    var members=family.members;
    for(var han in members){
       console.log('role=> '+ han +', name=> ' + members[han].name
        + ', age=> ' + members[han].age);
    }
};
printMembers();


var members=family.members;
members['nepbew']={age:3, name:'hyun'};//객체에 새로운 속성 추가
members.niece={age:5, name:'lyn'};//원래 있던 속성 값 수정
delete members.aunt;
delete members['dog'];

//printMembers();

