// If pode ser usado sozinho
// Sempre que utilizado a palavra else, preciso de um if antes
// Eu posso ter vários else ifs na checagem
// Só posso ter um else na checagem
// Podemos usar condições sem else if, utilizando apenas if e else

/*
  Entre 0 e 11 horas - Bom dia
  Entre 12 e 17 horas - Boa tarde
  Entre 18 e 23 horas - Boa noite

*/

const horas = 25;

if (horas >= 0 && horas <= 11) {
  console.log("Bom dia");
} else if (horas >= 12 && horas <= 17) {
  console.log("Boa tarde");
} else if (horas >= 18 && horas <= 23) {
  console.log("Boa noite");
} else {
  console.log("Hora informada está errada");
}
