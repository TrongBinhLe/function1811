const arrPerson = [
    { name: 'Teo', age: 10, height: 140 },
    { name: 'Ti', age: 15, height: 130 },
    { name: 'Tun', age: 13, height: 120 }
];

const arr = [1, 4, 5, 3, 4, 10];

console.log(arr.sort((a, b) => a - b));
console.log(arrPerson.sort((a, b) => -a.height + b.height));
