const openButton = document.getElementById("open-btn");
const continueButton = document.getElementById("continue-btn");

const welcomeScreen = document.getElementById("welcome-screen");
const messageScreen = document.getElementById("message-screen");
const finalScreen = document.getElementById("final-screen");


/* ============================= */
/* OPEN MESSAGE */
/* ============================= */

openButton.addEventListener("click", () => {

    welcomeScreen.classList.add("hidden");

    messageScreen.classList.remove("hidden");

});


/* ============================= */
/* CONTINUE */
/* ============================= */

continueButton.addEventListener("click", () => {

    messageScreen.classList.add("hidden");

    finalScreen.classList.remove("hidden");

});
