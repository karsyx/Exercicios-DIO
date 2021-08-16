//symbols e iterators
//symbols é uma maneira de gerar um identificador unico, um symbol nunca é igual ao outro

const uniqueId = Symbol('Hello');

console.log(uniqueId);

//symbol pode se utilizado para gerar propriedades "privadas"
const obj = {
    [uniqueId] : 'Hello'
};

console.log(obj);

//Propriedas well know symbols
Symbol.iterator
Symbol.split
Symbol.toStringTag
//Esses tipos podem ser utilizados para adicionar propriedades ao seu objeto

const obj2 = {
    [Symbol.iterator](){

    }
}

const arr = [1, 2, 3 ,4]
const it = arr [Symbol.iterator]();
const str = "Digital Inovation One";
/*
console.log(it.next());
console.log(it.next());
console.log(it.next());
console.log(it.next());
console.log(it.next());
*/
//quando eu invoco essa função iteradora do array, ele retorna um objeto de cada indice da iteração utilizando o .next
//iterador nada mais é que uma interface para você consumir passa a passo de uma lista ou estrutura de dados
/*
while (true) {
    let { value, done } = it.next()
    console.log(value);
    if (done){
        break;
    }
}
*/

//eckman6
for (let value of arr){
    console.log(value);
}
for (let value of str){
    console.log(value);
}//mesmo conportamento dos scripts acima

const obj3 = {
    values: [1, 2, 3 ,4],
    [Symbol.iterator](){
        let i = 0;

        return{
            next: () => {
                i++;

                return{
                    value: this.values[i - 1],
                    done: i > this.values.lenght
                };
            }
        };
    }
};


//GENERATORS são funções com pausa e elas despausam e retornam valores
function* hello(){
    console.log('Hello');
    yield;//pausa sem valor
    console.log('From');
    yield 1;//faz pausas com valor
    console.log('Function');
    const value = yield 2;//recebe valores de fora
    console.log(value);//recebe valores de fora

}

const it3 = hello();
console.log(it3.next());
console.log(it3.next());
console.log(it3.next());
console.log(it3.next('Outside!'));

function* naturalNumbers(){
    let number = 0;
    while (true){
        yield number
        number++;
    }
}
const it4 = naturalNumbers();
console.log(it4.next());
console.log(it4.next());
console.log(it4.next());

//
const obj4 = {
    values2: [1, 2, 3, 4],
    *[Symbol.iterator](){
        for (var i2 = 0; i2 < this.values2.length; i2++){
            yield this.values2[i2];
        }
    }
}
for (let value of obj4) {
    console.log(value);
}//podemos utilizar generator como uma forma para criar iteradores