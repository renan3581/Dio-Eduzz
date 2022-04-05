//Utilize o devtools do navegador.
//A aba network te da imformações sobre as requisições do servidor.
//Tempo de resposta, tipo, status, iniciador, tamanho do conteudo, nome, etc.

//Quando o erro esta no arquivo JS, o erro é exibido no console do navegador, indicando tambem a linha no qual o erro esta.
//Basta clicar na linha que sera aberta a aba sources onde ira exibir seu codigo com o errro em destaque.

//Comandos console. são seus melhores aliados.
console.log('1')
console.warn('2')
console.error('3')

//
console.log('')
//

console.group('Grupo.')
console.log('Informação no grupo.')
console.log('Mais informação no grupo.')
console.groupEnd('Grupo Fim.')

//
console.log('')
//

console.trace('Trace.')

console.time('Log Tempo.')
setTimeout(() => {
    console.timeEnd('Log Tempo.')
}, 2000)

//
console.log('')
//

console.table(['Renan Silva', 'Desempregado'])

//
console.log('')
//

console.log('%c Teste', 'color: gray ; font-size: 20px;')

//
console.log('')
//

console.assert(1===2, '2 não é igual a 1')