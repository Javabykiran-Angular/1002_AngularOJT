// array is growable & shrinkable dynamically 
// no any fixed size array 
// array store homogenous data as well as hetrogenous data
// let a:number[]=[10,20,30,50,60];
var a1 = [];
var a2 = [10, 'sumit', true];
var a3 = [2.5, 'Sumit'];
var a4 = [3.14, 'Sumit', false];
// for(let i=0;i<a.length;i++){
//     console.log("Array value is "+a[i]+" index is "+i);
// }
// console.log(a);
// console.log(a.join("  "));
// console.log(a.join());
//foreach
// a.forEach((myvalue,i,arr)=>{
//     console.log("Array value is "+myvalue+" index is "+i+" arr is "+arr)
// });
//Rest Parameter function
function display(str) {
    var item = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        item[_i - 1] = arguments[_i];
    }
    console.log("Str=> " + str + " " + item.join(" # "));
}
// display(10,20,30,40);
// display(10);
// display('Sumit',45,60,89);
// Push & pop
// To add data & remove dynamically into the array 
// LIFO => Last In First out 
var a = [];
a.push(10);
console.log(a);
a.push(45, 60, 30, 78);
console.log(a);
var temp = a.pop();
console.log(a);
console.log("Poped value " + temp);
