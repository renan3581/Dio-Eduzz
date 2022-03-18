//In
//algo in algumaCoisa

//Arrays
let videogame = ['xbox','ps4','ps5','pc'];
console.log(0 in videogame); //retorna true - 0 = Indice.
console.log(4 in videogame);//Retorna false - indice 4 não existe.
console.log('ps4' in videogame);//ira dar false, pois o que deve ser especificado é o indice e não o valor.


//Objetos
let celular = {marca:'sansung', modelo:121231};
console.log('marca' in celular);//Verifica se a chave existe no Objeto


//Instanceof
let dia = new Date(2018,12,17);
console.log(dia instanceof Date)