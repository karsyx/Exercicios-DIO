// rest operator tem os '...', utilizável caso tenha vários argumentos a ser inseridos na função

const multiply = (...args) => args.reduce((acc, value) => acc * value, 1);

const sum = (...rest) => {
    //return args.reduce((acc, value) => acc + value, 0);
    return multiply.apply(undefined, rest);
};

console.log(sum(5, 5, 5, 2, 3));

// spread operator, também utlizado em arays, strings, literal objects e objetos iteraveis

const multiply2 = (...args2) => args2.reduce((acc, value) => acc * value, 1);

const sum2 = (...rest2) => {
    //return args.reduce((acc, value) => acc + value, 0);
    return multiply2(...rest2);
};

console.log(sum(5, 5, 5, 2, 3));
//
const str = 'Digital Inovation One';

function logArgs(...args){
    console.log(args);
}

logArgs(...str);

/* //exemplo de spread em um arrays, podemos clonar ou iterar arrays
const arr = [1, 2, 3, 4];
const arr2 = [...arr, 5, 6, 7];
*/

//spread em obejetos iterais só podem ser construído novos objetos
const obj = {
    test: 123
};

const obj2 = {
    ...obj,
    test: 'hello'
};

console.log(obj2);

//Destructuring
var arr = ['Apple', 'Banana', 'Orange', ['Tomato']];

var Apple = arr[0];
var Banana = arr[1];
var Orange = arr[2];

//Destructing

var [apple2, banana2, orange2, [tomato2]] = ['Apple', 'Banana', 'Orange', ['Tomato']];

console.log(tomato2);

//destructuring com objects

var obj3 = {
    name: 'Celso',
    props: {
        age: 26,
        favoriteColors: ['black', 'blue']
    }
};

var {
    props: { age: age2, favoriteColors: [color1, color2] }
} = obj3;

console.log(color1);