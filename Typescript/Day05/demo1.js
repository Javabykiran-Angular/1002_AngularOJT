//anonymous functions
// function does not have any name 
// it call iteself & execute there => It works in internal freamwork
var temp1 = function () {
    console.log("First type of annonymous function is called");
};
// temp1();
var temp2 = function (a, b) {
    return (a + b);
};
var res = temp2(10, 20);
//    console.log("Addition is "+res);
// fat arrow function / Arrow function 
var temp3 = function () {
    console.log("Fat arrow function is called ");
};
// temp3();
var temp4 = function (a, b) {
    return (a + b);
};
var res1 = temp4(10, 2);
// console.log("Addition is "+res1);
//optional parameter functions
function add1(a, b) {
    console.log("Value of a is " + a); // 10
    console.log("Value of b is " + b); //undefined
    console.log("Addition of a+b is " + (a + b)); //NAN=> not a number 
}
// add1(10)
// add1(10,20);
function add2(a, b) {
    console.log("Value of a is " + a); // 10
    console.log("Value of b is " + b); //undefined
    console.log("Addition of a+b is " + (a + b)); //NAN=> not a number 
}
// add2();
//default parameter functions
function add3(a, b) {
    if (b === void 0) { b = 10; }
    console.log("Value of a is " + a); // 50
    console.log("Value of b is " + b); //100
    console.log("Addition of a+b is " + (a + b)); //60 
}
// add3(50);
// add3(50,100);
function add4(a, b) {
    if (a === void 0) { a = 60; }
    console.log("Value of a is " + a); // 50
    console.log("Value of b is " + b); //100
    console.log("Addition of a+b is " + (a + b)); //60 
}
// add4(70,90);
function add5(a, b) {
    if (a === void 0) { a = 60; }
    console.log("Value of a is " + a); // 60
    console.log("Value of b is " + b); //undefined
    console.log("Addition of a+b is " + (a + b)); //NAN 
}
add5();
