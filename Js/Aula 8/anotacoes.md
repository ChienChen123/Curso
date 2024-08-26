Exercício da aula de Const e let

Qundo estamos declarando as variáveis devemos primeiro analisar quais são os valores que não irá mudar e quais irá mudar,
com isso a gente sabe quando usar "const" e quando usar "let".

- Existe 3 formas de juntar texto com as variáveis

1º Forma

Utilizar vírgula(,) para a separação de string com a variável.

const nomeAluno = 'Fábio Luiz'
const nota1 = 10
const nota2 = 8
const nota3 = 7

const media = (nota1 + nota2 + nota3) / 3

console.log(nome, "ficou com a média de ", media, "está Aprovado")

2º Forma

Utilizar o sinal de mais (+), para concaternar a frase.

const nomeAluno = 'Fábio Luiz'
const nota1 = 10
const nota2 = 8
const nota3 = 7

const media = (nota1 + nota2 + nota3) / 3

console.log(nome + " ficou com a média de ", media, " está Aprovado. ")

3º Forma

"Melhor forma de representar o valor da variável"

Utilizar crase (` `) em toda a frase e selcionar quem são as variáveis usando (${}).

const nomeAluno = 'Fábio Luiz'
const nota1 = 10
const nota2 = 8
const nota3 = 7

const media = (nota1 + nota2 + nota3) / 3

console.log(`${nome} ficou com a média de, ${media}, está Aprovado.`)
