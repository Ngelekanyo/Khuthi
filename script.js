```javascript
const yesButton = document.getElementById("yes-btn");
const noButton = document.getElementById("no-btn");

const questionScreen = document.getElementById("question-screen");
const successScreen = document.getElementById("success-screen");


// ================================
// YES BUTTON
// ================================

yesButton.addEventListener("click", () => {

    questionScreen.classList.add("hidden");

    successScreen.classList.remove("hidden");

});


// ================================
// NO BUTTON
// ================================

noButton.addEventListener("mouseenter", () => {

    // Get the size of the browser window
    const screenWidth = window.innerWidth;
    const screenHeight = window.innerHeight;

    // Get the size of the button
    const buttonWidth = noButton.offsetWidth;
    const buttonHeight = noButton.offsetHeight;

    // Generate a random position
    const randomX =
        Math.random() * (screenWidth - buttonWidth - 40) + 20;

    const randomY =
        Math.random() * (screenHeight - buttonHeight - 40) + 20;

    // Move the button
    noButton.style.position = "fixed";

    noButton.style.left = `${randomX}px`;

    noButton.style.top = `${randomY}px`;

});


// ================================
// EXTRA CHAOS
// ================================

noButton.addEventListener("click", () => {

    alert("Nice try 😂");

});
```
