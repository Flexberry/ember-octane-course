const name = 'Evgeniy';
let age = 36;
const hasHobbies = true;

this.globalProp = 'globalContext';

const summarizeUser = (userName, userAge, userHasHobby) => {
  // console.log(this);
  return (
    'Name is ' +
    userName +
    ', age is ' +
    userAge +
    ' and the user has hobbies: ' +
    userHasHobby
  );
};

const summarizeUserOld = function (userName, userAge, userHasHobby) {
  this.functionProp = 'Function context';
  // console.log(this);
  return (
    'Name is ' +
    userName +
    ', age is ' +
    userAge +
    ' and the user has hobbies: ' +
    userHasHobby
  );
};

// const add = (a, b) => a + b;
// const addOne = a => a + 1;
const addRandom = () => 1 + 2;

// console.log(add(1, 2));
// console.log(addOne(1));
console.log(addRandom());

console.log(summarizeUserOld(name, age, hasHobbies));
console.log(summarizeUser(name, age, hasHobbies));
