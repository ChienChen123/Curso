Barra inveritda (\\)

Exemplo1

let texto = "Um \"texto\"";

console.log(texto);

Quando queremos colocar as aspas duplas em uma
específica e não queremos usar aspas simples no
início e fim da frase basta a gente seguir conforme
o exemplo acima.

Exemplo 2

let texto = "Um \\texto";

console.log(texto);

Se a gente quiser que apareça a barra invertida
dentro de um texto basta a gente usar duas barras
conforme o exemplo acima.

Obs: se usar uma barra o JS ele entende isso como um
espaçamento assim ele acaba comendo uma letra que seria
a letra "t".

Exemplo 3

let texto = "Um \texto";

console.log(texto);

Índice

Quando quero saber o ídice de uma
letra dentro de uma string faço
dessa forma conforme o exemplo abaixo.

Exemplo1

// 01234567
let umaString = "Um texto";

console.log(umaString[6]);

Explicação do código:

O objetivo do código é saber qual
seria a posição da letra que deseja
encontrar dentro de uma String, então para
fazer isso usamos colchete na frente da variável
e colocamos a posição em numeral assim descobrimos
a letra encotrada na frase.

Função charAt()

// 01234567
let umaString = "Um texto";

console.log(umaString.charAt(6));

Podemos aqui usar a função "charAt" que tem
a mesma funcionalidade do índice que explicamos
no exemplo anterior.

Concat

// 01234567
let umaString = "Um texto";

Exemplo1
console.log(umaString.concat(" em um lindo dia. "));

Exemplo2
console.log(umaString + " em um lindo dia. ");

Exemplo 3
console.log(`${umaString} em um lindo dia`);

Existe várias formas de a gente usar concatenação de String, vamos
explicar cada uma delas.

No exemplo1 estamos usando uma função chamada "concat" e dentro dos
parênteses colocamos a frase que deseja concatenar

Exemplo 2 é uma outra forma de usar a concatenação a gente usa o
sinal de soma(+) para representar a concatenação.

O último exemplo, que seria o exemplo 3 usamos o template usando
às crases `${variável} frase que deseja por aqui`.

indexOf

Exemplo1
// 01234567
let umaString = "Um texto";

console.log(umaString.indexOf("texto"));

Explicação:

A função "indexOf" é utilizado para saber onde começa o índice de uma palavra,
como mostra o exemplo acima.

Exemplo 2

// 01234567
let umaString = "Um texto";

console.log(umaString.indexOf("U", 1));

Neste exemplo 2 queremos saber qual o índice da letra "U"
depois de índice 1, a resposta foi -1 não encontrou nenhuma
letra.

lastIndexOf

Exemplo 1

// 01234567
let umaString = "Um texto";

console.log(umaString.lastIndexOf("U", 1));

Explicação:

A função lastIndexOf() ele começa a encontrar a letra
de trás para frente neste caso do exemplo1 está vendo
qual seria o índice da letra "U" depois do índice 1.
