// maneira clássica

/*
var obj = {
    prop1: 'Digitral Inovation One'
};

console.log(obj);
*/

// ou

var prop1 = "Digital Inovation One";

var obj = {
    prop1: prop1
};

console.log(obj);

// Eckman6

var prop2 = "Digital Inovation One2";

var obj2 = {
    prop2
};

console.log(obj2);

//Também pode ser usado para referênciar uma função

function method1() {
    console.log('method called');
}

var obj3 = {
    method1
};

obj3.method1();

// função encurtada abaixo:
var obj4 = {
    sum(a, b){
        return a + b;
    }
};

console.log(obj4.sum(1, 5));

//
var propName = 'test';

var obj5 = {
    [propName + 'concat']: 'prop value'
};

console.log(obj5);