//Destructuring consiste em extrair valores de um array/obj e atribuir a variaveis diferentes.
//Array
let arr = ['maça', 'banana', 'laranja',['uva']]
let maca = arr[0]
let banana1 = arr[1]
let laranja = arr[2]
let uva1 = arr[3][0]

console.log(maca)

//Object
const obj = {nome: 'José', idade: 23, altura: 1.75, outros:{peso:80} }


//Destructuring Assignament
//array
let [apple, banana, orange, [grape]] = arr
console.log([apple, banana, [grape]])
console.log('')

//Object
let {nome, idade, altura, outros:others} = obj
console.log(nome, others.peso)
console.log({nome})
console.log('')

//Para mudar o nome da variavel em um objeto.
let {nome:nome2} = obj
console.log(nome2)
console.log('')

//Mudar o valor na nova variavel não altera o valor do original.
nome2 = 'Maria'
console.log(nome2)
console.log(nome)
console.log('')


//funções
//Array
function sum ([a,b] = [1,2]){ //Default values 1, 2
    //let a = arr[0]
    //let b = arr[1]

    return  a + b
}

console.log(sum([5,5]))
console.log('')

//Object
function sum2 ({a,b} = {a:1,b:2}){ //Default values 1, 2
    //let a = arr[0]
    //let b = arr[1]

    return  a + b
}

console.log(sum2({a:4, b:4}))

