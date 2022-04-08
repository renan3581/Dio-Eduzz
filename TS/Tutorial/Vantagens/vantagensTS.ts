/*  TypeScript é fortemente tipada, ou seja, ela define o tipo que um valor deve pertencer para ser atribuido a uma variavel.
    Isso permite um controle maior, assim evitando erros.
*/

//JS - Fracamente tipado.
/* Definindo o tipo dos argumentos que devem ser passados para função no JS. 
function soma(a,b){
    if(typeof a === 'number' && typeof b === 'number' ){
        return a + b
    }
}
*/

//Fazendo o mesmo no TS.
function soma (x: number, y: number): number {
    return x + y;
}