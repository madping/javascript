//빈 요소와 배열의 순회

var arr1=[undefined,1];
var arr2=[];
arr2[1]=1;


arr1.forEach(function(v,i){console.log(v,i);});
arr2.forEach(function(v,i){console.log(v,i);});


{
const han1=arr1.map(function(v,i){return v+i;});
 console.log(han1);
const han2=arr2.map(function(v,i){return v+i;});
 console.log(han2);
}


{
const han1=arr1.filter(function(v){return !v;});    
const han2=arr2.filter(function(v){return !v;});
 console.log(han1);    
 console.log(han2);    
}


{
const han1=arr1.reduce(function(p,c,i){return p+c+i;},'');
const han2=arr2.reduce(function(p,c,i){return p+c+i;},'');
 console.log(han1);
 console.log(han2);
}