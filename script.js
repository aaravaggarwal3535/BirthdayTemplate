// const wishButton = document.getElementById("wishButton");
// const wishContainer = document.getElementById("wishContainer");
// const wishText = document.getElementById("wishText");
// const personImage = document.getElementById("personImage");
// const emojiContainer = document.getElementById("emojiContainer");
// const birthdaySong = document.getElementById("birthdaySong");
// const messages = [
//     "Happy Birthday To My One Of The Bestest Friend, May Your Life Be Full of Joy And Happiness 😊😊",
//     "I Pray to God To Fulfill All Of Your Dreams 🙏✨",
//     "Enjoy The Day And Party As Much As You Can 🎉🎈",
//     "And A SORRY!! For Not Being Physically Present To Wish You 🎂🎁",
//     "I Am Always There For You, Your Freind Aarav 💖😊"
// ];

// let step = 0;
// let emojisInterval;
// function showMessage(index) {
//     wishText.classList.remove("show");
//     setTimeout(() => {
//         wishText.textContent = messages[index];
//         wishText.classList.add("show");
//     }, 300);
// }

// function createEmojis() {
//     const emojiArray = ["🎉", "🎂", "🎈", "💖", "🎁", "🍰", "🥳", "✨", "🥂"];
    
//     emojisInterval = setInterval(() => {
//         const emoji = document.createElement("div");
//         emoji.classList.add("emoji");
//         emoji.textContent = emojiArray[Math.floor(Math.random() * emojiArray.length)];

//         const size = Math.random() * 20 + 40 + "px";
//         emoji.style.fontSize = size;
        
//         emoji.style.left = Math.random() * 100 + "vw";
//         emoji.style.top = "100vh";
        
//         emojiContainer.appendChild(emoji);

//         setTimeout(() => {
//             emoji.remove();
//         }, 6000);
//     }, 300);
// }

// wishButton.addEventListener("click", function() {
//     if (step === 0) {
//         birthdaySong.play();
        
//         wishContainer.classList.remove("hidden");
        
//         showMessage(step);
        
//         personImage.classList.remove("hidden");
        
//         createEmojis();
        
//         step++;
//     } else if (step < messages.length) {
//         showMessage(step);
//         step++;
//     }
    
//     if (step === messages.length) {
//         setTimeout(() => {
//             wishButton.classList.add("hidden");
//         }, 1000);
//     }
// });

const wishButton = document.getElementById("wishButton");
const wishContainer = document.getElementById("wishContainer");
const wishText = document.getElementById("wishText");
const personImage = document.getElementById("personImage");
const emojiContainer = document.getElementById("emojiContainer");
const birthdaySong = document.getElementById("birthdaySong");

// Define the birthday messages
const messages = [
    "Happy Birthday To My One Of The Bestest Friend, May Your Life Be Full of Joy And Happiness 😊😊",
    "I Pray to God To Fulfill All Of Your Dreams 🙏✨",
    "Enjoy The Day And Party As Much As You Can 🎉🎈",
    "And A SORRY!! For Not Being Physically Present To Wish You 🎂🎁"
];

// Define the corresponding images for each step (update these URLs with the actual photo URLs)
const personImages = [
    'images/person_photo1.jpg', // Replace with actual URL
    'images/person_photo2.jpg', 
    'images/person_photo3.jpg', 
    'images/person_photo4.jpg'
];

let step = 0;
let emojisInterval;

// Function to display messages with animation
function showMessage(index) {
    wishText.classList.remove("show");
    setTimeout(() => {
        wishText.textContent = messages[index];
        wishText.classList.add("show");
        
        // Update the person image and log the src to debug
        personImage.src = personImages[index]; 
        console.log(`Image source updated to: ${personImage.src}`);
        personImage.classList.remove("hidden");
    }, 300);
}

// Function to create floating emojis
function createEmojis() {
    const emojiArray = ["🎉", "🎂", "🎈", "💖", "🎁", "🍰", "🥳", "✨", "🥂"];
    
    emojisInterval = setInterval(() => {
        const emoji = document.createElement("div");
        emoji.classList.add("emoji");
        emoji.textContent = emojiArray[Math.floor(Math.random() * emojiArray.length)];

        // Random size between 40px and 60px
        const size = Math.random() * 20 + 40 + "px";
        emoji.style.fontSize = size;
        
        // Random horizontal position
        emoji.style.left = Math.random() * 100 + "vw";
        // Start from bottom of the screen
        emoji.style.top = "100vh";
        
        emojiContainer.appendChild(emoji);

        // Remove emoji after animation duration (6s)
        setTimeout(() => {
            emoji.remove();
        }, 6000);
    }, 300);
}

// Event listener for the "Click Me" button
wishButton.addEventListener("click", function() {
    if (step === 0) {
        // Play the birthday song
        birthdaySong.play();
        
        // Show the wish container
        wishContainer.classList.remove("hidden");
        
        // Display the first message
        showMessage(step);
        
        // Start floating emojis
        createEmojis();
        
        // Change button text to "Next" after the first click
        wishButton.textContent = "Next";
        
        step++;
    } else if (step < messages.length) {
        // Display the next message and change the photo
        showMessage(step);
        step++;
    }
    
    // After the last message, hide the button
    if (step === messages.length) {
        setTimeout(() => {
            wishButton.classList.add("hidden");
        }, 1000); // Delay to let the final message display before the button disappears
    }
});
