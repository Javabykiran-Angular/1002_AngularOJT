//json Object 
// java script object noatation
// it is stored in key & value paired 
var jsonObj = {
    id: 9,
    'fname': 'Sumit',
    lname: "Raokhande"
};
// 1 dot operator
// 2 square operator
// 1 dot operator
// console.log(`
//         ID          ::${jsonObj.id}
//         First Name  ::${jsonObj.fname}
//         Last name   ::${jsonObj.lname}
// `);
// 2 square operator
// console.log(`
//         ID          ::${jsonObj["id"]}
//         First Name  ::${jsonObj['fname']}
//         Last name   ::${jsonObj["lname"]}
// `);
//Array of Object 
var arrobj = [
    {
        id: 9,
        'fname': 'Sumit',
        lname: "Raokhande",
        country: {
            cid: 1,
            cname: 'India'
        },
        month: ['Jan', 'Sept', 'Dec'],
        result: [
            {
                subj: 'M1',
                marks: 40
            },
            {
                subj: 'M2',
                marks: 45
            },
            {
                subj: 'M5',
                marks: 50
            }
        ]
    },
    {
        id: 6,
        'fname': 'Kiran',
        lname: "Raokhande",
        country: {
            cid: 2,
            cname: 'US'
        },
        month: ['Feb', 'Aug', 'Nov'],
        result: [
            {
                subj: 'M1',
                marks: 45
            },
            {
                subj: 'M2',
                marks: 55
            },
            {
                subj: 'M5',
                marks: 60
            }
        ]
    },
    {
        id: 3,
        'fname': 'Spruha',
        lname: "Raokhande",
        country: {
            cid: 3,
            cname: 'Japan'
        },
        month: ['March', 'July', 'OCT'],
        result: [
            {
                subj: 'M1',
                marks: 60
            },
            {
                subj: 'M2',
                marks: 75
            },
            {
                subj: 'M5',
                marks: 80
            }
        ]
    }
];
// console.log(`
//         ID          ::${arrobj[1].id}
//         First name  ::${arrobj[1].fname}
// `);
// for(let i=0;i<arrobj.length;i++){
//     console.log(`
//             ID          :: ${arrobj[i].id}
//             First name  :: ${arrobj[i].fname}
//             Last Name   :: ${arrobj[i].lname}
//     `);
// }
for (var i = 0; i < arrobj.length; i++) {
    console.log("\n            ID          :: ".concat(arrobj[i].id, "\n            First name  :: ").concat(arrobj[i].fname, "\n            Last Name   :: ").concat(arrobj[i].lname, "\n            Country     :: ").concat(arrobj[i].country.cname, "\n            Month       :: ").concat(arrobj[i].month.join('  '), "\n            ------------Result--------------\n    "));
    // for(let j=0;j<arrobj[i].result.length;j++){
    //     console.log(`
    //         Subject :: ${arrobj[i].result[j].subj}
    //         Marks   :: ${arrobj[i].result[j].marks}
    //     `);
    // }
    arrobj[i].result.forEach(function (value, i) {
        console.log("\n                Subject :: ".concat(value.subj, "\n                Marks   :: ").concat(value.marks, "\n                index   :: ").concat(i, "\n\n        "));
    });
}
