//1. string concatenation
console.log('my'+' cat');
console.log('1'+2);
console.log(`string literals: 1+2=${1+2}`);
console.log('elite\'s book');


//2. numeric poeration
console.log(1+1); //add
console.log(1-1); //substract
console.log(1/1); //divide
console.log(1*1); //multiply
console.log(5%2); //reminder
console.log(2**3); //exponentiation


//3. increment and decrement
let counter=2;
const preincrement = ++counter;
   //counter = counter + 1;
   //preincrement = counter;
console.log(`preincrement: ${preincrement}, counter: ${counter}`);

const postincrement=counter++;
   //postincrement = counter;
   //counter = counter + 1;
console.log(`preincrement: ${postincrement}, counter: ${counter}`);

const predecrement = --counter;
console.log(`preincrement: ${predecrement}, counter: ${counter}`);
const postdecrement = counter--;
console.log(`preincrement: ${postdecrement}, counter: ${counter}`);


//4. Assignment poerator
let x=3;
let y=6;
x+=y; //x = x + y;
x-=y;
x*=y;
x/=y;


//5. comarison operators
console.log(1<6);     //less than
console.log(10<=6);   //less than or equal
console.log(10>6);    //greater than
console.log(10>=6);   //greater than or equal


//6. Logical operators: || (or), && (and), ! (not)
const value1=false;
const value2=4<2;

  // || (or)
console.log(`or: ${value1 || value2 || check()}`);

  // && (and)
console.log(`or: ${value1 && value2 && check()}`);

  // nullableObject && nulableObject.something
  // null check

  /*
  if (nullableObject != null){
     nullableObject.something;
  }
  */
  
  function check(){
   for(let i=0; i<10; i++){
      //working time
      console.log('*');
   }
   return true;
}

  // ! (not)
  console.log(!value1);


//7. Equality
const stringfive='5';
const numberfive=5;

 //== loose equality, eith type conversion
 console.log(stringfive==numberfive);
 console.log(stringfive!=numberfive);
 //=== strict equality, no type conversion
 console.log(stringfive===numberfive);
 console.log(stringfive!==numberfive);
 // object equality by reference
 const han1={name: 'han'};
 const han2={name: 'han'};
 const han3=han1;
 console.log(han1==han2); 
 console.log(han1===han2); 
 console.log(han1===han3); 
 // equality - puzzler
 console.log(0==false);
 console.log(0===false);
 console.log(''==false);
 console.log(''===false);
 console.log(null==undefined);
 console.log(null===undefined);


//8. Conditional operator: if
   
const name='han';
if(name==='han'){
   console.log('wellcome, han');
}else if(name==='myung'){
   console.log('you are amazing oder');
}else{
   console.log('unkwnon');
}


//9, Ternary operator: ?
console.log(name === 'han' ? 'yes' : 'no');


//10, Switch statement
const browser='IE';
switch(browser){
   case 'IE':
      console.log('go away!');
      break;
   case 'Chrome':
   case 'Firefox':
      console.log('love you!');
      break;
   default:
      console.log('same all!');
      break;
}


//11. Loops
  //while
  let i=3;
   while(i>0){
      console.log(`while: ${i}`);
      i--;
   }
  
   //do while
  do{
     console.log(`do while: ${i}`);
     i--;
  }while(i>0);
  
  //for loop
  for(i=3;i>0;i--){
     console.log(`for: ${i}`);
  }

  for(let i=3;i>0;i=i-2){
     console.log(`inline variable for: ${i}`);
  }
  
  //nested loops
  for(let i=0;i<10;i++){
     for(let j=0;j<10;j++){
        console.log(`i: ${i}, j: ${j}`);  
     }
  }

  //iterate from 0 to 10 and print only even numbers
  //use continue
  for(let i=0;i<11;i++){
    if(i%2!==0){
       continue;
    } 
    console.log(`q1. ${i}`);
  }

  //iterate from - to 10 and print nu,bers until reaching 8
  //use break
  for(let i=0;i<11;i++){
   if(i>8){
      break;
   } 
   console.log(`q2. ${i}`);
 }
