/* Prototype
//Constructor function
function Animal(qtdePatas){
    this.qtdePatas = qtdePatas //Metodo
}

//Constructor function
function Cachorro(morde){
    Animal.call(this, 4); //pega o valor do objeto criado na outra função e insere nesta.                                    
                        //this. é o contesto no qual a funçao Animal sera chamada, 4 é o valor. 
    this.morde = morde  //Metodo
}

const pug = new Cachorro('não')//Apartir de agora o valor qtdePatas faz parte do objeto Cachorro e não mais de Animal

console.log(pug)
*/


//Class
class Animal {
    constructor (qtdePatas){ //Metodo construtor
        this.qtdePatas = 2
    }
}

class Cachorro extends Animal { //Herdar
    constructor(morde){
        super(4)//Chama o constructor da classe Animal
        this.morde = morde;
        
    }
}

const pug = new Cachorro('Não')
console.log(pug)



//#######################################################################################################################################

//Prototype:
/*
//Constructor function
function Animal2(){}

//O prototype contem a definição do objeto, assim permitindo escrever valor padrões para ele. Assim fazendo com que não seja necessario criar a mesma função toda vez que um novo objeto for instanciado.
Animal2.prototype.qtdePatas = 0; //Define a qtdePatas padrão do objeto animal
Animal2.prototype.movimentar = function(){}//Define que esse objeto tem uma função "movimentar" nele por padrão.

//Constructor function
function Cachorro2(morde){
    
    this.qtdePatas = 4  //Metodo
    this.morde = morde   
    
    
}

Cachorro2.prototype = Object.create(Animal2)//Define que o protorype 'Cachorro2' é derivado do prototype de 'Animal2', ou seja, eles 
                                              //possuem o mesmo padrão.
Cachorro2.prototype.latir = function(){
    console.log("Au! Au!")
}

const pug2 = new Cachorro2('não')//Apartir de agora o valor qtdePatas faz parte do objeto Cachorro e não mais de Animal
const pitibull2 = new Cachorro2('sim')

console.log(pug2)
console.log(pitibull2)

*/


//Class
class Animal2 {
    constructor (qtdePatas){ //Metodo construtor
        this.qtdePatas = 0;
    }

    movimentar() {}
}

class Cachorro2 extends Animal { //Herdar
    constructor(morde){
        super()//Chama o constructor da classe Animal
        this.qtdePatas = 4;
        this.morde = morde; 
    }
    
    latir(){
            console.log('Au! Au!')
    }

}

const pug2 = new Cachorro2('Não')
const pitibull2 = new Cachorro2('Sim')
console.log(pug2)
console.log(pitibull2)
