//O spread operator tenta separar os valor de uma array ou Obj, para que sejam utilizados em um função, etc... 

function soma(a,b){
    return a + b
}

const meuArray = [1,2]

console.log(soma(1,2))
console.log(soma(meuArray))
console.log(soma(...meuArray))
console.log("")


//Tambem pode ser utilizado para definir um infinito numero de propriedades que uma função pode receber.

function soma2(...algo){
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