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


function taxacao(description, tax , price){
    tax =  tax ||0.05
    description = description || 'Default item'
    price = price || 0
    const total = price + ( price * tax)
    return  `${description} with tax cost: ${total}`
}

console.log(taxacao(0, 0, 40))

