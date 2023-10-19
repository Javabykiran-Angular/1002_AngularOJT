// destructor of array
// if u want store array element data into particular variable then we go for array destructor
var a = [10, 20, 30, 40];
var t1 = a[0], t2 = a[1], t3 = a[2], t4 = a[3];
// console.log(`
//     Array => ${a}
//     t1 => ${t1}
//     t2 => ${t2}
//     t3 => ${t3}
//     t4 => ${t4}
// `);
var s1 = a[0], arr = a.slice(1);
console.log("\n    s1 => ".concat(s1, "\n    arr=> ").concat(arr, "\n"));
