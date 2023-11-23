const name = 'Max';
let age = 29;
const hasHobbies = true;

//name = 'Ricardo';
age = 30;

const summarizeUser = (userName, userAge, userHasHobby) => {
    return ('Name is ' + userAge + ', age is ' + userAge + ' and the user has hobbies: ' + userHasHobby);
}

const add = (a,b) => {
    return a + b;
}

const add2 = (a,b) => a + b;

console.log(add(1,2));
console.log(add2(1,2));

const addOne = a => a + 1;
console.log(addOne(1));

const addRandom = () => 1 + 2;
console.log(addRandom());

/*function summarizeUser(userName, userAge, userHasHobby) {
    return ('Name is ' + userAge + ', age is ' + userAge + ' and the user has hobbies: ' + userHasHobby);
}*/

console.log(summarizeUser(name, age, hasHobbies));

console.log(`Hi! My name is ${name} and I'm ${age} years old.`);