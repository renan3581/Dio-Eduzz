//Instanciando Arrays.
const conj1 = [1,2,3];//Intanciando diretamente.
const conj2 = Array.of(1,2,3);//Instancia uma array com os parametros passados.
const conj3 = new Array(3);/*Instanciando usando metodo, se um unico parametro for passado, ao inves de inserir o parametro no      
                             array, serão criado espaços vazios de acordo com o parametro passado.*/
console.log(conj1);
console.log(conj2);
console.log(conj3);
console.log('');

//Instanciando atraves de Array.from(), 'array like' ou iterable objects.
const divs = document.querySelectorAll('div');//Node list - array like
const arr = Array.from(divs); //Transforma o nodeList em array.
console.log(arr);//Funciona no console do navegador, no node não.

//Iterable object Exemplo
const iterable = Array.from('Iteravel'); 
console.log(iterable);
console.log('');


//Metodos de inserção e remoção de elemento no array.
const arr2 = [3,4];
console.log(arr2);

arr2.unshift(0,1,2)//Adiciona um ou mais elemento no inicio do array e retorna o tamanho do array se estiver num console.log.
console.log(arr2)

arr2.push(5,6,7);//Adiciona um ou mais elemento no final do array e retorna o tamanho do array se estiver num console.log.
console.log(arr2);

arr2.shift();//Tira o primeiro elemento do array e retorna ele caso esteja envolvido em um console.log.
console.log(arr2);

arr2.pop();//Tira o ultimo elemento do array e retorna ele caso esteja envolvido em um console.log.
console.log(arr2); 
console.log('')


//Juntando arrays (Concatenado 2 ou mais).
const nome = ['renan ']
const sobrenome = ['silva']

const nomeCompleto = nome.concat(sobrenome) //Concatena os 2 arrays, retornando eles como um novo array.
console.log(nomeCompleto)
console.log(nome)//Este metodo não altera os arrays originais.
console.log('')


//Slice - 'corta' elementos do array e retorna num novo.
const arr3 = [1,2,3,4,5,6]
const fatia = arr3.slice(1,4)//Inicio/fim.  O array original não é alterado
console.log(fatia)

const fatiaSomenteInicio = arr3.slice(3)//começa a corta da posição indicada e vai até o final 
console.log(fatiaSomenteInicio)

const fatiaContraria = arr3.slice(-2)//Começa a 'cortar' do final
console.log(fatiaContraria)
console.log('')


//Splice - adicionar novos elemento em posição desejada e tambem podendo remover itens.
const arr4 = [1, 2, 3, 4, 5]

arr4.splice(2)//Remove os elemento apartir da 2 posição
console.log(arr4)

arr4.splice(1, 0, 'First')//Posição, item a ser removido, itens a serem adicionados.
console.log(arr4)


//Iteração (percorrer o array e executa uma ação).
//For each.
const arr5 = ['Renan ', 'Silva ', 'da Rosa']

//Para cada elemento do array ative a função.
arr5.forEach((algo, indice)=>{ //Value, index e array 
    console.log(`${indice}: ${algo} `)//Imprime o indice e o valor armazenado nele.
});
console.log('')


//Map - Mesmo principio do forEach, mas o seu retorno é um novo array, não altera o original
const numeros = [10,11,12,13,14,15]
const novosNumeros = numeros.map((value,index)  => `${index}: ${value * 2} `)
console.log(novosNumeros)
console.log(numeros);
console.log('');


//Flat - Tira a profundidade de um array e retorna o valor em um novo array. (array dentro de array).
const profundidade = [1,4,[5,6]];
const semProfundidade = profundidade.flat()//Valor padrão 1
console.log(semProfundidade);
console.log(profundidade);
console.log('');

const muitoProfundo = [1,4,[5,6,[7,8]]];
const semProfundidade2 = muitoProfundo.flat(2)
console.log(semProfundidade2);
console.log(muitoProfundo);
console.log('')


//keys, values e entries - Array iterator.
const arr6 = [5,6,7,8];

