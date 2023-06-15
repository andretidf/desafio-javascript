let users = [];
let posicao = 1;
class User {
    
    constructor(nome, idade, email) {
      this.nome = nome;
      this.idade = idade;
      this.email = email;
      this.classificacao = null;
    }
  }

  function cadastro(nome, idade, email){
      const user = new User(nome, idade, email);
  
      if(user.idade < 12){
          user.classificacao = 'Criança'
      }else if (user.idade <= 17){
          user.classificacao = 'Adolescente'
      }else{
          user.classificacao = 'Adulto'
      }
  
      users.push(user);
      return user;
  }
module.exports = cadastro;