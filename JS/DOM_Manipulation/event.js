//Muda a cor quando clica no botão e volta ao normal quando clica dnv.
var button_MudaCor = document.querySelector('button');

button_MudaCor.addEventListener('click', function (event) {//Espera que seja feita alguma ação sobre o elemento, nesse caso 'click'.

  if (document.body.classList.contains('changeColor')) {
    document.body.classList.remove('changeColor'); //remove a classe do body.
    
  } else {
    document.body.classList.add('changeColor'); //Adiciona a classe a body.  
  }

});