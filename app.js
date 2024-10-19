// Get the roll dice button and sound element
const button = document.getElementById("rollDiceButton");
const rollSound = document.getElementById("rollSound");

// Add click event listener to the button
button.addEventListener("click", function () {
  // Play sound effect
  rollSound.currentTime = 0; // Reset sound to start
  rollSound.play();

  // Function to generate a random dice image source
  function getRandomDiceImage() {
    const randomNumber = Math.floor(Math.random() * 6) + 1;
    return "Assets/images/dice" + randomNumber + ".png";
  }

  // Select image elements
  const image1 = document.querySelectorAll("img")[0];
  const image2 = document.querySelectorAll("img")[1];

  // Interval to simulate rolling dice
  const interval = setInterval(function () {
    image1.setAttribute("src", getRandomDiceImage());
    image2.setAttribute("src", getRandomDiceImage());
  }, 50);

  // Timeout to stop rolling after 3 seconds and show final result
  setTimeout(function () {
    clearInterval(interval);

    // Generate final random numbers and set final images
    const randomNumber1 = Math.floor(Math.random() * 6) + 1;
    const randomImageSource1 = "Assets/images/dice" + randomNumber1 + ".png";
    image1.setAttribute("src", randomImageSource1);

    const randomNumber2 = Math.floor(Math.random() * 6) + 1;
    const randomImageSource2 = "Assets/images/dice" + randomNumber2 + ".png";
    image2.setAttribute("src", randomImageSource2);

    // Determine and display the winner
    const resultHeading = document.querySelector("h1");
    if (randomNumber1 > randomNumber2) {
      resultHeading.innerHTML = "Player 1 Wins!";
      document.body.classList.add("player1-wins-background");
      setTimeout(() => {
        document.body.classList.remove("player1-wins-background");
      }, 4000);
    } else if (randomNumber2 > randomNumber1) {
      resultHeading.innerHTML = "Player 2 Wins!";
      document.body.classList.add("player2-wins-background");
      setTimeout(() => {
        document.body.classList.remove("player2-wins-background");
      }, 4000);
    } else {
      resultHeading.innerHTML = "Draw";
    }
  }, 3000);
});

// Add bounce class for animation
button.classList.add("bounce");

// Add mouseover event to trigger bounce animation
button.addEventListener("mouseover", () => {
  button.classList.add("bounce");
});

// Remove bounce class after animation ends
button.addEventListener("animationend", () => {
  button.classList.remove("bounce");
});
