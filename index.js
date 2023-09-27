// // Code your solutions in this file
// for (let age = 30; age < 40; age++) {
//     console.log(`I'm ${age} years old. Happy birthday to me!`);
// }

// const gifts = ["teddy bear", "drone", "doll"];

// function wrapGifts(gifts) {
//     for (let i = 0; i < gifts.length; i++) {
//         console.log(`Wrapped ${gifts[i]} and added a bow!`)
//         debugger;
//     }
    
//     return gifts;
// }

// wrapGifts(gifts);

// const firstName = ["Charle", "Saimp", "Ali"];

// function writeCards(firstName) {
//     for (let i = 0; i < firstName.length; i++) {
//         console.log(`Thank you ${firstName[i]} for the wonderful birthday gift!`)
//         debugger;
// }
//     return firstName;
// }
// writeCards(firstName);

const firstName = ["Guadalupe", "Ollie", "Aki"];
 
function writeCards(firstName){
    const thankYouMessages = [];

    for (let i = 0; i < firstName.length; i++) {
        thankYouMessages[i] = `Thank you, ${firstName[i]}, for the wonderful surprise gift!`;
    
    }
    return thankYouMessages;
}
writeCards(firstName);


function countDown(number) {
    for (let i = number; i >= 0; i--) {
        console.log(i);
    }
}
countDown(5);
