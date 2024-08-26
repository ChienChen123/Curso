Operadores matemáticos

1 - Adição ( + )
Obs: Adição serve tanto para somar e também pode fazer a concatenação

Exemplo1:

const number1 = 5;
const number2 = 10;

console.log(number1 + number2);

Explicação: Aqui os dois números estão fazendo a soma.

Exemplo2:

const number1 = "5";
const number2 = 10;

console.log(number1 + number2);

Explicação: Aqui podemos ver que o "number1" recebeu um valor "5" mas esse valor é um string
pois consta aspa nela, com isso o sinal da soma nesse caso está concatenando o valor 5 com
o valor 10 que daria o resultado de 510.

2 - Subtração ( - )

3 - Divisão ( / )

4 - Multiplicação ( \* )

5 - Potenciação (\*\*)

6 - Resto da divisão(%)

Precedência

Quando a gente quer fazer a soma, adição, subtração e divisão toods juntos devemos prestar
bastante atenção na ordem de precedência, isso que dizer quem vem primeiro.

Ordem da precedência:

1º ()
2º \*_
3º _ / %
4º + -

Exemplo1:

const number1 = 10;
const number2 = 3;
const number3 = 4;

console.log(number1 + number2 \* number3);

Explicação:

Neste exemplo podemos ver que o resultado era para dar 52 mas
deu 22. Podemos ver neste exemplo a ordem de precedência é a multiplicação
depois a soma, com isso foi feito primeiro a multiplicação e depois a soma.

Exemplo2:

const number1 = 10;
const number2 = 3;
const number3 = 4;

console.log((number1 + number2) \* number3);

Explicação:

Este exemplo quem vem primeiro é o que está dentro do parênteses,
então será feito a soma e o resultado da soma irá fazer a multplicação, e o resultado
dará 52.

Incremento (++)

O incremento é utilizado quando a gente quer incrementar alguma coisa, segue o exemplo abaixo.

Exemplo1

let contador = 1;
contador++;
contador++;
contador++;
console.log(contador);

Explicação:

No código acima utilizado o "let" pois a nossa variável irá sofrer alterações
"const" neste caso não irá servir.

Declaramos a variável "contador" onde ela começa com o valor 1 e ao usar contador++
irá incrementar 1, isso quer dizer que o primeiro incremento passar a ser 2 e ao
chegar no último incremento o valor final será 4.

Exemplo 2

O incremento ele pode ser tanto pré e também pode ser tanto pós

Pré

let contador = 1;
++contador;
++contador;
++contador;
console.log(contador);

Pós

let contador = 1;
contador++;
contador++;
contador++;
console.log(contador);

Qual a diferença dos dois?

O pré ele vai faz a conta primeiro e depois retorna o valor, já
o pós ele executa a ação primeiro depois ele incrementa o valor.

Exemplo de Pós:

let contador = 1;
console.log(contador++);
console.log(contador);

Explicação:

Neste exemplo foi executado primeiro a ação e depois o incremento do valor,
isso quer dizer ele irá executar a ação do valor que colocamos primeiro na
variável contador e depois o incremento.

Exemplo de Pré:

let contador = 1;
console.log(++contador);
console.log(contador);

Explicação:

Já neste exemplo ele irá realizar o incremento e depois retornar o valor
que foi incrementado, ele não irá exibir o valor inicial que colocamos para
variável.

Decremento(--)

Derecemento significa que irá decrementar o valor, segue o exemplo abaixo

Exemplo:

let contador = 10;
console.log(--contador);
console.log(--contador);

Explicação:

Então aqui neste exemplo estamos decrementando o valor de 10
e ao final o valor fica 9 e 8.

Quando queremos contar por exemplo de 2 em 2, como a gente faz?
Segue o exemplo abaixo:

let contador = 0;
contador += 2;
contador += 2;
contador += 2;
console.log(contador);

Explicação:

No exemplo acima o contador começa com o 0 e estamos
pedindo para o contador incrementar mais 2 com o sinal de +=.
Então toda vez que for incrementar irá ser de 2 em 2.

Podemos também utilizar com os outros operadores como por exemplo
\*=, \*\*=, -= etc, esses operadores se chama "Operadores de Atribuição"

NaN - Not a number(Não é um número)

Quando a gente declara as variáveis e queremos fazer o cálculo dela,
se uma das variáveis tiver com valor de uma string irá aparcer uma
mensagem dizendo NaN, como o exemplo abaixo.

Exemplo:

const number1 = 10;
const number2 = "Luiz";
console.log(number1 \* number2);

Obs: Neste caso o number2 é uma letra caso ele for um
número o JS ele irá tentar resolver o cálculo mesmo o valor sendo um string,
como o exemplo abaixo.

Exemplo2:

const number1 = 10;
const number2 = "5";
console.log(number1 \* number2);

Explicação

Então aqui o JS deixou fazer o cálculo de multiplicação do 5 \* 10 = 50.

parseInt()

parseInt ele tranforma um string com formato de um número e converte
em um número inteiro, segue o exemplo abaixo:

Exemplo:

const number1 = 10;
const number2 = parseInt("5");
console.log(number1 + number2);

Explicação:

Neste exemplo podemos ver que o número 5 inicialmente
estava como string, quando usamos o parseInt e colocamos o
parênteses dentro do número ele tranforma o string em número.

parseFloat

parseFloat ele tranforma um string com formato de um número flutuane e converte
em um número flutuante, segue o exemplo abaixo:

const number1 = 10;
const number2 = parseFloat("5.6");
console.log(number1 + number2);

Explicação:

Neste exemplo podemos ver que o número 5.6 inicialmente
estava como string, quando usamos o parseFloat e colocamos o
parênteses dentro do número ele tranforma o string em um número flutuante.

Number()

Se usarmos o Number() tranformando o string para número o JS irá
se virar para entender se o string declarado é um número ou um texto.

Exemplo:

const number1 = 10;
const number2 = Number("5.6");
console.log(number1 + number2);
