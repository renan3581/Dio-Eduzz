//Interfaces - Definem o formato de um objeto.

interface IAnimal {
    nome: string;
    tipo: 'terrestre' | 'aquatico' | 'aereo';
}



const animal: IAnimal = { //A constante animal implementa a interface IAnimal.
    //Ao aperta Ctrl + space, o TS irá mostrar todos os atributos que a interface possui.
    nome: 'Rex', 
    tipo: 'terrestre'
}



//Interfaces funcionam como classes entao você pode extender elas. (pegar os atributos de outras interfaces)
interface IFelinos extends IAnimal {
    visaoNoturna: boolean;
}

const felino: IFelinos = { 
    nome:'Nino',
    tipo: 'terrestre',
    visaoNoturna: true
}



//Podemos adicionar funções a interfaces.
interface Carro {
    velocidade: number;
    placa: string;
    ligar(): void;
    somDoMotor(somEmDB:number): void;
}

const carro: Carro = {  
    velocidade: 0,
    placa: 'ABC1234',
    ligar: () => {
        console.log('Ligando o carro...')
    },
    somDoMotor: (somEmDB) => {
        console.log(`O som do motor está em ${somEmDB} dB`)
    }
}

console.log(carro.ligar(), carro.velocidade, carro.placa, carro.somDoMotor(10))


//Type - Pegar atributos de outras interfaces e adicionar a uma nova interface, de forma alternada ou não.

interface ICaninos{
    porte: 'pequeno' | 'medio' | 'grande';
}


type IRaca = ICaninos | IFelinos; //Pega os atributos de ICaninos ou IFelinos e adiciona a uma nova interface.


const animal2: IRaca = {
    nome: 'Rex',
    tipo: 'terrestre',
    porte: 'medio'//Como o atributo escolhido é de ICaninos, nos não poderemos adicionar o atributo de IFelinos.
}



//Generic types.
function SubstituiValor<T>(array: T[], value: T){ /*O <T> é um generics. (Todo valor que receber o tipo 'T' devera ser do mesmo tipo do    
                                                  primeiro)*/
    return array.map(() => value)
}

//console.log(SomaArray([1,2,3], 'a')) //Da erro pois o tipo 'a' não é do mesmo tipo do primeiro.
console.log(SubstituiValor([1,2,3], 5))





//Condicionais apartir de parametros.

interface iUsuario{
    id:string;
    email:string;

}

interface IAdmnistrador extends iUsuario {
    cargo:'gerente' | 'coordenador' | 'supervisor';
}


function redirect(usuario: iUsuario | IAdmnistrador){
    if('cargo' in usuario){//Verifica se o parametro possui o atributo 'cargo'.
        console.log('Redirecionando o admin...')
    }else{
        console.log('Redirecionando o usuario...')
    }
}

const usuario: IAdmnistrador = {

    id: '1',
    email: 'rewe',
    cargo: 'gerente'

}

redirect(usuario)



//Variaveis opcionais (?).
interface iUsuario2{
    id:string;
    email:string;
    cargo?:'gerente' | 'coordenador' | 'supervisor' | 'funcionario'; //? - Transforma o atributo em opcional.
}


function redirect2(usuario2: iUsuario2){
    if(usuario2.cargo){//Verifica se o parametro possui o atributo 'cargo'.
        console.log('Redirecionando o admin para...')
    }else{
        console.log('Redirecionando o usuario...')
    }
}


const usuario2: iUsuario2 = {

    id: '1',
    email: 'rewe',

}

redirect2(usuario2)



//Omit

interface IPessoa{
    nome: string;
    idade: number;
    nacionalidade: string;
}

interface Brasileiro extends Omit <IPessoa,'nacionalidade'> {} //Omit - Remove um atributo de uma interface.

const brasileiro:Brasileiro = {
    nome: 'Rafael',
    idade: 25

}
