//EventEmitter - Exclusivo do Node.
//Teste isso em um copilador de node online, se não tiver o node no seu pc .

const EventEmitter = require('events');

class Users extends EventEmitter {
    userLogged(data){
        this.emit('User logged',data)
    }
}  

const users = new Users();

users.on('User logged', data => {//Ira responder a todos os eventos.
    console.log(data)

/*users.once('User logged', data => { //Só ira responder a um evento por vez.
    console.log(data)
*/
});

 users.userLogged({ User: 'Renan Silva'})      
 users.userLogged({ User: 'Andreza Silva'})  
    
