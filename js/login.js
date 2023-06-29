var inputCadastro = document.querySelector('input#cdlogin');
var inputCdSenha = document.querySelector('input#cdpassword');
var inputLogin = document.querySelector('input#login');
var inputSenha = document.querySelector('input#password');
var btnAcesso = document.querySelector('button#acessar');
var btnRegistro = document.querySelector('button#registrar');
var btnIr = document.querySelector('button#ir');
var btnSair = document.querySelector('button#sair');



btnAcesso.onclick = function(){
	let inputLogin = document.querySelector('input#login');
    let inputSenha = document.querySelector('input#password');
	let seuLogin = inputLogin.value;
	let suaSenha = inputSenha.value;

	if (seuLogin == 'admin' && suaSenha == 'admin'){
		alert('Login feito com sucesso!!');
		window.location.href = 'perfil.html';
	}

	if (seuLogin == 'Roger' && suaSenha=='admin') {
		alert('Login feito com sucesso!!');
		window.location.href = 'perfil.html';
	}
	else if (seuLogin == 'Juju' && suaSenha=='admin') {
		alert('Login feito com sucesso!!');
		window.location.href = 'juperfil.html';
	}
	else if (seuLogin == 'Cata' && suaSenha=='admin') {
		alert('Login feito com sucesso!!');
		window.location.href = 'cataperfil.html';
	}
	else if (seuLogin == '' && suaSenha == '') {
		alert('Digite um login e senha válidos!!')
    }
    else {
    	alert('Login ou senha incorretos!');
    }
}



btnRegistro.onclick = function(){
	alert('Cadastro efetuado com sucesso!');
	var user = inputCadastro.value;
	var senha = inputCdSenha.value;

	saveToStorage();
}



function saveToStorage(){
	localStorage.setItem('list_user', JSON.stringfy(user));
	localStorage.setItem('list_senha', JSON.stringfy(senha));
}


btnIr.onclick = function(){
	window.location.href = 'login.html';	
}


btnSair.onclick = function(){
	window.location.href = 'index.html';	
}