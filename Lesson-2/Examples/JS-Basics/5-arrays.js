const person = {
  name: 'Evgeniy',
  age: 36,
  greet() {
    console.log('Hi, I am ' + this.name);
  }
};

const hobbies = ['Sports', 'Music', 1, { someProp: 'Some Value' }];

for (let hobby of hobbies) {
    console.log(hobby);
}

console.log(hobbies.map(hobby => 'Hobby: ' + hobby));
console.log(hobbies);
