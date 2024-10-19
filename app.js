document
  .getElementById("rollDiceButton")
  .addEventListener("click", function () {
    // Play sound effect
    var rollSound = document.getElementById("rollSound");
    rollSound.currentTime = 0;
    rollSound.play();

    // Function to generate a random dice image source
    function getRandomDiceImage() {
      var randomNumber = Math.floor(Math.random() * 6) + 1;
      return "Assets/images/dice" + randomNumber + ".png";
    }

    // Select image elements
    var image1 = document.querySelectorAll("img")[0];
    var image2 = document.querySelectorAll("img")[1];

    // Interval to simulate rolling dice
    var interval = setInterval(function () {
      image1.setAttribute("src", getRandomDiceImage());
      image2.setAttribute("src", getRandomDiceImage());
    }, 50);

    // Timeout to stop rolling after 3 seconds and show final result
    setTimeout(function () {
      clearInterval(interval);

      // Generate final random numbers and set final images
      var randomNumber1 = Math.floor(Math.random() * 6) + 1;
      var randomImageSource1 = "Assets/images/dice" + randomNumber1 + ".png";
      image1.setAttribute("src", randomImageSource1);

      var randomNumber2 = Math.floor(Math.random() * 6) + 1;
      var randomImageSource2 = "Assets/images/dice" + randomNumber2 + ".png";
      image2.setAttribute("src", randomImageSource2);

      if (randomNumber1 > randomNumber2) {
        document.querySelector("h1").innerHTML = "Player 1 Wins!";
        document.body.classList.add("player1-wins-background");
        setTimeout(function () {
          document.body.classList.remove("player1-wins-background");
        }, 4000);
      } else if (randomNumber2 > randomNumber1) {
        document.querySelector("h1").innerHTML = "Player 2 Wins!";
        document.body.classList.add("player2-wins-background");
        setTimeout(function () {
          document.body.classList.remove("player2-wins-background");
        }, 4000);
      } else {
        document.querySelector("h1").innerHTML = "Draw";
      }
    }, 3000);
  });

const button = document.getElementById("rollDiceButton");
button.classList.add("bounce");

button.addEventListener("mouseover", () => {
  button.classList.add("bounce");
});

button.addEventListener("animationend", () => {
  button.classList.remove("bounce");
});
