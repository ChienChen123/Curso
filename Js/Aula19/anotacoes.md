// Objeto Básico

[] - Usa colchetes para arrays
{} - Usa chaves para objetos

Exemplo 1

function criarPessoa(nome, sobrenome, idade) {
//(parâmentro)
return {
nome: nome,
sobrenome: sobrenome,
idade: idade,
};
}

// Essa função chamamos de factory, signfica fábrica de funções

Exemplo 2

function criarPessoa(nome, sobrenome, idade) {
//(parâmentro)
return {
nome,
sobrenome,
idade,
};
}

const pessoa1 = criarPessoa("Gabriel", "Chen", 28); //(argumento)
const pessoa2 = criarPessoa("Juliana", "Xu", 27); //(argumento)
console.log(pessoa1);
console.log(pessoa2);

Exemplo 3

const person1 = {
name: "Gabriel",
lastName: "Chen",
age: 28,

fala() {
console.log(`${this.name} ${this.lastName} is say Hello`);
},
};

person1.fala();

// O "this" que chamamos signfica variável que a gente criou.

Exemplo 4

const person1 = {
name: "Gabriel",
lastName: "Chen",
age: 28,

fala() {
console.log(`My age in this year is ${this.age}`);
},

incrementaIdade() {
this.age++;
},
};

person1.fala();
person1.incrementaIdade();
person1.fala();
person1.incrementaIdade();
person1.fala();

// Neste código criamos um objeto onde dentro temos dois métodos.
