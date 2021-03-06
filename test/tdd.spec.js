//Para rodar esse aquivo deve se ter o nodeJS eo mocha.
//Nome do arquivo define que é um arquivo de teste do mocha.
//Para testar funçoes assíncronas, deve ser inserido no it('', function(done){}), sem o 'done' o teste sempre ira passar, idependente do resultado do teste.

const assert = require('assert'); //Assert
const Math = require('../JS/ArquivosDeTeste/math.js')
const expect = require('chai').expect; //Biblioteca de assert - 'chai'
const sinon = require('sinon'); //Biblioteca de stubs - 'sinon'
//Sync.
/*
describe('Math class', function(){//Descreve o que esta sendo testado
    it('5 + 5 = 10 ?', function(){//Descreve o teste.
        const math = new Math();

        assert.equal(math.sum(5,5), 10);//Verifica se o valor retornado é 10.
    });
})
*/

//Async.
//Timout maximo de 2000ms no mocha por padrão.
describe('Math class', function(){

    it('5 + 5 = 10 ?', function(done){//Teste Async.
        const math = new Math();
        
        this.timeout(5000);//Define um tempo maior de timeout para o mocha.

        math.sum(5,5, value=>{
            expect(value).to.equal(10); //Utilizando o chai para deixar mais legivel.
            done();
        })//Verifica se o valor retornado é 10.
    }); 

})


describe('Objeto',function(){

    it('Tem a propriedade nome e o seu valor é " "?', function(){
        const obj = {
            name:'Renan Silva'
        }

        expect(obj).to.have.property('name').equal('Renan Silva');
    });

})


describe('Testando sinon',function(){

    it('Chama o "req" com os valores de "index" e "sum".', function(){
      const req = {};
      const res = {
          load: sinon.spy()
      };

      const math = new Math();
      math.printSum(req,res,5,5);

      expect(res.load.calledOnce).to.be.true;
    });

})