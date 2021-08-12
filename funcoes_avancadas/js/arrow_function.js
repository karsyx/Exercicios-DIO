var sumOld = function(a, b) {
    return a +b;
}

// Arrow function
// "=>" sempre utilizando esses caracteres ("flecha")

var sum = (a, b) => a + b; // pode ser deifinido sem chaves apenas quando for apenas uma operação simples
// caso tenha que usar algum "if", definir variáveis e etc... deve ser colocado em chaves como uma função normal como no exemplo abaixo.
/*
var sum = (a, b) => {
    var x = 10;
    
    if (a > b){
    }

    return a + b;
}
*/

// var sum = a => a + 5; caso a função receba só um parâmetro, podemos escrever o único parâmetro sem o parênteses 

console.log(sum(5, 15));

/*
No arrow function não consigo invocar a função antes de definí-la

log ('teste'); // invocando antes

var log = value => {
    console.log(value);
}

Irá retornar erro, pois essa característica de hoisting não funciona com arrow functions
*/

var obj = {
    showContext: function showContext(){
        // this = obj

        setTimeout(() => {
            this.log('after 1000ms');
        }, 1000);
    },
    log: function log(value){
        console.log(value);
    }
};

obj.showContext();