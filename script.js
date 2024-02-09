let body = document.querySelector("body");
let SecretNumber = document.querySelector(".secretNumber");
let checkNumber = document.querySelector(".checkNumber");
let commentry = document.querySelector(".commentry");
let scoreValue = document.querySelector(".score");
let highScore = document.querySelector(".highScore");
let checkbtn = document.querySelector(".checkbtn");
let Resetbtn = document.querySelector(".Resetbtn");
let box = document.querySelector(".box");

let finalNumber = Math.floor(Math.random() * 20 + 1);

SecretNumber = finalNumber;

let score = 20;
let Highscore = 0;

const displayMessage = function (message) {
  commentry.textContent = message;
};

const colorChange = function (anyColor) {
  checkbtn.style.backgroundColor = anyColor;
  body.style.backgroundColor = anyColor;
  checkNumber.style.backgroundColor = anyColor;
};

checkbtn.addEventListener("click", function () {
  if (!checkNumber.value) {
    displayMessage("First enter a number to check");
  } else if (checkNumber.value == finalNumber) {
    displayMessage("Correct Answer.......Hurray!!!");
    Highscore = score;
    highScore.textContent = Highscore;
    colorChange("Green");
  } else if (checkNumber.value != finalNumber) {
    if (score > 1) {
      displayMessage(
        checkNumber.value > finalNumber
          ? "Guess a lower number"
          : "Guess a higher number"
      );
      score--;
      scoreValue.textContent = score;
    } else {
      displayMessage("You have lost the game");
      colorChange("Red");
      score = 0;
      scoreValue.textContent = score;
    }
  }
  localStorage.setItem("highScore", highScore);
});

Resetbtn.addEventListener("click", function () {
  score = 20;
  SecretNumber = finalNumber;

  // document.querySelector('.message').textContent = 'Start guessing...';
  displayMessage("Start guessing...");
  scoreValue.textContent = score;
  SecretNumber.textContent = "?";
  checkNumber.value = "";

  colorChange("Black");
  SecretNumber.style.width = "15rem";
});
