

function listaTabela(){
    let tbody = document.getElementById('tbody');
    let users_classificados = users;  
    users_classificados.forEach((x)=>{
        insereLinha(x);
    })
}



function novo_usuario(){
    let nome = document.getElementById('name');
    let email = document.getElementById('email');
    let idade = document.getElementById('idade');

    let user_cadastro = cadastro(nome.value, idade.value, email.value);
    nome.value = '';
    email.value = '';
    idade.value = '';

    nome.classList.remove('is-valid');

    email.classList.remove('is-valid');

    idade.classList.remove('is-valid');

    return user_cadastro;
    
}

function valida_inputs(){
    let isValid;

    let nome = document.getElementById('name');
    let email = document.getElementById('email');
    let idade = document.getElementById('idade');

    if(nome.value.length > 3){
        nome.classList.add('is-valid');
        nome.classList.remove('is-invalid');
        isValid = true;
    }else{
        nome.classList.add('is-invalid')
        nome.classList.remove('is-valid');
        isValid = false;
    }

    if(email.value.length > 3){
        email.classList.add('is-valid');
        email.classList.remove('is-invalid');
        isValid = true;
    }else{
        email.classList.add('is-invalid')
        email.classList.remove('is-valid');
        isValid = false;
    }

    if(idade.value !== ''){
        idade.classList.add('is-valid');
        idade.classList.remove('is-invalid');
        isValid = true;
    }else{
        idade.classList.add('is-invalid')
        idade.classList.remove('is-valid');
        isValid = false;
    }

    return isValid;
}


    


function insereLinha(x){

    let tr = tbody.insertRow();

    tr.classList.add('linha');

    let td_id = tr.insertCell();
    let td_nome = tr.insertCell();
    let td_email = tr.insertCell();
    let td_idade = tr.insertCell();
    let td_classificacao = tr.insertCell();

    td_id.innerText = posicao++;
    td_nome.innerText =  x.nome;
    td_email.innerText = x.email;
    td_idade.innerText = x.idade;
    td_classificacao.innerText = x.classificacao;

    td_id.classList.add('center');
    
}


function mostrar_no_console(){
        console.log('---------------------------------------------------------------------')
        console.log('-------------------------DESAFIO 4-----------------------------------')
        users.forEach((x) => console.log(`Nome: ${x.nome}, Idade: ${x.idade}, Email: ${x.email}, Classificação: ${x.classificacao}`));
        console.log('---------------------------------------------------------------------')
        console.log(`Tamanho do Array / Número de cadastros = ${users.length}`);
        console.log('---------------------------------------------------------------------')
}





listaTabela();
mostrar_no_console();
document.getElementById('cadastro_novo_usuario').onclick = function (){
  if(valida_inputs()){
      insereLinha(novo_usuario());
      mostrar_no_console();
  }};