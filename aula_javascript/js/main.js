function botao(){
    document.getElementById("agradecimento").innerHTML = "<b>Obrigado por clicar</b>"; //innetHTML insere um texto no id informado do html
    //alert("Obrigado por apertar");
}

function redirecionar(){
    window.open("https://www.youtube.com"); // redireciona para outra página ao clicar no texto
    window.location.href = "https://github.com"; // mesma funcionalidade, só que na mesma página
}

function trocar(){
    document.getElementById("mousemove").innerHTML = "Obrigado por passar o mouse";
    //alert("trocar texto");
}

function voltar(){
    document.getElementById("mousemove").innerHTML = "Passe o mouse aqui";
}

function load(){
    alert("pagina carregada")
}

function funcaoChange(elemento){
    console.log(elemento.value);
}

/*
function soma (n1, n2){
    return n1 + n2;
}

//alert(soma(5, 10));

var validar;
function validaIdade(idade){
    if(idade >= 18){
        validar = true
    }else{
        validar = false
    }
    return validar;
}

var idade = prompt("Qual sua idade");
validaIdade(idade);
console.log(validar);
*/



/*var date = new Date();
alert(date);
*/


/*
for(var count = 0; count <= 5; count ++){
    console.log(count);
};
*/



/* 
var count = 0;
while (count < 5){ //estrutura de repetição
    console.log(count);
    count++;
}
*/



/*
var idade = prompt("Qual sua idade"); // vai exibir uma pergunta ao usuário
    if (idade >= 18){
        alert("maior de idade");
    } else{
        alert("menor de idade")
    };
*/

/*
var frutas = [{nome:"maçã", cor:"vermelha"}, {nome: "uva", cor: "roxa"}];
console.log(frutas);
console.log(frutas[1].nome);
*/

/*
var fruta = {nome:"maçã", cor:"vermelha"};
console.log(fruta);
console.log(fruta.nome);
console.log(fruta.cor);
*/

//var lista = ["maçã", "pêra", "laranja"];
//lista.push("uva"); //insere uma nova informação ao array
//lista.pop(); //retira a ultima entrada do array
//console.log(lista);
//console.log(lista[1]);
//console.log(lista.length); // vejo o tamanho do array
//console.log(lista.reverse()); // traz a ordem dos elementos do array de forma contrária
//console.log(lista.toString()); //transforma a sáida de modo array para string
//console.log(lista.join(" - "));

//var nome = "Filipe Maciel";
//var idade = 26;
//var idade2 =10;
//var frase = "Japão é o melhor time do mundo";

//alert(nome + " tem " + idade + " anos");
//alert(idade + idade2);
//console.log(nome);
//console.log(idade + idade2);
//console.log(frase.toUpperCase()); // coloca tudo em maíusculo
//console.log(frase.toLowerCase()); // tudo em minúsculo
//console.log(frase.replace("Japão", "Brasil")); Troca japão por Brasil
//alert(frase.replace("Japão", "Brasil"));