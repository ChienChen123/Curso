const nome = "Chen Chien";
const sobrenome = "Chen";
const idade = 28;
const peso = 78;
const alturaEmCm = 1.8;
let indiceMassaCorporal = peso / (alturaEmCm * alturaEmCm); // peso / (altura * altura)
let anoNascimento = 2024 - idade;

console.log(
  `${nome}, ${sobrenome} tem ${idade} anos, pesa ${peso}Kg, tem ${alturaEmCm} de altura e seu IMS é de ${indiceMassaCorporal}`
);

console.log(`${nome} ${sobrenome} nasceu no ano de  ${anoNascimento}`);
