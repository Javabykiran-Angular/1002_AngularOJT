
// shallow copy & deep copy concept

let a=10;
let b=a;
// console.log(`
//     Copy value 
//         a=${a}
//         b=${b}
// `);
b=30;
// console.log(`
//     -------------- 
//         a=${a}
//         b=${b}
// `);


// in js as well as ts variable has deep copy

//How it works for array 

let arr=[10,50,60];

let arr1=arr;

// console.log(`
//     Copy Value 
//         arr=${arr.join(' ')}
//         arr1=${arr1.join(' ')}
// `);

arr1[0]=200;
// console.log(`
//     ---------------- 
//         arr=${arr.join(' ')}
//         arr1=${arr1.join(' ')}
// `);


let arr2=[40,50,60,70,80];
let [...arr3]=arr2;

// console.log(`
//     Copy Value 
//         arr2=${arr2.join(' ')}
//         arr3=${arr3.join(' ')}
// `);

arr3[0]=900;

// console.log(`
//     Copy Value 
//         arr2=${arr2.join(' ')}
//         arr3=${arr3.join(' ')}
// `);


let arr4=arr2.slice();
//  console.log(`
//     Copy Value 
//         arr2=${arr2.join(' ')}
//         arr4=${arr4.join(' ')}
// `);
// arr4[1]=900;
// console.log(`
// ---------------
//     arr2=${arr2.join(' ')}
//     arr4=${arr4.join(' ')}
// `);