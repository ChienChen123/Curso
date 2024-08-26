ECMAScript é uma empresa de padronização da linguagem JavaScript

A diferencça de let x var

Ao usar o let, uma vez que a gente declara a variável, não pode usar let + variável que foi
declarada inicialmente, isso dará erro.

Exemplo1:

Erro

let nome = "Chen";
let nome = "Chen";

console.log(nome);

Exemplo2:

Ao declarar a variável e queremos alterar o valor basta a gente declarar
somente a variável sem o let.

Correto

let nome = "Chen";
nome = "Caio";

console.log(nome);

Quando a gente usa o "var" podemos delclarar a variável junto com o "var" mais de uma vez.

Exemplo:

var nomeAluno = "Ana Júlia";
var nomeAluno = "Ana Beatriz";

console.log(nomeAluno);
