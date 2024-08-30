Funções de JS

A definição da função (também chamada de declaração de função) consiste no uso da palavra
chave "function", seguida por:

Nome da Função.
Lista de argumentos para a função, entre parênteses e separados por vírgulas.
Declarações JavaScript que definem a função, entre chaves { }.

Exemplo1:

function saudacao() {
console.log("Olá, pessoal!");
}

saudacao();

Result

Olá, pessoal!

Explicação do código:

Conforme o exemplo1 acima, usamos "function" onde declaramos uma variável
"saudacao" abrindo/fechando os parênteses "()", e também abrimos e fechamos
chaves "{}". Dentro da chave declaramos o "console.log" para imprimir na
tela o resultado da saudação. Mas não esqueça que devemos usar saudação() fora
da chave para poder impprimir o resultado

Parâmetro

A gente usa parâmetro como se fosse uma variável, segue o exemplo abaixo
para mais detalhes.

Exemplo 2

function saudacao(nome) {
console.log(`Olá ${nome}, seja bem-vindo ao curso de Java Script`);
}

saudacao("Chen");

Result

Olá Chen, seja bem-vindo ao curso de Java Script

Explicação do código:

No exemplo 2 usamos um parâmetro para a variável da função onde
esse parâmetro se chama "nome", e para exibir o valor desse parâmetro
colocamos dentro do "console.log" usando a técnica mais moderna que
é a utilização da crase "``", depois fora da chave colocamos a variável
da função e dentro dos parênteses colocamos o valor do parâmetro.
