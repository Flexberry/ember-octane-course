// Define object as instance (of "anonymous" class)

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

person.greet();

// Define class as function

// const Person = function(name, age, hasHobbies) {
//   this.name = name;
//   this.age = age;
//   this.hasHobbies = hasHobbies;
//   this.greet = function() {
//     console.log('Hi, I am ' + this.name);
//   }
// };

// anotherPerson = new Person('Alexander', 30, true);
// anotherPerson.greet();

// Define class as ES6 Class

class Person {
  constructor(name, age, hasHobbies) {
    this.name = name;
    this.age = age;
    this.hasHobbies = hasHobbies;
  }

  greet() {
    console.log('Hi, I am ' + this.name);
  }
}

anotherPerson = new Person('Petr', 32, true);
anotherPerson.greet();
