Math.floor()

Math.floor() ele arredonda o número decimal para baixo.

Segue o exemplo:

let num1 = 9.54578;
let num2 = Math.floor(num1);
console.log(num2);

result = 9

Explicação do código:

Neste código declaramos duas variáveis onde "num1" recebe
valor de "9.54578" e num2 recebe a função de Math.floor(num1),
onde está arredondando o número com decimal para baixo.

Math.ceil()

Math.ceil() ele arredonda o valor para cima.

Segue o exemplo abaixo:

let num1 = 9.54578;
let num2 = Math.ceil(num1);
console.log(num2);

result = 10

Explicação do código:

Neste código declaramos duas variáveis onde "num1" recebe
valor de "9.54578" e num2 recebe a função de Math.ceil(num1),
onde está arredondando o número com decimal para cima.

Math.round()

Math.round() ele arredonda o número mais próximo do inteiro,
arredondando por exemplo .49 ele arredonda para baixo, se for
.50 arredonda para cima.

Abaixo o exemplo

let num1 = 9.49;
let num2 = Math.round(num1);
console.log(num2);

result = 9

Explicação do código:

O código do exemplo acima é arredondamento de valor,
onde o valor 9.49 foi arredondado para 9 pois o ponto
decimal não chegou na metade que é .50

Math.max()

Math.max() é para saber qual seria o número máximo
de uma sequência de número, segue o exemplo abaixo:

console.log(Math.max(1, 2, 3, 4, 5, 3500, 6000, 8900, -589, -678, 890));

result = 8900

Explicação do código:

O código acima é uma sequência de números onde é usado a função Math.max()
para saber qual seria o número maior da sequência, o resultado que deu
foi de "8900".

Math.min()

Math.min() é para saber qual seria o número mínimo
de uma sequência de número, segue o exemplo abaixo:

console.log(Math.max(1, 2, 3, 4, 5, 3500, 6000, 8900, -589, -678, 890));

result = -678

Explicação do código:

O código acima é uma sequência de números onde é usado a função Math.min()
para saber qual seria o número menor da sequência, o resultado que deu
foi de "-678".

Math.random()

A função Math.random() ela gera números aleatórios, vamos ver no exemplo
abaixo.

const numeroAleatorio = Math.round(Math.random() \* (35 - 5) + 5);
console.log(numeroAleatorio);

result = número aleatório

Explicação do código:

No exemplo acima criamos uma variável usando const onde
essa variável não irá sofrer alterações, e o valor
da variável irá retornar um número aleatório de 5 até 35
usando Math.random(). Usamos o Math.round() para arrendondar
o número, pois o valor que retorna do Math.random é em decimal.
