{
const numbers='123547';
const result=numbers.indexOf(7);
console.log(result);
}

{
const animals="dog,shark,hamster,fox";
const result=animals.indexOf("hamster");
console.log(result);
}


{
    const animals="dog,fox,shark,hamster,fox";
    const result=animals.indexOf("fox",9);
    console.log(result);

}



{
    const animals="dog,fox,shark,hamster,fox";
    const result=animals.lastIndexOf("fox");
    console.log(result);

}


{
    const animals=['dog','shark','hamster','fox'];
    const result=animals.indexOf('hamster');
    console.log(result);
    

}