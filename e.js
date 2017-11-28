const arrPerson = [
    { name: 'Teo', age: 10, height: 140 },
    { name: 'Ti', age: 15, height: 130 },
    { name: 'Tun', age: 13, height: 120 }
];

Array.prototype.myFindIndex = function(fn) {
    for(let i = 0; i < this.length; i++) {
        if (fn(this[i], i)) return i;
    }
    return -1;
}

// console.log(arrPerson.myFindIndex((person, index) => person.age > 12 && index > 1));
// console.log(arrPerson.findIndex((person, index) => person.age > 12 && index > 1));
console.log(arrPerson.find((person, index) => person.age > 12 && index > 1));
