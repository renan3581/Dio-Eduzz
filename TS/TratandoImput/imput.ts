const inserido = document.querySelector('input#inp') as HTMLInputElement;/*Faz com que o TS reconheça o valor do input.Se colocado 
                                                                        aki, fara com que seja possivel usar o 'inserido.value' em qualquer lugar do meu codigo*/

                                                                        
inserido.addEventListener('input', (/*ExibirValor*/)=>{
    console.log(inserido.value);

    //const i = ExibirValor.currentTarget as HTMLInputElement; Caso você queira usar o .value com o paremetro da função
    //console.log(ExibirValor.value);
    
});

