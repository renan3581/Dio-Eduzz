//Factory
//Não chamam funçôes construtoras com 'new'.

//Class
/*class FakeUser{ 
    constructor (customProperties){
        return {
            name:'renan',        
            lastName:'silva',
            ...customProperties
        }
    }
}

const user = new FakeUser({name:'renan2',age:23, adress:'cesarão'})//Factory pattern só pode ser utilzado com funções, class exige o 'new'.
*/


////Função constutora
function FakeUser(customProperties){
    return {
        name:'renan',
        lastName: 'Silva',
        ...customProperties
    }
}

//factory pattern
const user = FakeUser({name:'renan2',age:23, adress:'cesarão'})
console.log(user)
console.log('')


//Singleton

/*Caso objeto não tenha sido instanciado ele sera. se ele ja tiver sido, 
sera sempre retornado o valor que foi passado primeiro, mesmo se tentarmos alterar-lo*/
function Pessoa(){
    if (!Pessoa.instance) {//Verifica se o objeto ja foi instanciado
        Pessoa.instance = this; //Instancia o objeto Pessoa / Cria o objeto.
    }
    return Pessoa.instance;//Se o objeto ja tiver sido instanciado, irá retorna-lo.
}

const p = Pessoa.call({name:'renan', age:23});//Metodo call() permite chamar a função e passar um contesto para ela.
const p2 = Pessoa.call({name:'sergio', age:40});//Altera o contesto do objeto e atribui a uma nova const.

console.log(p);
console.log(p2);//Apesar do valor ter sido alterado, retornara o mesmo da primeira instancia
console.log('');



//Decorator.
//Uma função recebe outra função como parametro e estende o seu comportamento sem modifica-lo explicitamente
let loggedIn = false;

function callIfAuthenticated(fn){//A função 'callIfAuthenticated' extendeu o uso da fução 'sum' , mas não modificou o seu comportamento.
    return loggedIn && fn();
}

function sum(a,b) {
    return a + b;
}

console.log(callIfAuthenticated(()=> sum(2,3)));//Diz que sum é a função ao que fn() se refere.
loggedIn = true;
console.log(callIfAuthenticated(()=> sum(2,3)));
console.log('');


//Observer.
class Observable{
    constructor() {
        this.observables = [];
    }


    subscribe(fn){
        this.observables.push(fn);
    }
    unsubscribe(fn){
        this.observables = this.observables.filter(subscriber =>subscriber !==fn)
    }

    notify(data){
        this.observables.forEach(observables => observables(data));
    }
}

const o = new Observable();
const logData1 = data => console.log(`Subscribe 1:${data}`);
const logData2 = data => console.log(`Subscribe 2:${data}`);
const logData3 = data => console.log(`Subscribe 3:${data}`);

o.subscribe(logData1);
o.subscribe(logData2);
o.subscribe(logData3);

o.notify('notified-1')
o.unsubscribe(logData2)//Remove o log2 da lista
o.notify('notified-2')
console.log('')

//Module.
//Ajuda e organizar o codigo sem a necessidade de usar variaveis globais.
//Permite exportar e importar classes, de outros arquivos js.

let name = 'default';

//getter
function getName(){
    return name;
}

//Setter
function setName(newName){
    name = newName;
}

/*
Export default { export ES6
    getName, 
    setName,
};
*/

module.exports = {//Export node
    getName, 
    setName,
};