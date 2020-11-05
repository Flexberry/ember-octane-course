const person = {
  name: 'Evgeniy',
  age: 36,
  // greet: () => {
  //   console.log('Hi, I am ' + this.name);
  // },
  greet() {
    console.log('Hi, I am ' + this.name);
  }
};

const Person = function(name, age, hasHobbies) {
  this.name = name;
  this.age = age;
  this.hasHobbies = hasHobbies;
  this.greet = function() {
    console.log('Hi, I am ' + this.name);
  }
};

person.greet();

anotherPerson = new Person('Alexander', 30, true);
anotherPerson.greet();
