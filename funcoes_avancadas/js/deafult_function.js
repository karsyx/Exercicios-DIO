function multiply(a, b){
    return a * b;
}

console.log(multiply(5, 3));

function multiply2(a, b){
    if (typeof b === 'undefined'){
        b = 1;
    }
    return a * b;
}

console.log(multiply2(5));

// Após eckeman6 podemos utilizar a dunção abaixo que tem a mesma função das demais acima

function multiply3(a, b = 1){ //function multiply3(a, b = a) o b referência ao primeiro parâmetro
    return a * b;
}

console.log(multiply3(5));
console.log(multiply3(5, 10));
console.log(multiply3(5, undefined));

//lazy evaluation
function randomNumber(){
    return Math.random() * 10;
}

function multiply4(a, b = randomNumber()){
    return a * b;
}

console.log(multiply4(7));