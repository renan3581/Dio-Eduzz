function fn(){
    return 'code here'
}

function fn2(){
    log("hoisting de função")

    function log(value){
        console.log(value)
    }
}

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
