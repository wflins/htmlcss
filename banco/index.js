const cliente1 = new Cliente("Ricardo", 11122233309,1234);



const diretor = new Diretor("Rodrigo",10000,12345678900);
const gerente = new Gerente("Geraldo",5000,12345678900);

diretor.CadastrarSenha("12345678");
gerente.CadastrarSenha("12345678");
const diretorestaLogado = SistemaAutenticacao.login(diretor, "12345678");
const gerenteestaLogado = SistemaAutenticacao.login(gerente, "12345678");

const clienteestaLogado = SistemaAutenticacao.login(cliente1, "123");


console.log(clienteestaLogado);
console.log(gerenteestaLogado);
console.log(diretorestaLogado);
