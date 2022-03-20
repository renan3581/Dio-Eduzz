var a = 1; //Escopo global, redeclaravel e mutavel
let b = 'a'; //Escopo de bloco, não redeclaravel e mutavel
const c = true; //Escopo de bloco, não redeclaravel  e imutavel


//Mutabilidade e Escopo
//var.  
var x = 1;
console.log(x);

var x = 'a';//var permite a reatribuição e redeclaração no mesmo escopo
console.log(x);

function bloco(){
     x = 3
    console.log(x);
}
bloco();

x = {1:1,2:2,3:3};//Permite mudança de valores 
console.log(x);
x.novo = 6 //e atribuição de novos.
console.log(x);
console.log('');


//let.
let y = 1
console.log(y);

//let y = 'b' //Let permite a reatribuição, mas não a redeclaração no mesmo escopo.
//console.log(y);

function bloco2(){
    let y = 2 //Como o escopo mudou, a redeclaração se torna possivel.
    console.log(y);
    
}
bloco2();

 y = {1:1,2:2,3:3}; //Permite mudança de valores 
 console.log(y);
 y.novo = 6 //e atribuição de novos.
 console.log(y);
 console.log('');



//Const.
//const z = 1
//console.log(z);

//z = 2 //const não permite a reatribuição e nem a redeclaração no mesmo escopo.
//console.log(z);

function bloco3(){
    const z = 3 //Como o escopo mudou, a redeclaração se torna possivel.
    console.log(z);
}
bloco3();


const z = {nome:'renan',sobrenome:'silva',idade:23}; //Não permite mudar nada.
console.log(z)

z.data = "1998"//Mas permite adicionar coisas novas.
console.log(z)

