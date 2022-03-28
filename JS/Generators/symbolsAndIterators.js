//Symbols
//São identificadores unicos para cada objeto.
//Servem como uma forma de alerta a outros desenvolvedores que uma determinada propriedade do objeto não deve ser alterada.
//São úteis para evitar conflitos entre nomes de propriedades e funções.


const uniqueID = Symbol('id'); /*O 'id' é o nome do identificador, mas não esta ligado ao seu valor, serve apenas para te ajudar a 
                                saber a que esse symbol se refere.*/
console.log(uniqueID);

//Mesmo que dois symbols possuam o mesmo identificador, eles não são iguais.
const uniqueID2 = Symbol('id');
console.log(uniqueID === uniqueID2);//false
console.log(' ');


const obj = {
    [uniqueID]: 'algo' ,
    nada: 'nada',
    tudo: 'tudo',  
    [uniqueID2]: 'algo2'    
}

console.log(obj); 
console.log(Object.entries(obj));//Se tentar acessar um objeto com um symbol, ele retorna somente os valores que não são symbols.
console.log(Object.getOwnPropertySymbols(obj));//Retorna um array com os symbols do objeto.
console.log(' ');


//Symbol.Iterators
const obj2 = {
    values: [1,2,3],
    [Symbol.iterator](){  //Torna o objeto iteravel
        let i = 0;
        return {
            next: () => {
                i++;   
            
                return{
                    value: this.values[i-1],
                    done: i >this.values.length
                }
            }
        }
    }
}

let it = obj2[Symbol.iterator]();
console.log(it.next());
console.log(it.next());
console.log(it.next());
console.log(it.next());
console.log(' ');

for (let value of obj2){//Podemos uma for of para pegar todos os valores desse objeto
    console.log(value);
}
console.log(' ');   

console.log([...obj2]);//Por termos transformado o objeto em um objeto iteravel, nos podemos utilizar o spread operator para criar um array dele.



//Generators - Funções que são iteraveis.

function* hello(){ //o '*' transforma a função em um generator, ou seja, em uma função iteravel
    console.log('Hello');
    yield 1;//Define a pausa do generator.

    console.log('World');
    //Como aki não tem yield, o generator não vai pausar, e vai continuar a execução.
    
    console.log('!');

    const value = yield; //Podemos definir um valor para o yield, e retornar esse valor.
    console.log(value);

}

const it2 = hello();

it2.next();
console.log('');
it2.next();
console.log('');
it2.next('Isso ae!');//Define o valor do yield


function* naturalNumbers(){
    let number = 0;
    while(true){
        yield number;
        number++;
    }
}

const it3 = naturalNumbers();

console.log(it3.next())
console.log(it3.next());
console.log(it3.next());
console.log('');


const obj3 = {
    values: [1,2,3],
    *[Symbol.iterator](){//Torna o objeto iteravel e em um generator
        for(let i = 0; i < this.values.length; i++){
            yield this.values[i];
        }
    }
}

for(let value of obj3){
    console.log(value);
}