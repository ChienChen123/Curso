// Não podemos criar constantes com palavras reservadas
// Constantes precisam ter nomes significativo
// Não pode começar o nome de uma constante com um número
// Não podem conter espaços ou traços
// Utilizamos camelCase
// Case-sensitive
// Não pode modificar o valor de uma constante
// Não utilize VAR, utilize CONST

A diferença de "const" para "let" é que o valor do const não pode
ser alterado, já o let o valor pode ser alterada.

const é usada quando não queremos alterar o valor da variável que a gente
criou, facilita muito quando estamos escrevendo o código e quando queremos
usar a variável o valor continua o mesmo.

O let podemos alterar o valor, uma vez alterada não consegue mais voltar
o valor original criada no começo, precisa ser criada uma nova.

Exemplo1:

const nota1 = 10;
const nota2 = 7;
const nota3 = 8;
const media = (nota1 + nota2 + nota3) / 3;
console.log("A média do aluno é:", media);

Explicação:

O código acima estamos querendo calcular a média do aluno e usamos o "const" para declarar a variável.
A linha 1, 2 e 3 são as 3 notas do aluno que a gente declarou, já a linha 4 estamos calculando a média,
para calular a média colocamos entre parênsteses a soma das 3 notas isso quer dizer o que está entre
parênteses irá ser feito o cálculo primeiro e depois a divisão.

Na última linha concatenei a frase junto com a média.

Exemplo2:

const nota1 = 10;
nota1 = 20;
const nota2 = 7;
const nota3 = 8;
const media = (nota1 + nota2 + nota3) / 3;

console.log("A média do aluno é:", media);

Explicação:

Aqui neste exemplo é só para verificar se podemos alterar o valor da variável usando "const",
deu "TypeError: Assignment to constant variable.".

Typeof

Tyoeof é para gente saber se o valor da nossa variável é um "String" ou "Number" caso não saiba
o que é.

Exemplo1:

const nota1 = 10;
const nota2 = 7;
const nota3 = 8;
const media = (nota1 + nota2 + nota3) / 3;

console.log(typeof media);

Explicação:

Então aqui neste exemplo eu quero saber qual é o tipo da variável "media" deu
a resposta "Number".

Exemplo 2:

const valor1 = "10";
const valor2 = 20;
const total = valor1 + valor2;
console.log(typeof total);

Explicação:

O exemplo 2 queremos saber qual o tipo da nossa variável total a resposta
que deu foi "String", porquê?

O valor total estamos fazendo uma soma, o sinal "+" ela pode somar e também
pode concatenar, nesse caso podemos observar que o valor da variável1 está
entre parênteses, isso quer dizer que o valor não é mais um número e sim um texto
e quando usamos sinal de "+" estamos concatenando 10 com 20 dando valor de 1020,
com isso o tipo da variável total é "String".
