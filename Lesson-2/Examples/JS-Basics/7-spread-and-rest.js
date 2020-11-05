const person = {
  name: 'Evgeniy',
  age: 36,
  greet(message) {
    console.log('Hi, I am ' + this.name);
    console.log('The message is: ' + message);
  }
};

const hobbies = ['Sports', 'Music'];
// const hobbiesCopy = [hobbies];
const hobbiesCopy = [...hobbies];
console.log(hobbiesCopy);

let personCopy = { ...person };
console.log(personCopy);

const toArray = (arg1, arg2, arg3) => {
  return [arg1, arg2, arg3];
}

// const toArray = (...args) => {
//   return args;
// }

console.log(toArray(1, 2, 3, 4, 5));

person.greet('Hello from person context');

this.name = 'Sergey';
let message = ['Hello from global context'];
person.greet.apply(this, message);
//person.greet(...message);
