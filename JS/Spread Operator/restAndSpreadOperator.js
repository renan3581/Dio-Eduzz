//O rest operator permite a uma função receber um número indefinido de parâmetros.
//O spread operator tenta separar os valor de uma array ou Obj, para que sejam utilizados em um função, etc... 

function soma(a,b){
    return a + b
}

const meuArray = [1,2]

console.log(soma(1,2))
console.log(soma(meuArray))
console.log(soma(...meuArray))//Spread operator - pega todos os valores do array e os separa em valores soltos.
console.log("")


//Tambem pode ser utilizado para definir um infinito numero de propriedades que uma função pode receber.

function soma2(...algo){//Rest operator - pega todos os valores e coloca em um array.
    let sum = 0;
    for (const som of algo){
        sum += som
    }
    return sum;
}

const minhaArray2 = [1,2,3,4,5,6,7,8,9,10]

console.log(soma2(4,5))
console.log(soma2(1,2,3,4))
console.log(soma2(...minhaArray2))
console.log("")


//Podemos passar outras propriedades e manipular elas tambem.
function soma3( a, b, ...algo2){
    
    let mult = a * b;
    let sum = 0;
    for (const som of algo2){
        sum += som;
    }
    return [sum, mult];
}

const minhaArray3 = [1,2,3,4,5,6,7,8,9,10];

console.log(soma3(4,5,1,1,1));
console.log(soma3(1,2,3,4));
console.log(soma3(...minhaArray3));


//Spread operator string.
let nome = "José"

console.log(...nome)


//Concatenando arrays e objetos com o Spread Operator.
const arr1 = [1, 2, 3, 4, 5]
const arr2 = [...arr1, 6, 7, 8, 9, 10]

console.log(arr2)