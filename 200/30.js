//ES6
//챕터 29의 단축 속성명
var address="seoul";
var members={};
var addFamily=function(age,name,role){
    this.members[role]={age,name};
};
var getHeadcount=function(){
    return Object.keys(this.members).length;
};

var family={address,members,addFamily,getHeadcount};

family.addFamily(30,'choi','aunt');
family.addFamily(3,'lyn','niece');
family.addFamily(10,'dang','dog');
console.log(family.getHeadcount());


