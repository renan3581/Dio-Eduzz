//Async  - É uma forma de fazer requisições assincronas, ou seja, não ira travar o fluxo do codigo.

const simpleFunc = async () => { //Async tranforma uma função em uma promise.
    return 123;
}
console.log(simpleFunc())


simpleFunc().then(data => {  //Como o retorno é uma promise, podemos usar o 'then' para fazer algo com o retorno.

    console.log(data * 2)
    

}).catch(err => {console.log(err)})//Podemos tratar o erro também.




//Await - Faz com que uma função async só seja executada quando uma outra função for executada.
const asyncTimer = () =>{
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("Timer finished!");
        }, 2000);
    })
}


const simpleFunc2 = async () => { //Async tranforma uma função em uma promise.
    const data = await asyncTimer(); // Define a qual função a função async deve esperar
    console.log(data);
    
    //Sera excutado de forma seguencial.
    const dataJson = await fetch('https://swapi.dev/api/people/1/').then(resStream => resStream.json());
    return dataJson;

    /*Para executar os dois ao meme tempo, use o 
    promise.all([asyncTimer(),fetch('https://swapi.dev/api/people/1/').then(resStream => resStream.json())])*/
}


simpleFunc2().then(data2 => {  //Como o retorno é uma promise, podemos usar o 'then' para fazer algo com o retorno.

    console.log(data2);

}).catch(err => {console.log(err)});//Podemos tratar o erro também.



