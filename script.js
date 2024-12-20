const wishButton = document.getElementById("wishButton");
const wishContainer = document.getElementById("wishContainer");
const wishText = document.getElementById("wishText");
const personImage = document.getElementById("personImage");
const emojiContainer = document.getElementById("emojiContainer");
const birthdaySong = document.getElementById("birthdaySong");
const messages = [
    "Ram Ram bhai Happy Birthday",
    "May Your Life Be Full of Joy And Happiness bro 😊😊",
    "I Pray to God To Fulfill All Your Dreams 🙏✨",
    "Enjoy The Day And Party As Much As You Can 🎉🎈",
    "I Am Always There For You,Tera bhai Aarav 💖😊"
];

let step = 0;
let emojisInterval;
function showMessage(index) {
    wishText.classList.remove("show");
    setTimeout(() => {
        wishText.textContent = messages[index];
        wishText.classList.add("show");
    }, 300);
}

function createEmojis() {
    const emojiArray = ["🎉", "🎂", "🎈", "💖", "🎁", "🍰", "🥳", "✨", "🥂"];
    
    emojisInterval = setInterval(() => {
        const emoji = document.createElement("div");
        emoji.classList.add("emoji");
        emoji.textContent = emojiArray[Math.floor(Math.random() * emojiArray.length)];

        const size = Math.random() * 20 + 40 + "px";
        emoji.style.fontSize = size;
        
        emoji.style.left = Math.random() * 100 + "vw";
        emoji.style.top = "100vh";
        
        emojiContainer.appendChild(emoji);

        setTimeout(() => {
            emoji.remove();
        }, 6000);
    }, 300);
}

wishButton.addEventListener("click", function() {
    if (step === 0) {
        birthdaySong.play();
        
        wishContainer.classList.remove("hidden");
        
        showMessage(step);
        
        personImage.classList.remove("hidden");
        
        createEmojis();
        wishButton.textContent = "Next";
        
        step++;
    } else if (step < messages.length) {
        showMessage(step);
        step++;
    }
    
    if (step === messages.length) {
        setTimeout(() => {
            wishButton.classList.add("hidden");
        }, 1000);
    }
});
