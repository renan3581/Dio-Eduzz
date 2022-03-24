//Funções:

//Função simples - Função comum, nome atribuido a ela.
function log (...values){
    console.log(values);//Como aqui não tem o spread operator, o resultado sera um array.
}
log('teste',1)


//Funçoes anônimas - Precisam serem atribuidas a uma variavel ou passadas como parâmetro para outra função. 
let log2 = function(...values){//O nome da variavel passa a ser o nome da função.
    console.log(...values);//Resultado sera valores separados.
}('teste',2)//Chamado da função implicito.


//Arrow Function - Comportamento similar a funções anônimas
/*
Arrow functions não podem ser funções contrutoras.
Elas não possuem a propriedade hoisting, ou seja, elas não podem ser chamadas antes de serem criadas.
*/

let log3 = (...values)=> console.log(values);//Return imediato, não é necessario {}
log3('teste3', 3);

let sum = (a,b) => { //Expressão, necessario {}.
    let c = 10;
    return  a + b - c;
}
console.log(sum(20,30));

let unicoParametro = a => console.log(a);//Quando a apenas um parâmetro o uso de () se torna desnecessario.
console.log('');


//Default functions arguments - Valores pardrões a serem inseridos nos parametros caso argumentos não sejam passados.
let multiply = (a,b) => {
    a = a || 1;
    return a * b;
    //A ordem dos parametros não é importante, porem 0 = false, oq torna impossivel realizar operações matematicas com ele.
}
console.log(multiply(0,3));

let taxacao = (description, tax , price) => {   
    description = description || 'Default item';
    tax =  tax ||0.05;
    price = price || 0;
    const total = price + ( price * tax);
    return  `${description} with tax cost: ${total}`;
}
console.log(taxacao('Algo', 0, 40));


//Para resolver o problema do 0 = false, podemos passar o valor default direto nos parâmetros.
let padrao = (a , b = 1 ) => a + b ; //Caso apenas um dos parâmetros precise de um valor default, ele deve ser o segundo mencionado.
console.log(padrao(1));

let padrao2 = (a , b = a ) => a + b ; //Podemos dizer que o valor padrão de um parâmetro é o outro.
console.log(padrao2(2));


//Lazy evaluation.
//A função random só sera invocada quando um parâmetro de teste não possuir um valor.

let randomNumber = () => {
    return Math.random() * 10;
}

let teste = (a, b = randomNumber()) => {
    return a * b
}

console.log(teste(5))
console.log(teste(5))
console.log(teste(5))