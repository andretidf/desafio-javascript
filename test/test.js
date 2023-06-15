
//########################### TESTES #######################################################
var assert = require('assert');


const cadastro = require('../scripts/cadastro.js');

  describe('#cadastro())', function (){
    
    it('Deve retornar a classificação - Adulto', function (){
      console.log(cadastro)
      let cad = cadastro('André', 38, 'andre@email.com');
      assert.equal(cad.classificacao, 'Adulto' );
    });

    it('Deve retornar a classificação - Criança', function (){
        let cad = cadastro('André', 11, 'andre@email.com');
        assert.equal(cad.classificacao, 'Criança' );
      });

    it('Deve retornar a classificação - Adolescente', function (){
    let cad = cadastro('André', 17, 'andre@email.com');
    assert.equal(cad.classificacao, 'Adolescente' );
    });
  });