window é um objeto da janela do navegador

window.alert tem a mesma função do alert.

window.confirm também tem a mesma função de alert quando perguntamos ao
usuário e ele retorna o valor pra gente. No caso do window.confirm irá
retorna o valor booleano se é "true" ou "false".

window.prompt ele cria uma caixa de pergunta onde o usuário tem a possibilidade
de digitar a resposta dentro dela.

---

Quando estamos dentro do navegador usando o console, ao declararmos a variável
não necessariamente precisamos aplicar a função "console.log" para exibir o valor
da variável, simplesmente podemos diretamente digitar a variável e ela exibirá
a resposta.

---

Exercício:

Solicita dois números ao usuário, faça soma desses
números, e exiba o valor utilizando o "alert".

Solução:

let num1 = prompt("Digite um número");
let num2 = prompt("Digite outro número");
const result = Number(num1) + Number(num2);

alert(`O resutado foi de: ${result}`);

Explicação do código:

Nas duas primeiras linhas do código estamos solicitando ao usuário dois números.
Utilizei o "let", pois esses valores irá sofrer alterações, já na terceira linha
do código usamos o "const", pois o resultado é um valor fixo não irá sofrer alterações.
Nessa mesma linha já convertemos as variáveis que estão com número em formato de string
para number, com isso quando usar o sinal da soma irá somar os dois números ao invés de
concatenar.

Na última linha do código usamos o alert para exibir o texto e o resultado usando
crase, esse formato é mais moderno de exibição.
