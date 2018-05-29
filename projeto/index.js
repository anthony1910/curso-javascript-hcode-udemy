// Aqui eu escrevo no console
/**
 * 
 * comentário para documentação
 * 
 */
/* exemplos de console
console.log('Olá mundo');
console.log('Olá mundo');
console.log('Olá mundo');*/

// variávies
/*var olaMundo = "Hello World!";

console.log(olaMundo);
console.log(olaMundo);
*/

// operadores
/*
let a = 10; // atribuição
const b = "10"; // atribuição

console.log(a == b); // operador de comparação. Compara o valor
console.log(a === b); // operador de comparação. Compara o valor e o tipo da variável
console.log(a != b); // operador de comparação. Compara se o valor é diferente
*/

// condicionais
/*
let cor = "azul";

if (cor === "verde") {

    console.log("siga");

} else if(cor === "amarelo") {

    console.log("atenção");

} else if(cor === "vermelho") {

    console.log("pare");

}
*/

// tabuada
/*
let n = 7;

for (let i = 0; i <= 10; i++) {

    console.log(` ${i} X ${n} = ${i*n} `); // atual
    // antigamente -> console.log(i + " X " + n + " = " + (i * n));

}
*/

// funcoes
/*
function calc(x1, x2, operator){

    return eval(`${x1} ${operator} ${x2}`);

}
let resultado = calc(1, 2, '-');

console.log(resultado);
*/

// funcao anonima
/*
(function(x1, x2, operator){

    return eval(`${x1} ${operator} ${x2}`);

})(1, 2, '*');
*/

// arrow function
/*
let calc = (x1, x2, operator) => {

    return eval(`${x1} ${operator} ${x2}`);

}
let resultado = calc(1, 2, '-');

console.log(resultado);
*/

// eventos
window.addEventListener('focus', event => {

    console.log('focus');

});

document.addEventListener('click', event => {

    console.log('click');

})