const user = {name:'renan'};

user.name = 'Nome2'; //Altera o valor de name para 'nome2'
console.log(user);

user['name'] = 'Nome3';//Altera o valor de name para 'nome3'
console.log(user);

const prop = 'name';
user[prop] = 'nome4'; //Altera o valor de name para 'nome4' 
console.log(user);

user.lastName = "Silva da rosa"; //Cria uma propriedade chamada 'lastName'. tambem poder ser usado user['lastname'].
console.log(user);

delete user.name; //Deleta a propriedade 'name'.
console.log(user);

