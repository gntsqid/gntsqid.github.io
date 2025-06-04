const rockButton    = document.querySelector("#rock-btn");
const paperButton   = document.querySelector("#paper-btn");
const scissorButton = document.querySelector("#scissors-btn");
const RESULT        = document.querySelector("#RESULT");
const startButton   = document.querySelector("#start-btn");
const startScreen   = document.querySelector("#start-screen");
const gameScreen    = document.querySelector("#game-screen");
const startMessage  = document.querySelector("#start-message");
const gameMessage   = document.querySelector("#game-message");
const winMessage    = document.querySelector("#win-message");
const lossMessage   = document.querySelector("#loss-message");
const tieMessage    = document.querySelector("#tie-message");
const scoreCard     = document.querySelector("#SCORE");

var wins = 0;
var ties = 0;
var losses = 0;




//const selection = "";
const options = [];
options.push("rock", "paper", "scissors"); // we can do arrays either way
const buttons = [rockButton, paperButton, scissorButton];

function selectButton(button) {
  buttons.forEach(btn => btn.classList.remove("selected")); // remove from all
  button.classList.add("selected"); // add to clicked
}

// note: we don't need to supply a variable type
function battle(choice) {
  const randIndex = Math.floor(Math.random() * options.length);
  const selection = options[randIndex];

  document.querySelector("#cpu-rock").style.display = "none";
  document.querySelector("#cpu-paper").style.display = "none";
  document.querySelector("#cpu-scissors").style.display = "none";
  // Show only the selected one
  switch (selection) {
    case "rock":
      document.querySelector("#cpu-rock").style.display = "block";
      break;
    case "paper":
      document.querySelector("#cpu-paper").style.display = "block";
      break;
    case "scissors":
      document.querySelector("#cpu-scissors").style.display = "block";
      break;
  }

  buttons.forEach(btn => btn.classList.remove("selected"));

  if (selection == choice) {
    RESULT.textContent = "TIE";
    //gameMessage.style.display = "none";
    //winMessage.style.display = "none";
    //lossMessage.style.display = "none";
    //tieMessage.style.display = "flex";
  }
  else if ((selection == "rock" && choice == "paper") || (selection == "paper" && choice == "scissors") || (selection == "scissors" && choice == "rock")) {
    RESULT.textContent = "WIN";
    //gameMessage.style.display = "none";
    //lossMessage.style.display = "none";
    //tieMessage.style.display = "none";
    //winMessage.style.display = "flex";
  }
  else if ((choice == "rock" && selection == "paper") || (choice == "paper" && selection == "scissors") || (choice == "scissors" && selection == "rock")) {
    RESULT.textContent = "LOSE";
    //gameMessage.style.display = "none";
    //winMessage.style.display = "none";
    //tieMessage.style.display = "none";
    //lossMessage.style.display = "flex";
  }
  else {
    RESULT.textContent = "SOMETHING BROKE";
    gameMessage.style.display = "none";
  }

}

// note: we can pass parameters like so...
rockButton.addEventListener("click", () => {battle("rock"); selectButton(rockButton);});
paperButton.addEventListener("click", () => {battle("paper"), selectButton(paperButton);});
scissorButton.addEventListener("click", () => {battle("scissors"); selectButton(scissorButton);});

// this lets us have the separate "screens"
startButton.addEventListener("click", () => {
  startScreen.style.display = "none";
  startMessage.style.display = "none";
  gameMessage.style.display = "flex";
  gameScreen.style.display = "block";
});