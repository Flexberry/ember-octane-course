const person = {
  name: 'Evgeniy',
  age: 36,
  greet() {
    console.log(`Hi, I am ${this.name}`);
  }
};

person.greet();
