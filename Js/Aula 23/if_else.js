/*
  Vamos criar número de 0 a 11

  1 - Número está entre 0 e 5
  2 - Número está entre 6 e 8
  3 - Número está entre 9 e 11
*/

// Dentro da condição if e else if, caso tiver duas condições verdadeiras, devemos analisar qual das condições não irá precisar o else if e tirar da condição else if.

const numero = 13;

if (numero >= 0 && numero <= 5) {
  console.log("O número informado está entre 0 e 5");
} else if (numero >= 6 && numero <= 8) {
  console.log("O número informado está entre 6 e 8");
} else if (numero >= 9 && numero <= 11) {
  console.log("O número informado está entre 9 e 11");
} else {
  console.log(
    "O número informado não está entre 0 e 11, favor informar o número correto!"
  );
}
