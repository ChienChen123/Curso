const numero = Number(prompt("Digite um número"));
const numeroTitulo = document.getElementById("numero-titulo");
const texto = document.getElementById("texto");

numeroTitulo.innerHTML = numero;

// Quando incrementar algum texto sempre usa += se não o texto não irá aparecer.
texto.innerHTML = "";
texto.innerHTML += `<p>Raiz quadradado é: ${numero ** 5}</p>`;
texto.innerHTML += `<p>${numero} é inteiro: ${Number.isInteger(numero)}</p>`;
texto.innerHTML += `<p>${numero} é NaN: ${Number.isNaN(numero)}</p>`;
texto.innerHTML += `<p>O número arredondado para cima é: ${Math.ceil(
  numero
)}</p>`;
texto.innerHTML += `<p>O número arredondado para baixo é: ${Math.floor(
  numero
)}</p>`;
texto.innerHTML += `<p>O número com duas casas decimais é: ${numero.toFixed(
  2
)}</p>`;
