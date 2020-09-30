class Conta {
	
	agencia;
	cliente;
	saldo;
	constructor(saldoInicial,agencia, cliente) {

		if (this.constructor == Conta) {
			throw new Error("erro. Nao criar construtor Conta diretamente pois é classe abstrata");
		}
		this.agencia = agencia;
		this.cliente = cliente;
		this.saldo = saldoInicial;
	}
	
	set cliente(novoValor) {
		if (novoValor instanceof Cliente) {
			this.cliente = novoValor;
		}
	} 
	
	get cliente() {
		return this.cliente;
	} 

	get saldo() {
		return this.saldo;
	}
	
	sacar(valor) {
		if (this.saldo < valor) {
			return;
		}
		this.saldo -= valor;
	}
	
	
	sacar(valor) {
		throw new Error("erro. Funcao() sacar não especificada.");
	}
	
	_sacar(taxa,valor) {
		valor *=taxa;
		
		if (this.saldo < valor) {
			return 0 ;
		}
		return this.saldo -= valor;
	}
	


	depositar(valor) {
		if(valor <= 0) {
			return;
		}
		this.saldo += valor;
	}

	
	transferir(valor, conta) {
		const valorSacado = this.sacar(valor);
		const valorDepositado = conta.depositar(valor); 
	}
}