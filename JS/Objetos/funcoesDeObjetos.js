const user = {name:'renan', lastName:'silva da rosa'}

//console.log(Object.keys(user))//Diz quais são as chaves do objeto.

//console.log(Object.values(user))//Diz quais são os valores do objeto.

//console.log(Object.entries(user))//Retorna uma array de valores contendo as propriedades dos objetos.

//Object.assign(user, {fullName:'renan silva da rosa'})//Adiciona uma nova propriedade ao objeto
//console.log(user)

//console.log(Object.assign({}, user, {age:23}))//Cria uma nova array mergeando(juntando) um outra a atual, sem alterar a antiga
//console.log(user)

/*
const novoObjeto = {foo: 'bar'};
Object.freeze(novoObjeto);//Congela o objeto, impedindo que ele receba qualquer tipo de alteração.

novoObjeto.foo = 'changes'
delete novoObjeto.foo
novoObjeto.bar = 'foo'
console.log(novoObjet)
*/

const person = {name:'renan'}
Object.seal(person)//Não permite a criação de novas propriedades, nem exclusão de propriedades existentes, mas permite a alteração delas. 

person.name = 'jorge'
delete person.name
person.age = 23
console.log(person)
