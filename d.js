const arrPerson = [
    { name: 'Teo', age: 10, height: 140 },
    { name: 'Ti', age: 15, height: 130 },
    { name: 'Tun', age: 13, height: 120 },
];

/*
    In ra mang cua name cua cac phan tu
    trong mang arrPerson thoa man dk age > 12
*/

console.log(arrPerson.filter(e => e.age > 12).map(e => e.name));

const arrPerson2 = arrPerson.filter(e => e.age > 12);
const arrName = arrPerson2.map(e => e.name);
console.log(arrName);
