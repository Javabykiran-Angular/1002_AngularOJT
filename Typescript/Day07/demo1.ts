//splice
// u can add data on particular position as well as remove or u can replace 

// let a:number[]=[10,20,50,60];

// console.log(a);

// a.splice(2,0,100);
// console.log(a);
// a.splice(1,0,200,500);
// console.log(a);
// a.splice(3,1);
// console.log(a);
// a.splice(2,2);
// console.log(a);
// a.splice(1,1,78);
// console.log(a);
// a.splice(2,1,98,36);
// console.log(a);

//slice
// it copy a section of data & return a new array 
let course:string[]=['Core Java','Advnaced Java','Spring Boot','Hibernate','HTML,CSS,JS','Angular 12 ','jenking','Docker','AWS'];

// let temp=course.slice(1,6);

// console.log(`
//     Original Array  => ${course}
//     -----------------------------
//     Copied Array => ${temp}
// `);
// let temp1=course.slice(1);

// console.log(`
//     Original Array  => ${course}
//     -----------------------------
//     Copied Array => ${temp1}
// `);

// let temp2=course.slice();

// console.log(`
//     Original Array  => ${course}
//     -----------------------------
//     Copied Array => ${temp2}
// `)

//map

let a:number[]=[2,3,4,5,6];

let sqrarr=a.map((value)=>{
    return (value*value)
});

// console.log(a);
// console.log("Square array "+sqrarr)

// Hw Task => Explore filter Method


