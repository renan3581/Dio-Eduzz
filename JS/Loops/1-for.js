
/*for([Expressão inicial][condição][incremento])
    Declaração
*/

const array = ['one','two','three']

for (let index = 0; index < array.length; index++) {
    const element = array[index];//Pega o valor do index e coloca na variavel.
    console.log(`Element #${index}: ${element}.`) 
}


//Par impar
let numero = 11;

console.log('Numeros:')
for (let i = 0; i < 12; i++) {
    
      if(numero%2 !== 0){
        console.log(` ${numero} `)
      }
        numero++;
      
      //Escreva a sua lógica aqui
}