function copyObj (obj) {

    if (typeof obj !== 'object' || obj === null) {
        return obj
    };

    let newObj = structuredClone(obj);

    Object.setPrototypeOf(newObj, obj)

    return newObj
};

//Проверка
var Person = function (name, year) {
    this.name = name;
    this.year = year;
    this.calculateAge = 2024 - this.year;
};

var john = new Person('john', '1990');

const james = {
    ab: [12324],
    map: new Map([[1, 2]])
}

var newObj3 = copyObj(john);

console.log(newObj3 instanceof Person);

var newObj4 = copyObj(james);

console.log(newObj4);