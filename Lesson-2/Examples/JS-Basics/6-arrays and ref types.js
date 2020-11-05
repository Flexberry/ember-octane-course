const person = {
  name: 'Evgeniy',
  age: 36,
  greet() {
    console.log('Hi, I am ' + this.name);
  }
};

const hobbies = ['Sports', 'Music'];
hobbies.push('Programming');
console.log(hobbies);

// Simple types:
//  - string
//  - number
//  - boolean
//  - undefined
//  - null
//  - Symbol (ES6)

let anotherPerson = person;
person.name = 'Sergey';
console.log(anotherPerson); // anotherPerson!!!
