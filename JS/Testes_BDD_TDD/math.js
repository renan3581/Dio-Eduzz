//Esse é so o código que vai ser testado.
//O teste esta na pasta test no diretorio raiz.

/*
class Math{

    sum(a,b){
        return a+b;
     }
}

module.exports = Math;
*/


class Math{

    sum(a,b,callback){
        setTimeout(function(){
            callback(a+b);
        }, 5);
     }
}

module.exports = Math;