//Parâmetros e Argumentos.
/*
    Parâmetros são as variaveis que irão armazenar os valores passado para serem utilizados a função 
    Argumentoss são os valores a serem inseridos nessas variaveis.
  
     Param Ex.:
        Function algo(parâmetros){}

     Argum Ex.: 
        algo(argumentos)) Tudo que for passado aki sera armazenado em 'parâmetros'

    Spread operator permite que um parametro receba mais de um valor e assim se torne um array

        Function algo(...parâmetros){
            console.log(parâmetros)
        }
        algo(1,'vaca', true))  - retorna [1, 'vaca', true]
    Se colocar o spread operator no console.log() tambem, o resultado sera valores soltos ao invez de um array.
*/


function fn(){
    return 'code here'
}
console.log(fn())

//função dentro de função.
function fn2(){
    log("hoisting de função")

    function log(value){
        console.log(value)
    }
}
fn2()


//Arrow Function
const arrowFn = () => 'code here' //Apenas uma linha de codigo, return implicito.

const arrowFn2 = () => {
    //Mais de uma expressão
    return 'code here'
}



const fn3 = () => {
   const log = (value) => { 
        console.log(value)
    } 
    
    log(120) 
}
fn3()




