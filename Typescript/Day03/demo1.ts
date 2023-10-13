
// console.log("Hello World");
// console.log('Welcome to Angular Module 12 ');
// console.log(`
//        Hopes so u r Enjoying This Session...
// `);


// var a1,a2;
// var a_1,a$1;

// Data Types
// number(int,float,long,double,short),string(''/""),boolean(true/false)
// any(number,string,boolean) 
// void => it is netural data=> it does not point anything 
// misce=> null & undefined => it store value as well as data type 


var b:number=10;  // Forward declaration & defination 

// console.log("value of b is "+b);
// console.log('value of b is '+b);
// console.log(`
//         value of b is ${b}
// `);

var str!:string;

// console.log("Value of Str is "+str);
// str='Sumit';
// console.log("Value of Str is "+str);

var myany:any;
myany=2.5;
// console.log("myany value is "+myany);
// myany='Sumit';
// console.log("myany value is "+myany);
// myany=true;
// console.log("myany value is "+myany);

var c=3.6;
var d;

// Literal 

var c1:number | string;
c1=4;
c1='sumit';

var c2:52|boolean;
c2=52;
c2=true;
var c3:string|undefined;
c3='Sumit';
c3=undefined;

// Type Assertion
// pre- requiest => ur data type is any/unknown/Object 
// it tell to compiler to convert its data type to access its inbuild functionality 

var a:any;

// 1 using angle bracket syntax
    // - It is used in ts file 
// 2 as syntax
    // -  It is used ts file as well as html file 

// 1 using angle bracket syntax

var temp=(<string> a);
// temp.

// 2 as syntax
var temp=(a as string);
// temp.











