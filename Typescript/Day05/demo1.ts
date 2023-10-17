//anonymous functions
// function does not have any name 
// it call iteself & execute there => It works in internal freamwork

let temp1=function (){
    console.log("First type of annonymous function is called");
}

// temp1();

let temp2= function (a:number,b:number):number{
    return (a+b)
}

   let res= temp2(10,20);
//    console.log("Addition is "+res);

// fat arrow function / Arrow function 

  let temp3= ()=>{
        console.log("Fat arrow function is called ")
    }

// temp3();

 let temp4=(a:number,b:number):number=>{
        return (a+b);
    }

   let res1= temp4(10,2)

// console.log("Addition is "+res1);

//optional parameter functions

function add1(a:number,b?:number){
    console.log("Value of a is "+a);// 10
    console.log("Value of b is "+b);//undefined
    console.log("Addition of a+b is "+(a+b!)); //NAN=> not a number 
}

// add1(10)
// add1(10,20);

function add2(a?:number,b?:number){
    console.log("Value of a is "+a);// 10
    console.log("Value of b is "+b);//undefined
    console.log("Addition of a+b is "+(a!+b!)); //NAN=> not a number 
}

// add2();

//default parameter functions

function add3(a:number,b:number=10){
    console.log("Value of a is "+a);// 50
    console.log("Value of b is "+b);//100
    console.log("Addition of a+b is "+(a+b)); //60 
}


// add3(50);
// add3(50,100);

function add4(a:number=60,b:number){
    console.log("Value of a is "+a);// 50
    console.log("Value of b is "+b);//100
    console.log("Addition of a+b is "+(a+b)); //60 
}

// add4(70,90);

function add5(a:number=60,b?:number){
    console.log("Value of a is "+a);// 60
    console.log("Value of b is "+b);//undefined
    console.log("Addition of a+b is "+(a+b!)); //NAN 
}

add5();
