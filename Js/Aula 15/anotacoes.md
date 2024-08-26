.toString();

Nem sempre precisamos ir até o valor da variável
e troca o número para o String basta a gente fazer
da seguinte forma.

Usando toString conseguiremos transformar a variável
que está como o valor de um número em String, segue o
exemplo abaixo.

Exemplo 01

let number1 = 1;
let number2 = 10.5;

console.log(number1.toString() + number2);

result: 110.5

Explicação do código:

Podemos ver que temos duas váriáveis ambos com
valor numérico, ao realizar a soma podemos ver
que resultado foi de 110.5 isso quer dizer que
houve uma concatenação e não a soma dos dois
números, pois podemos ver que tranformamos a
variável "number1" em string usando o ".toString()".

Exemplo 2

let number1 = 100;
let number2 = 10.5;
console.log(number1.toString(2));

result: 1100100

Neste exemplo 2 usamos o .toString() para saber qual
seria o valor binário de 100 e o resultado que voltou
foi de 1100100.

.toFixed()

Quando queremos arredondar um número com várias casas decimais
usamos o .toFixed().

Exemplo1:

let number1 = 10.589748889;
let number2 = 10.5;

console.log(number1.toFixed(2));

result: 10.59

Explicação do código:

No exemplo1 mostrado acima, podemos ver
depois do ponto há vários números, e para
gente arredondar usamos o .toFixed e
dentro do parênteses queremos somente
2 casas dedimais.

Number.isInteger()

Quado queremos saber se o valor da variável que a
gente criou é um valor inteiro ou booleano, basta
a gente declarar o Number.isInteger() irá verificar
isso pra gente se é true ou false.

Exemplo 1:

let number1 = 10;
let number2 = 10.5;
console.log(Number.isInteger(number1));

result: true

Explicação do código:

Neste exemplo1 estamos queremos saber se o valor da
varíavel number1 é do tipo int ou não, a resposta
que voltou foi "true".

Number.isNaN()

Quando fazemos um cálculo e queremos saber se o cálculo
que a gente está fazendo é um número usamos .isNaN().
Ele verifica se o cálculo que a gente está fazendo é
um number ou não.

Exemplo 1:
let number1 = 10;
let numberTemp = number1 \* "Hello";
console.log(Number.isNaN(numberTemp));

result: true

Explicação do código :

Aqui criamos uma váriavel chamado"numberTemp" recebe
cálculo da variável number1 junto com uma string
verificamos se é um número ou não, o resultado
que deu foi que esse cálculo ele não é uma número,
com isso o resultado deu "true".

Exemplo 2:
let number1 = 10;
let numberTemp = number1 + "5";
console.log(Number.isNaN(numberTemp));

result: false

Explicação do código:

Neste exemplo 2 está sendo feito um cálculo onde
o 5 é um número do tipo string, sendo foi feito
a concatenação do "number1" com o 5. O resultado
que deu foi false, pois o valor final da variável
numberTemp foi de 105 isso é considerado um número.

Obs: isso não é uma boa prática de se fazer quando
trabalhamos com JS.

IEE 754-2008

parseFloat or Number

Quando estamos fazendo uma soma de números
flutuante e queremos saber se o resultado
que foi somado é um valor inteiro colocamos
"parseFloat("variável".toFixed(2))", vamos
verificar no exemplo abaixo.

Exemplo 1:

let number1 = 0.7;
let number2 = 0.1;

number1 += number2; // 0.8
number1 += number2; // 0.9
number1 += number2; // 1.0

console.log(number1.toFixed(2));
console.log(Number.isInteger(number1));

resultado da soma: 1.00

result: false

Explicação do código:

Aqui temos duas variáveis onde
os números são ponto flutuante estamos
fazendo a soma até chegar no valor inteiro.
O resultado deu "1.00", porém ao verificar se é
realmente um número inteiro, o resultado que apareceu
foi "false", dentro do JS por baixo dos panos não foi tratado esse número
flutuante, apesar de aparecer na tela "1.00", isso deve ser tratado
da seguinte maneira como mostra o exemplo2.

Exemplo 2:

let number1 = 0.7;
let number2 = 0.1;

number1 += number2; // 0.8
number1 += number2; // 0.9
number1 += number2; // 1.0

number1 = Number(number1.toFixed(2)); ou parseFloat(number1.toFixed(2))

console.log(number1);
console.log(Number.isInteger(number1));

resultado da soma: 1

result: true

Explicação do código:

Neste exemplo 2 a gente tratou o valor flutuante usando
"Number(number1.toFixed(2));", nele foi tirado valor que
estava atrás do pano e deixou o valor como "1", com isso
o valor a resposta final foi "true".
