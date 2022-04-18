//Fetch = Faz requisições a servidores, Similar ao xmlHttpRequest.
//Fetch é um stream, os dados devem ser processados para serem exibidos.
//Fetch é uma promise.

fetch('https://swapi.dev/api/people/1/') 
.then(response => { 

    if(response.status === 200){ //Verifica se a requisição foi bem sucedida.

    console.log(response) //Só ira passar informações sobre o fetch, não ira passar os dados obtidos.
    return response.json()//Processa os dados e os tranforma num json.
    
    }else{
        throw new Error('Request failed!');//Caso a requisição falhe, ira retornar um erro.
    }

}).then(

    data =>{ console.log(data)//Exibe os dados.

}).catch(err => { //Só ira funcionar se o erro for um erro de rede, error 404 não sera pego aki.

    console.log('Error',err)

})


fetch('https://swapi.dev/api/people/1')
    .then(response => response.json()).then(resp =>{ const pessoa = resp //Atribuindo a variavel
        console.log(pessoa.birth_year); // Pode ser colocado de forma direta tabem = resp.birth_year
    })
    


