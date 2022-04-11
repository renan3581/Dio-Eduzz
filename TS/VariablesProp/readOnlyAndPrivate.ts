interface animalDomestico{
    
    nome:string;
    idade:number;
    parqueFavorito?:string;

}

type AnimalDomesticoSomenteLeitura = {
    +readonly [K in keyof animalDomestico]-?: animalDomestico[K];
}; 

class meuAnimalDometico implements AnimalDomesticoSomenteLeitura{
    nome;
    idade;
    parqueFavorito;
    
    
    constructor(nome:any, idade:any){
        this.nome = nome;
        this.idade = idade;
    }
}

const animal1 = new meuAnimalDometico('Rex', 2);

animal1.nome = 'jorge';

console.log(animal1);