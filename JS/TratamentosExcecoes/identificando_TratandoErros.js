//Uma das formas de identificar os erros é atraves do console do navegador.

//Erro de Hoisting.
/*
console.log(variavel);//Erro pois const não permite hoisting.
const variavel = 'teste';

console.log('Não Parou');//Não sera executado, pois uma vez que um erro aparece, o JS para toda execução do codigo seguinte.
*/

//Tratando o erro.
//O try catch é uma forma de tratar os erros, ele permite que o codigo continue a ser executado mesmo que ocorra um erro.
/*
try{

    console.log(variavel);//Erro pois const não permite hoisting.
    const variavel = 'teste';

}catch(error){

    console.log('Error:',error);//Descreve o erro.

}

console.log('Não Parou');//Apesar do erro ter ocorrido, o codigo ainda sera executado.
*/

//Customizando o erro e tratando.

class CustomError extends Error{

    constructor(message,data){
        super(message);//Chama o construtor da classe pai.
        this.data = data;//Nome do erro.
    }

}


try{
    const variavel2 = 'teste';
    console.log(variavel2);//Erro pois const não permite hoisting.
    

    const myError = new CustomError({
        message:'Custom error message.',
        data: {
            type:'Server Error'
        }
    }); 

    throw myError;//Lança o erro.
}catch(error){
   
    console.log(error)

}

console.log('Não Parou');//Apesar do erro ter ocorrido, o codigo ainda sera executado.