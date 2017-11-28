const arr = [1, 3, 4, 2, 6, 7];

const arrPerson = [
    { name: 'Teo', age: 10, height: 140 },
    { name: 'Ti', age: 15, height: 130 },
    { name: 'Tun', age: 13, height: 120 },
]; // [ 'Teo', 'Ti', 'Tun' ];

Array.prototype.myMap = function(fn) {
    const arrOutput = [];
    for(let i = 0; i < this.length; i++) {
        const gt = fn(this[i]);
        arrOutput.push(gt);
    }
    return arrOutput;
}

console.log(arr.myMap(e => e * e));
console.log(arr.myMap(e => e % 2 === 0));
console.log(arrPerson.myMap(e => e.name));

// console.log(arr.myMap());

// [1, 9, 16, 4, 36, 49]
