// shallow copy & deep copy concept
var a = 10;
var b = a;
// console.log(`
//     Copy value 
//         a=${a}
//         b=${b}
// `);
b = 30;
// console.log(`
//     -------------- 
//         a=${a}
//         b=${b}
// `);
// in js as well as ts variable has deep copy
//How it works for array 
var arr = [10, 50, 60];
var arr1 = arr;
// console.log(`
//     Copy Value 
//         arr=${arr.join(' ')}
//         arr1=${arr1.join(' ')}
// `);
arr1[0] = 200;
// console.log(`
//     ---------------- 
//         arr=${arr.join(' ')}
//         arr1=${arr1.join(' ')}
// `);
var arr2 = [40, 50, 60, 70, 80];
var arr3 = arr2.slice(0);
// console.log(`
//     Copy Value 
//         arr2=${arr2.join(' ')}
//         arr3=${arr3.join(' ')}
// `);
arr3[0] = 900;
// console.log(`
//     Copy Value 
//         arr2=${arr2.join(' ')}
//         arr3=${arr3.join(' ')}
// `);
var arr4 = arr2.slice();
console.log("\n    Copy Value \n        arr2=".concat(arr2.join(' '), "\n        arr4=").concat(arr4.join(' '), "\n"));
arr4[1] = 900;
console.log("\n---------------\n    arr2=".concat(arr2.join(' '), "\n    arr4=").concat(arr4.join(' '), "\n"));
