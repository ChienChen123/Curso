Primitivos

Exemplo 01

let a = "C";
let b = a; // Cópia
console.log(a, b);

a = "Meu nome é....";
console.log(a, b);

Explicação código:

No exemplo 01 ela é um formato primitivo pois o valor que usamos
na variável "a" será somente uma cópia para "b" e quando a variável
"a" sofrer alterações no valor a variável "b" continuará o mesmo.

Referência

Exemplo 02

let a = [1, 2, 3];
let b = [...a]; // split significa que está independente da referência
let c = b;
console.log(a, b);

a.push(4);
console.log(a, b);

b.pop();
console.log(a, b);

console.log(c);

Explicação do código:

Nesse exemplo 02 está num formato de referência onde o primeiro console
a variável "b" está pegando o valor da variável "a". Já no segundo console
a variável "a" sofreu alteração, onde foi imputado o número 4 no final do
array e a variável "b" não sofreu nenhuma alteração, pois usamos o split[...referência]
onde o valor da variável fica independente da referência. Já no terceiro console
onde removemos o último número do array da variável "b".

E no último console a variável "c" está pegando o valor da variável "b"
