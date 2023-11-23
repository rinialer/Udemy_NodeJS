const person = {
    name: 'Max',
    age: 29,
    greet() {
        console.log('Hi, I am ' + this.name);
    }
};

//console.log(person)

person.greet();

const hobbies = ['Sports', 'Cooking'];

//for(let hobby of hobbies) {
    //console.log(hobby);
//}

//console.log(hobbies.map(hobby => 'Hobbies: ' + hobby));
//console.log(hobbies);

/* for(var i = 0; i < hobbies.length; i++) {
    console.log(hobbies[i])
} */

hobbies.push('Programming');
console.log(hobbies);

const copiedArray = [...hobbies];
console.log(copiedArray);

const copiedArray2 = hobbies.slice();
console.log(copiedArray2);

const copiedPerson = {...person};
console.log(copiedPerson);

const toArray = (...args) => {
    return args;
};
console.log(toArray(1, 2, 3, 4, 5));