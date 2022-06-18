let persons = [
    {name:"Lina Aloqaily", height:160, gender:"F", mass:55, eyeColor:"black"},
    {name:"Nader Aloqaily", height:200, gender:"M", mass:120, eyeColor:"black"},
    {name:"Rama Aloqaily", height:155, gender:"F", mass:38, eyeColor:"green"},
    {name:"Dhom Aloqaily", height:189, gender:"M", mass:45, eyeColor:"blue"},
    {name:"Abdullah Aloqaily", height:170, gender:"M", mass:30, eyeColor:"black"}
]


// Ex:1 / A ==> using map
// Get array of objects with just name and height properties

let personName = persons.map(function(person){
    return `${person.name}, ${person.height}`;
})
console.log(personName);


console.log("-----------------------------------------");

// Ex:1 / B ==> using map
// Get array of all first names

let getFirstName = persons.map(function(person){
    [first] = person.name.split(" ");
    return first;
})
console.log(getFirstName);


console.log("-----------------------------------------");

// Ex:2 / A ==> using reduce
// Get total mass of all characters

initialValue = 0;
let sumHeight = persons.reduce(function (previousValue, curentValue) {
    return previousValue + curentValue.height;
} , initialValue);
console.log(sumHeight);

console.log("-----------------------------------------");

// Ex:2 / B ==> using reduce
// Get total number of characters in all the character names

let resultPersons = [];
let totalPersons = "";
let noSpaceNames = "";
let totalPersonsNames = persons.reduce((totalPersonsNames, person) => {
    resultPersons.push(person.name);
    totalPersons = resultPersons.join().trim(" ");
    noSpaceNames = totalPersons.replace(/ /g, "");
});
console.log(noSpaceNames.length);

console.log("-----------------------------------------");

// Ex:3 / A ==> using filter
// Get characters with mass greater than 100

let massFilter = persons.filter((pers) => {
    if (pers.mass > 100) return pers;
});
console.log(massFilter);

console.log("-----------------------------------------");

// Ex:3 / B ==> using filter
// Get all female characters

let femailFilter = persons.filter((pers) => {
    if (pers.gender === "F") return pers;
});
console.log(femailFilter);

console.log("-----------------------------------------");

// Ex:4 / A ==> using sort
// Sort by name

let nameSort = persons.sort(function (a , b) {
    if(a.name < b.name) {
         return -1; 
        }
    if(a.name > b.name) {
         return 1; 
        }
    return 0;
});
console.log(nameSort);


console.log("-----------------------------------------");

// Ex:4 / B ==> using sort
// Sort by gender

let genderSort = persons.sort(function (x, y) {
    return x.gender - y.gender;
});
console.log(genderSort);

console.log("-----------------------------------------");

// Ex:4 / A ==> using every
// Does every character have blue eyes?

let isEveryBlueEyes = persons.every(pers => pers.eyeColor === "blue"); 
console.log(isEveryBlueEyes); 

console.log("-----------------------------------------");

// Ex:4 / B ==> using every
// Is every character male?

let isEveryMale = persons.every(pers => pers.gender === "M"); 
console.log(isEveryMale);

console.log("-----------------------------------------");

// Ex:4 / A ==> using some
// Is there at least one male character?

let isSomeMale = persons.some(function(a){
    return a.gender == "M"
})
console.log(isSomeMale);


console.log("-----------------------------------------");

// Ex:4 / B ==> using some
// Is there at least one character that has mass less than 50?

let isSomeMass = persons.some(function(a){
    return a.mass < 50
})
console.log(isSomeMass);


console.log("-----------------------------------------");



