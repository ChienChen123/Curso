function meuEscopo() {
  const form = document.querySelector(".form");
  const resultado = document.querySelector(".resultado");

  const pessoas = [];

  function recebeEventoForm(evento) {
    evento.preventDefault();

    const nome = form.querySelector(".nome");
    const sobrenome = form.querySelector(".sobrenome");
    const peso = form.querySelector(".peso");
    const altura = form.querySelector(".altura");

    pessoas.push({
      nome: nome.value,
      sobrenome: sobrenome.value,
      peso: peso.value,
      altura: altura.value,
    });

    console.log(pessoas);

    resultado.innerHTML +=
      `<p>O seu nome é ${nome.value} com sobrenome ${sobrenome.value} <br>` +
      ` O seu peso é ${peso.value}, e sua altura é ${altura.value}</p>`;
  }

  form.addEventListener("submit", recebeEventoForm);
}
meuEscopo();
