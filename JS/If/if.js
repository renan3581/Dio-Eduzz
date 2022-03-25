//Condicionais if else elseif

const array = [0,1,2,3,4,5,6]

array.forEach(item =>{
    if (item % 2===0) {
        console.log(`O numero ${item} é divisivel por 2.`)
    }else if(item % 3===0){
        console.log(`O numero ${item} é divisivel por 3.`) 
    }else{
        console.log(`O numero ${item} não é divisivel por 2 e nem por 3.`) 
    }
})

//No else if, se mais de uma condição for verdadeira, somente a primeira sera acionada, como é o caso do 6 acima.
//Para que todas as condiçoes sejam acionadas é necessario que exista somente if's e else's separados.



