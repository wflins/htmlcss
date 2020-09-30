class ContaCorrente extends Conta{
	static numeroContas = 0
	constructor(agencia, cliente) {
		super(0, agencia, cliente);
		ContaCorrente.numeroContas += 1;
	}
	
	sacar(valor) {
		const taxa = 1.1;
		return this._sacar(taxa, valor);
	}
}
