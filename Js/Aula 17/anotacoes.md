Array

é uma lista onde você coloca dentro de colchetes o que você quer representar.

Exemplo
0 = 'Luiz'
1 = 'Maria'
2 = 'João'
const alunos = ["Luiz", "Maria", "João"];
console.log(alunos);
console.log(alunos[0]);
console.log(alunos[2]);

Explicação do código

No exemplo acima estamos montando uma lista com nome de alunos,
no primeiro console estamos exibindo a lista inteira desses nomes.
Já no segundo console estamos exibindo somente quem começa no
índice 0, e no terceiro a gente está exibindo somente no índice 2.

Editar

Dentro de uma lista array podemos editar o índice do valor que a gente
quer fazer alteração.

Exemplo 1

const alunos = ["Luiz", "Maria", "João"];

alunos[0] = "Felipe";
console.log(alunos);

Explicação do código

Então no exemplo acima podemos pegar a variável colocar o índice
que a gente quer fazer alteração que neste caso é [0] e alterar
o valor dele para 'Felipe' por exemplo.

Exemplo 2

const alunos = ["Luiz", "Maria", "João"];

alunos[0] = "Felipe";
alunos[3] = "Gabriel";
console.log(alunos);

Result

[ 'Felipe', 'Maria', 'João', 'Gabriel' ]

Explicação do código

No exemplo 2 podemos ver que foi acrescentado depois do índice 3
um novo nome chamado Gabriel.

Obs: Essa não é uma boa prática para fazer isso pois precisamos
saber qual é o tamanho da array.

Exemplo 3

const alunos = ["Luiz", "Maria", "João"];

alunos[alunos.length] = "Luiza";
alunos[alunos.length] = "Fábio";
alunos[alunos.length] = "Mariana";
console.log(alunos);

Result
[ 'Luiz', 'Maria', 'João', 'Luiza', 'Fábio', 'Mariana' ]

Explicação do código

Neste exemplo 3 que mostra acima podemos ver que a gente usou o "length" para
saber qual o tamanho do array e ir acrescentando os nomes um atrás do outro.

Exemplo 4 variável.push()

const alunos = ["Luiz", "Maria", "João"];

alunos.push("Luiza");
alunos.push("Mariana");
console.log(alunos);

Result

[ 'Luiz', 'Maria', 'João', 'Luiza', 'Mariana' ]

Explicação do código

Já no exemplo 4 estamos usando a função variável.push() onde a gente não
precisa se preocupar o tamanho do array automaticamente já vai acrescentar
um atrás do outro.

Exemplo 5 variável.unshifit()

const alunos = ["Luiz", "Maria", "João"];

alunos.unshift("Luiza");
alunos.unshift("Adriano");
console.log(alunos);

Result

[ 'Adriano', 'Luiza', 'Luiz', 'Maria', 'João' ]

Explicação do código

Então no exemplo 5 estamos usando unshifit() onde adiciona o nome
no começo do índice.

Remover (pop())

Conseguimos também remover o índice da nossa variável usando variável.pop().
Essa função ela só remove o índice que está no final, vamos ver o exemplo abaixo.

Exemplo1

const alunos = ["Luiz", "Maria", "João"];

const removido = alunos.pop();
console.log(removido);
console.log(alunos);

Result
João // removido
[ 'Luiz', 'Maria' ] // manteve

Explicação do código

Neste exemplo1 acima podemos ver que ao usar pop(); acabou removendo
o nome que estava no último índice do array, e para mostrar o índice
removido acabamos de usar uma variável chamado "removido".

Exemplo 2 variável.shift()

Conseguimos também remover o índice da nossa variável usando variável.shift().
Essa função ela só remove o índice que está no começo.

const alunos = ["Luiz", "Maria", "João"];

const removido = alunos.shift();
console.log(removido);
console.log(alunos);

Result

Luiz
[ 'Maria', 'João' ]

Explicação do código

Neste exemplo2 acima podemos ver que ao usar shift(); acabou removendo
o nome que estava no último índice do array, e para mostrar o índice
removido acabamos de usar uma variável chamado "removido".
