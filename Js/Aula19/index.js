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
