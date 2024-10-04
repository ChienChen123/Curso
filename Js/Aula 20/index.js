/*
  Primitivos(imutáveis) - string, number, boolean, undefined, null (bigint, symbol) - valor não será alterado quando declarado, são valores copiados

  Referência (mutável) - array, object, function - passados por referências
*/

let a = [1, 2, 3];
let b = [...a]; // split significa que está independente da referência
let c = b;
console.log(a, b);

a.push(4);
console.log(a, b);

b.pop();
console.log(a, b);

console.log(c);
