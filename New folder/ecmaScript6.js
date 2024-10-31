// //1. let const
// var nam = 'jubayer';
// var nam = 'abdul';

// const profile = {
//     name: "jubayer",
//     profession: "student",
//     age : '45',
//     address: "sugun bagicha",
//     summation: function(a, b){
//         return a + b;
//     },

//     result:this.summation(10, 20)
// }

// // const {name, profession, age, address} = profile
// // console.log(name, profession, address, age);

// // console.log(profile.age);


// const number = [ 1, 2, 3, 4, 5];
// const [jubayer, saon, ridoy, sattar, rafiq] = number;

// // console.log(jubayer);


// const newArr = number;
// newArr.push(33);


// // spread operator
// const newArr = [...newArr];



// map
const num = [22, 33, 44, 55, 77];

const result = num.map((value)=> value*2);
console.log(result);

const empty = [];
for (let i = 0; i < num.length; i++){
    const res = num[i]*2;
    empty.push(res);
}
console.log(empty);

// arrow function

const jubayer = ()=>{
    return 10+20;
}

const result3 = num.forEach(value => console.log(value *2));

//api ............................
fetch(' https://randomuser.me/api/?resu1ts=50')
.then(res => res.json())
.then(data => console.log(data));
