//Operações com strings

const texto = "Alguma coisa aki!"

console.log(texto.length);//Tamanho da string

console.log(texto.split(' '));//Ira separar a string onde tiver o elemento citado, neste caso o espaço.

console.log(texto.replace('Alguma','Qualquer'));// Troca o 1 pelo 2.

console.log(texto.slice(-1));//Mostra o ultimo caractere

console.log(texto.slice(1));//Mostra a string apartir do segundo caractere

console.log(texto.slice(3,-1));//Mostra a os caracteres da quarta posição até a ultima

console.log('texto'.substring(0,2));//Mostra as duas primeira letras. ( 0 Inicio , 2 fim)
