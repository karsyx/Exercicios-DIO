function doSomething(callback){
    setTimeout(function(){
        //did something
        callback('First data');
    }, 1000)
}

function doOtherThing(callback){
    setTimeout(function(){
        //did other thing
        callback('Second data');
    }, 1000)
}

//caso preciso usar as duas funções de maneira sequencial, preciso do dado de uma e depois do dado da outra
function doAll(){
    try{
    doSomething(function(data){
        var processedData = data.split('');

        try{
        doOtherThing(function(data2){
            var processedData2 = data2.split('');

            setTimeout(function(){
                console.log(processedData, processedData2)
            }, 1000);
        });
    } catch (err){
        //handle error
    }
    });
} catch(err){
    //handle error
}
}
doAll();

//vamos rescrever o código acima utilizando Promises, afim de deixar o código mais legível
const doSomethingPromise = () => new Promise((resolve, reject) => {
    //throw new Error('Something wrong');
    setTimeout(function(){
        //did something
        resolve('First data');
    }, 1000)
});

const doOtherThingPromise = () => new Promise((resolve, reject) => {
    setTimeout(function(){
        //did other thing
        resolve('Second data');
    }, 1000)
});

console.log(doSomethingPromise);

//Pending -> em execução
//Fulfilled -> terminou de executar
//Rejected -> caso acontece algum erro

//doSomethingPromise.then(data => console.log(data))//.catch(error = console.log('Ops', error));
Promise.all([doSomethingPromise(), doOtherThingPromise()]).then((data) => {
    console.log(data)
}).catch(err => {
    console.log(err)
});


//Fetch, Async/Await e EventEmitter
//fetch faz requisições utilizando promises
fetch('/data.json').then(responseStream => {
    if (responseStream.status === 200) {
        return responseStream.json();
    } else {
        throw new Error('Request error');
    }
}).then(data => {
    console.log(data);
}).catch(err => {
    console.log('Error: ', err);
});

//ES7 - ASync / Await
const asyncTimer = () => new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve(12345);
    }, 1000);
});

const simpleFunc = async () => {
    const data = await asyncTimer();
    return data;
};

simpleFunc().then(data => {
    console.log(data);
});
console.log(simpleFunc());//Async ja transformou a função em uma promise
//async por se só não é muito utilizado sozinho, porque ela vem junta com o await, o await espera que outras promises sejam resolvidas
//somente dentro do async que posso utilizar o await

//EventEmitter
const EventEmitter = require('events');

class Users extends EventEmitter {
    userLogged(data) {
        this.emit('User logged', data);
    }
}

const users = new Users();

users.once('User logged', data => {
    console.log(data);
});

users.userLogged({ user: 'Celso' });
users.userLogged({ user: 'Ricardo' });