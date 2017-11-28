const arrPerson = [
    { name: 'Teo', age: 10, height: 140 },
    { name: 'Ti', age: 15, height: 130 },
    { name: 'Tun', age: 13, height: 120 },
];

Array.prototype.myForEachName = function() {
    for(let i = 0; i < this.length; i++){
        console.log(this[i].name);
    }
}

Array.prototype.myForEachAge = function() {
    for(let i = 0; i < this.length; i++){
        console.log(this[i].age);
    }
}

Array.prototype.myForEachAge2 = function() {
    for(let i = 0; i < this.length; i++){
        console.log(this[i].name +  ' ' + this[i].age);
    }
}

Array.prototype.myForEach = function(fn) {
    for(let i = 0; i < this.length; i++){
        fn(this[i]); // console.log(arrPerson[i])
    }
}

// arrPerson.myForEach(x => console.log(x));
arrPerson.forEach(x => console.log(x));
