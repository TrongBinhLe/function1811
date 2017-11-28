const arrPerson = [
    { name: 'Teo', age: 10, height: 140 },
    { name: 'Ti', age: 15, height: 130 },
    { name: 'Tun', age: 13, height: 120 },
];

// arrPerson.forEach(person => console.log(person.height));
// const result = arrPerson.filter(person => person.age > 12);
const result = arrPerson.myFilter(person => person.age > 12);
console.log(result);