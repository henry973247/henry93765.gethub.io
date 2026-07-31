// Wait for the browser to load completely before running the code
document.addEventListener("DOMContentLoaded", () => {
    
    // Grab our button element from the HTML using its ID
    const colorButton = document.getElementById("colorBtn");

    // Array of fun background colors to cycle through
    const colors = ["#ff7675", "#55efc4", "#ffeaa7", "#fab1a0", "#74b9ff"];

    // Add an event listener to listen for a 'click' event on the button
    colorButton.addEventListener("click", () => {
        // Pick a random color from our array
        const randomColor = colors[Math.floor(Math.random() * colors.length)];
        
        // Change the body background style dynamically
        document.body.style.background = randomColor;
        
        // Log a message to the browser console for debugging
        console.log("Background color changed to: " + randomColor);
    });

});
