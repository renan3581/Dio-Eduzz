
/*for([Expressão inicial][condição][incremento])
    Declaração
*/

const array = ['one','two','three']

for (let index = 0; index < array.length; index++) {
    const element = array[index];//Pega o valor do index e coloca na variavel.
    console.log(`Element #${index}: ${element}.`) 
}