//Percorre o array e recupera a chave.
const arrIterator = arr6.keys();
console.log(arrIterator.next());//Vai para o proximo item do array e verifica se ele é o ultimo
console.log(arrIterator.next());
console.log(arrIterator.next());
console.log(arrIterator.next());
console.log(arrIterator.next());
console.log('');

//Percorre o array e recupera o valor.
const arrIterator2 = arr6.values() 
console.log(arrIterator2.next());
console.log(arrIterator2.next());
console.log(arrIterator2.next());
console.log(arrIterator2.next());
console.log(arrIterator2.next());
console.log('');

//Percorre o array e recupera a chave eo valor.
const arrIterator3 = arr6.entries()
console.log(arrIterator3.next());
console.log(arrIterator3.next());
console.log(arrIterator3.next());
console.log(arrIterator3.next());
console.log(arrIterator3.next());
console.log('');


//Busca no array -  Metodos não alteram o array original
//Find - busca elementos no array e retorna o primeiro resultado.
const arr7 = [1,12,23,34,45,76,87,98,109]
const achado = arr7.find((value) => value > 30)//Primeiro item que for maior que 2.
console.log(achado)
console.log(arr7)
console.log('');

//findIndex - Busca o item pelo index e retorna o index do item.
const achado2 = arr7.findIndex((value) => value > 70 )//Primeiro item que for maior que 2.
console.log(achado2)
console.log(arr7)
console.log('');

//Filter - retorna todos os elementos que satisfazem uma condição.
const filtrado = arr7.filter((value, index ) => value > 20 && index > 3);
console.log(filtrado);
console.log(arr7)
console.log('');

//indexOf - Retorna o primeiro indice no qual o elemento foi encontrado.
const arr8 = [1,2,3,5,5,7,5]
const indexDoPrimeiro = arr8.indexOf(5)
console.log(indexDoPrimeiro)
console.log(arr8)
console.log('');

//lastIndexOf - Retorna o ultimo indice no qual o elemento foi encontrado.
const indexDoUltimo = arr8.lastIndexOf(5)
console.log(indexDoUltimo)
console.log(arr8)
console.log('');

//Includes - Verifica se o elemento existe no array.
console.log(arr8.includes(5))//True or false
console.log(arr8.includes(10))
console.log('');

//Some - Verifica se pelo menos 1 item do array satisfaz a condição.
const pessoas =  [{nome:'Renan', idade:23}, {nome:'Sergio', idade:45}, {nome:'Rose', idade:40}, {nome:'Andreza', idade:27}]
console.log(pessoas.some(pessoas => pessoas.idade > 40));//Verifica se alguem tem idade maior que 40
console.log(pessoas.find(pessoas => pessoas.idade > 40));
console.log('');

//Every - Verifica se todos os intens do array satisfazem a condição.
console.log(pessoas.every(pessoas => pessoas.idade > 40));
console.log(pessoas.every(pessoas => pessoas.idade < 50));
console.log('');


//Ordenação do array
//Sort. - Organiza o array no sentido primeiro - segundo
const arr9 = [1,5,3,4,6,9,7,8];
console.log(arr9.sort());
console.log(pessoas.sort((atual , proximo) => atual.idade - proximo.idade));
console.log('');

//Reverse - inverte os elemento do array.
console.log(arr9.reverse());
console.log('');


//Transformar arrays em outros tipos de dados.
//Join Concatena elementos de array separados por delimitado e retorna uma string.
const nomes = ['renan', 'silva','da','rosa'];
console.log(nomes.join(' '));//Delimitador.
console.log('');

//Reduce - retorna um novo tipo percorendo cada posição de um array.
const arr10 = [1,2,3,4,5];
const reducao = arr10.reduce((total,value)=> total += value, 0);/*Total = valor retornado, value = valor a ser somado, 
                                                                  0 = Tipo int*/
console.log(reducao);//int
console.log(pessoas.reduce((pessoasNomes,pessoa)=>pessoasNomes += pessoa.nome +' ','')) //'' = Tipo string
console.log('');
