/*
1. Create a business name generator by combining list of adjectives and shop name and another word.

Adjectives: "Amazing", "Crazy", "Fire"
Shop Names: "Engine", "Foods", "Garments"
Another Word: "Hub", "Bros", "Limited"

2. No use of arrays!
*/

alert("Welcome to the Business Name Generator!");


let adjectives = {
    0: "Amazing",
    1: "Crazy",
    2: "Fire"
}

let shopNames = {
    0: "Engine",
    1: "Foods",
    2: "Garments"
}

let anotherWords = {
    0: "Hub",
    1: "Bros",
    2: "Limited"
}

let random1 = Math.floor(Math.random() * 3);
console.log(`Random index for adjectives: ${random1}`);
let random2 = Math.floor(Math.random() * 3);
console.log(`Random index for shop names: ${random2}`);
let random3 = Math.floor(Math.random() * 3);
console.log(`Random index for another words: ${random3}`);

let randomAdjective = adjectives[random1];
let randomShopName = shopNames[random2];
let randomAnotherWord = anotherWords[random3];

let businessName = `${randomAdjective} ${randomShopName} ${randomAnotherWord}`;
alert(`Your business name is: ${businessName}`);