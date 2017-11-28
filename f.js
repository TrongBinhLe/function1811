const arrPerson = [
    { name: 'Teo', age: 10, height: 140 },
    { name: 'Ti', age: 15, height: 130 },
    { name: 'Tun', age: 13, height: 120 }
];

const arr = [1, 4, 5, 3, 4, 1];
// 5, 5, 3, 4, 1
// 10, 3, 4, 1
// 13, 4, 1
// 17, 1
// 18
// console.log(arr.reduce((a, b) => a + b)); 
console.log(arrPerson.map(e => e.age).reduce((a, b) => a + b));
