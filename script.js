const openButton = document.getElementById("open-btn");
const continueButton = document.getElementById("continue-btn");
const smileButton = document.getElementById("smile-btn");
const smileConfirmButton = document.getElementById("smile-confirm-btn");

const welcomeScreen = document.getElementById("welcome-screen");
const messageScreen = document.getElementById("message-screen");
const finalScreen = document.getElementById("final-screen");
const smileScreen = document.getElementById("smile-screen");
const explosionScreen = document.getElementById("explosion-screen");
const photoScreen = document.getElementById("photo-screen");

const smileMessage = document.getElementById("smile-message");

const heartContainer = document.getElementById("heart-container");


// ================================
// OPEN THE MESSAGE
// ================================

openButton.addEventListener("click", () => {

    welcomeScreen.classList.add("hidden");

    messageScreen.classList.remove("hidden");

});


// ================================
// GO TO FINAL MESSAGE
// ================================

continueButton.addEventListener("click", () => {

    messageScreen.classList.add("hidden");

    finalScreen.classList.remove("hidden");

});


// ================================
// START SILLY INTERACTION
// ================================

smileButton.addEventListener("click", () => {

    finalScreen.classList.add("hidden");

    smileScreen.classList.remove("hidden");

});


// ================================
// SILLY SMILE INTERACTION
// ================================

let smileAttempts = 0;

smileConfirmButton.addEventListener("click", () => {

    smileAttempts++;

    if (smileAttempts === 1) {

        smileMessage.textContent =
            "Hmm... I don't believe you. Give me a BIGGER smile. 😂";

        smileConfirmButton.textContent =
            "Okay okay 😁";

        return;
    }


    if (smileAttempts === 2) {

        smileMessage.textContent =
            "Better... but I know you can do better than that. 😏";

        smileConfirmButton.textContent =
            "THIS is my biggest smile 😁";

        return;
    }


    if (smileAttempts === 3) {

        smileMessage.textContent =
            "Okay fine. I'll allow it. ❤️";

        smileConfirmButton.textContent =
            "Yay ❤️";

        setTimeout(() => {

            startHeartExplosion();

        }, 1200);

    }

});


// ================================
// HEART EXPLOSION
// ================================

function startHeartExplosion() {

    smileScreen.classList.add("hidden");

    explosionScreen.classList.remove("hidden");


    // Create lots of smaller hearts
    for (let i = 0; i < 70; i++) {

        createExplosionHeart();

    }


    // Wait for the explosion to finish
    setTimeout(() => {

        explosionScreen.classList.add("hidden");

        photoScreen.classList.remove("hidden");

    }, 2300);

}


// ================================
// CREATE AN EXPLODING HEART
// ================================

function createExplosionHeart() {

    const heart = document.createElement("div");

    heart.classList.add("explosion-heart");

    heart.textContent = randomHeart();


    // Random direction
    const angle = Math.random() * Math.PI * 2;

    const distance =
        250 + Math.random() * 600;

    const x =
        Math.cos(angle) * distance;

    const y =
        Math.sin(angle) * distance;


    heart.style.setProperty(
        "--x",
        `${x}px`
    );

    heart.style.setProperty(
        "--y",
        `${y}px`
    );


    // Random size
    heart.style.fontSize =
        `${15 + Math.random() * 30}px`;


    // Slightly different animation speed
    heart.style.animationDuration =
        `${1.2 + Math.random() * 1}s`;


    heartContainer.appendChild(heart);


    // Remove after animation
    setTimeout(() => {

        heart.remove();

    }, 2500);

}


// ================================
// RANDOM HEART TYPES
// ================================

function randomHeart() {

    const hearts = [
        "❤️",
        "💕",
        "💗",
        "💖",
        "💓",
        "💘"
    ];

    return hearts[
        Math.floor(
            Math.random() * hearts.length
        )
    ];

}
