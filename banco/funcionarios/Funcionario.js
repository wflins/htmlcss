class Funcionario {	
	senha;

	constructor(nome, salario, cpf){
		this.nome = nome;
		this.salario = salario;
		this.cpf = cpf;
		this.bonificacao = 1
	}
	autenticar(senha) {
		return senha == this.senha;
	}
	
	CadastrarSenha(senha) {
		this.senha = senha;
	}
	
}