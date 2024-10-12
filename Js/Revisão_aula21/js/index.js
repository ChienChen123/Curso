function meuEscopoPessoal() {
  const form = document.querySelector(".form");
  const resultado = document.querySelector(".resultado");

  const pessoa = [];

  function recebeEventoFormPessoa(evento) {
    evento.preventDefault(); // Não atualizar a página quando preenche outro usuário

    const nome = form.querySelector(".nome");
    const sobrenome = form.querySelector(".sobrenome");
    const peso = form.querySelector(".peso");
    const altura = form.querySelector(".altura");

    pessoa.push({
      nome: nome.value,
      sobrenome: sobrenome.value,
      peso: peso.value,
      altura: altura.value,
    });

    console.log(pessoa);

    resultado.innerHTML +=
      `<p>Meu nome é ${nome.value} com sobrenome ${sobrenome.value}<br>` +
      `Tenho${peso.value}Kg, com altura de ${altura.value}m</p>`;
  }
  form.addEventListener("submit", recebeEventoFormPessoa);
}
meuEscopoPessoal();
