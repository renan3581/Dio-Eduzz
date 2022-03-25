const users = ['renan', 'sergio','rose'] //Instanciando array.
/*const users2 = new Array('renan','sergio','rose') //Instanciando array atraves de metodo Array().
console.log('')
*/

const gender = { //Objeto.
    MAN: Symbol('M'),
    WOMAN: Symbol('W')
}

const persons = [ //Array de Objetos.
    {name:'renan',age:25, gender:gender.MAN},
    {name:'Sergio',age:47, gender:gender.MAN},
    {name:'rose',age:40, gender:gender.WOMAN}
]

//console.log(persons.length)//Diz o tamanho do array
//console.log(Array.isArray(persons))//Verifica se é array

//persons.forEach(person =>{ //Itera o array, ou seja, para cada item da array executar uma função
//    console.log(`Nome: ${person.name}`)
//})

//const mens = persons.filter(person =>person.gender===gender.MAN) //Filtra o array. Não altera o objeto, cria e retorna um novo.
//console.log(mens)


const personCourse = persons.map(person => { //Cria uma nova array e adiciona uma nova propriedade
    person.personCourse = 'introdução';
    return person;
})
console.log(personCourse)



const totalAge = persons.reduce((age,person) =>{ //Faz uma operação e transforma a array em uma novo tipo, neste caso em um  number.
    age += person.age;
    return age;
},0)

console.log(totalAge)


const totalEvenAges = persons
                        .filter(person =>person.age %2===0)
                        .reduce((age,person)=>{ 
                            age+=person.age; 
                            return age;},0)

console.log(totalEvenAges)