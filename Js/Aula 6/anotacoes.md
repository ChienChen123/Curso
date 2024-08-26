Variáveis com let

- let é onde iremos criar a variável

Obs: não se usa mais "var" no JavaScript.

Quando declaramos uma varíavel e não colocamos o valor
e ao executarmos o JavaScript irá nos informar com uma mensagem
de "undefined" que signfica indefinida, isso quer dizer que
não há nenhum valor declarada na variável.

Obs: Não podemos declarar o mesmo variável isso irá gerar um
erro quando executa-lo.

Ex:

let nome; // Declarou a variável
nome = "Maria"; // Inicializando a variável
console.log(nome);
nome = "Luana";
console.log(nome);

console.log(nome, "nasceu em 1984");
console.log("Em 2000", nome, "conheceu a Maria");
console.log(nome, "casou-se com a Maria em 2012");
console.log("Maria teve 1 filho com", nome, "em 2015");
console.log("O filho do", nome, "se chama Eduardo");

// Não podemos criar variáveis com palavras reservadas

Ex: let if;
let let;
let for;
etc...

// Variáveis precisam ter nomes significativo

Ex:

let nome_aluno = "Maria";
console.log(nome_aluno);

// Não pode começar o nome de uma variável com um número

Ex:

Certo
let nome1;

Errado
let 1nome;

// Não podem conter espaços ou traços

Ex:

Errado
let nome-completo;
let nome completo;

// Utilizamos camelCase

Camelcase é como se fosse as costas do camelo parece um morrinho.
A variável começa a primeira frase da primeira letra em minúscula depois em diante a frase
pode começar com a primeira letra maiúscula, e a variável deve estar junto as letras.

Ex:

let nomeDoCliente = "Fernando";
console.log(nomeDoCliente)

// Case-sensitive

Significa a variável declarada igual porém uma letra consta como maiúscula e outra totalmente minúscula dentro do JavaScript isso é diferente.

Ex:

let nomeCliente = "Fernando";
let nomecliente = "Ferreira";
console.log(nomeCliente, nomecliente);

// Não podemos redeclarar variáveis com let

Quer dizer quando queremos colocar o mesmo variáveil porém valor diferente
"let" não pode ser declarada somente a variável.

Ex:

Correto

let nomeCliente = "Fernando";
nomeCliente = "Ferreira";
console.log(nomeCliente);

Errado

let nomeCliente = "Fernando";
let nomeCliente = "Ferreira";
console.log(nomeCliente);
