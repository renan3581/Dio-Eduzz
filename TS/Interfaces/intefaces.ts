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