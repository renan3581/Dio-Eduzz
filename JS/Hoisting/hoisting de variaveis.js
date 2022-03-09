/*Hoisting é um comportamento padrão do javascript que consiste em mover a declaração de uma variavel para o topo do escopo em que ela esta presente */

function fn(){
    console.log(text);

    var text = "exemplo";

    console.log(text);
}

fn();

//Em outras linguagens o codigo não seria executado pois diria que a variavel não foi declarada.


/*
O que o JS ira fazer.

function fn(){
    var text; //Declara a variavel

    console.log(text);

    text = "exemplo"; //Atribui um valor a ela

    console.log(text);
}
*/

