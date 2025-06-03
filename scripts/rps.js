const rockButton = document.querySelector("#rock-btn");
const paperButton = document.querySelector("#paper-btn");
const scissorButton = document.querySelector("#scissors-btn");
const CPU = document.querySelector("#CPU");
const startButton = document.querySelector("#start-btn");
const startScreen = document.querySelector("#start-screen");
const gameScreen = document.querySelector("#game-screen");
const startMessage = document.querySelector("#start-message");
const gameMessage = document.querySelector("#game-message");
const winMessage = document.querySelector("#win-message");
const lossMessage = document.querySelector("#loss-message");
const tieMessage = document.querySelector("#tie-message");


//const selection = "";
const options = [];
options.push("rock", "paper", "scissors"); // we can do it either way
const buttons = [rockButton, paperButton, scissorButton];

function selectButton(button) {
  buttons.forEach(btn => btn.classList.remove("selected")); // remove from all
  button.classList.add("selected"); // add to clicked
}

// note: we don't need to supply a variable type
function battle(choice) {
  const randIndex = Math.floor(Math.random() * options.length);
  const selection = options[randIndex];
  if (selection == choice) {
    CPU.textContent = "TIE";
    gameMessage.style.display = "none";
    winMessage.style.display = "none";
    lossMessage.style.display = "none";
    tieMessage.style.display = "flex";
  }
  else if ((selection == "rock" && choice == "paper") || (selection == "paper" && choice == "scissors") || (selection == "scissors" && choice == "rock")) {
    CPU.textContent = "WIN";
    gameMessage.style.display = "none";
    lossMessage.style.display = "none";
    tieMessage.style.display = "none";
    winMessage.style.display = "flex";
  }
  else if ((choice == "rock" && selection == "paper") || (choice == "paper" && selection == "scissors") || (choice == "scissors" && selection == "rock")) {
    CPU.textContent = "LOSE";
    gameMessage.style.display = "none";
    winMessage.style.display = "none";
    tieMessage.style.display = "none";
    lossMessage.style.display = "flex";
  }
  else {
    CPU.textContent = "SOMETHING BROKE";
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