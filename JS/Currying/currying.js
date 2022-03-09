/*
function soma(a,b){
    return a + b
}

console.log(soma2(2,3))
console.log(soma2(2,4))
console.log(soma2(2,6))
console.log(soma2(2,5))
*/


//Currying. - Consiste em transformar funçoes que recebem multiplos parametros em cadeias de funções que recebem um unico parametro.
function soma (a){
    return function (b){
        return a+b
    }
}

const soma2 = soma(2)

console.log(soma2(3))
console.log(soma2(4))
console.log(soma2(6))
console.log(soma2(5))

