const numero = 10.923;

const numeroStr = numero.toString();//Transforma o número em string.
console.log(typeof numeroStr);

const numeroFix = numero.toFixed(2);//Limita o número de casas decimais.
console.log(numeroFix);

const numeroFloat = parseFloat(numero);//Transforma o número em float.
console.log(numeroFloat);

const numeroInt = parseInt(numero);//Transforma o número em int. 
console.log(numeroInt);