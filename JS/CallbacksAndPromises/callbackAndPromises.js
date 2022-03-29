//Callback permite a funções do tipo timeout a passarem parametros para outras funções.
//Callbacks tornam o codigo muito poluido se utilizados de forma errada.
//try e catch são uilizados para tratar erros.

/*
    function doSomething(callback){
        setTimeout(function(){  //Permite que um programa seja executado apos um determinado tempo.
            callback('First Data')
        },1000);
    }

    function doOherThing(callback){
        setTimeout(function(){
            callback('Second Data')
        },1000);
    }

    function doAll(){
        try{

            doSomething(function(data){
                var processedData = data.split('');
                
                try{  
                    doOherThing(function(data2){
                        var processedData2 = data2.split('');
                        
                        try{
                            setTimeout(function(){
                                console.log(processedData,processedData2)
                            },1000);
                        }catch(err){
                            //Handle error
                        }

                    })
                }catch(error){
                    //Handle error
                }

            });

        }catch(err){
            //Handle error
        }
    }

    doAll();
*/


//Promisses.
//Para que não seja necessario criarmos codigos como o de cima para tratar erros, nos usamos as promises.
//Promisses podem ter 3 status (pending, fulfilled, rejected)


const doSomethingPromise = () => new Promise((resolve,reject)=>{ //() => transforma a promise em uma função.
    //throw new Error('Something went wrong');
    setTimeout(function(){  //Permite que um programa seja executado apos um determinado tempo.
        resolve('First Data')
    },1500);
});

const doOtherThingPromise = () => new Promise((resolve,reject)=>{
    //throw new Error('Something went wrong');
    setTimeout(function(){  //Permite que um programa seja executado apos um determinado tempo.
        resolve('Second Data')
    },1200);
});

//console.log(doSomethingPromise);//ira entrar em status Pending e então ira executar o timeout.

//doSomethingPromise.then(data => console.log(data))//Desta forma ele não ira entrar em pending, irá executar o timeout
/*doSomethingPromise().then(data =>{
    console.log(data); 
    return doOtherThingPromise()
})
.then(data2 =>console.log(data2))//Encadendo promises.
.catch(error => console.log('Ops',error))//Para tratar erros, sera executado para qualquer um dos 2 que apresentar erro.
                 
console.log('')
*/

//Executndo as promises em paralelo.
/*Promise.all([doSomethingPromise(),doOtherThingPromise()])
    .then(data => console.log(data))
    .catch(error => console.log('Ops',error))//Se qualquer uma das duas apresentar erro, sera exibido o erro.
*/

//Executando a promise que resolver primeiro.
Promise.race([doSomethingPromise(),doOtherThingPromise()])
    .then(data => console.log(data))
    .catch(error => console.log('Ops',error))//Se qualquer uma das duas apresentar erro, sera exibido o erro.