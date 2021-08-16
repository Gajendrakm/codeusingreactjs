const person ={
    name: 'Max'
};

// copy of the object person to secondPerson
const secondPerson = {
    ...person
};

// object pointed to the samePerson
const samePerson = person

person.name = 'Manu';

console.log(secondPerson)