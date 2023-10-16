// Operators
// Airthmathic => +,*,-,/,%
// Bitwise => ~,&, |,^,<<,>>(shift operator)
// Logical => &&,||,!
// relational => <,>,<=,>=,==(it checks only value),!=,===(Strongly equality it checks value as well as data type)
//assginment => =,+=,-=,/=,*=,%=
// ternary => condition?expression1:expressoin2
//unary => post/pre => inc/dec ++a,a--
// Control Statement/ Sequential statement
// if ,if-else,continue,break,switch,if-else ladder
var a = 21;
// if(a<4){
//     console.log("Condition is true ")
// }
// else{
//     console.log("Condition is false")
// }
var choice = 21;
// switch(choice){
//     case 1:console.log("U r in case 1");
//             break;
//     case 2: console.log("U r in case 2");
//             break;
//     default:console.log("U r in default case ");
//             break;
// }
// Loop statement
// while,do-while,for,foreach(pending)
var count = 5;
// while(count!=0){
//     console.log("Count is "+count);
//     count--;    
// }
// do{
//     console.log("Count is "+count);
//     count--; 
// }while(count!=0)
// for(var i=0;i<4;i++){
//     console.log("Value of i "+i)
// }
// console.log("Value of i after the loop "+i)
// var has a global scope 
//let => It is keyword
// to define a variable 
// scope => nerarest within that block => {},file block
for (var i = 0; i < 4; i++) {
    console.log("===== Value of i " + i);
}
// console.log("Value of i after the loop "+i)
// const=> It is keyword
// to define & declare a variable
// scope => global as well as local 
var pi = 3.14;
