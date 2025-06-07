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
const winCountElem  = document.querySelector("#win-count");
const lossCountElem = document.querySelector("#loss-count");
const tieCountElem  = document.querySelector("#tie-count");


var wins = 0;
var ties = 0;
var losses = 0;
let canPlay = true; // boolean for locking down gameplay
const loadingHTML = `
  <img src="../images/swirl.gif" alt="swirl load" width="80" height="80">
  <p>thinking...</p>
`;



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
      document.querySelector("#cpu-rock").style.display = "flex";
      break;
    case "paper":
      document.querySelector("#cpu-paper").style.display = "flex";
      break;
    case "scissors":
      document.querySelector("#cpu-scissors").style.display = "flex";
      break;
  }

  RESULT.innerHTML = null;

  buttons.forEach(btn => btn.classList.remove("selected"));

  if (selection == choice) {
    //RESULT.textContent = "TIE"; // this is the right one // i just turned it off to see image only
    //gameMessage.style.display = "none";
    //winMessage.style.display = "none";
    //lossMessage.style.display = "none";
    //tieMessage.style.display = "flex";
    ties += 1;
    tieCountElem.textContent = ties;
  }
  else if ((selection == "rock" && choice == "paper") || (selection == "paper" && choice == "scissors") || (selection == "scissors" && choice == "rock")) {
    //RESULT.textContent = "WIN";
    //gameMessage.style.display = "none";
    //lossMessage.style.display = "none";
    //tieMessage.style.display = "none";
    //winMessage.style.display = "flex";
    wins += 1;
    winCountElem.textContent = wins;

  }
  else if ((choice == "rock" && selection == "paper") || (choice == "paper" && selection == "scissors") || (choice == "scissors" && selection == "rock")) {
    //RESULT.textContent = "LOSE";
    //gameMessage.style.display = "none";
    //winMessage.style.display = "none";
    //tieMessage.style.display = "none";
    //lossMessage.style.display = "flex";
    losses += 1;
    lossCountElem.textContent = losses;
  }
  else {
    RESULT.textContent = "SOMETHING BROKE";
    gameMessage.style.display = "none";
  }

}

// note: we can pass parameters like so...
/*
rockButton.addEventListener("click", () => {battle("rock"); selectButton(rockButton);});
paperButton.addEventListener("click", () => {battle("paper"), selectButton(paperButton);});
scissorButton.addEventListener("click", () => {battle("scissors"); selectButton(scissorButton);});
*/

// I should probably make this its own function with button parameter instead of 3 separate ones
rockButton.addEventListener("click", () => {
  if (!canPlay) return;
  canPlay = false;
  battle("rock");
  selectButton(rockButton);
  setTimeout(() => {
    canPlay = true;
    document.querySelector("#cpu-rock").style.display = "none";
    document.querySelector("#cpu-paper").style.display = "none";
    document.querySelector("#cpu-scissors").style.display = "none";
    buttons.forEach(btn => btn.classList.remove("selected"));
    RESULT.innerHTML = loadingHTML; // switch to loading gif again
  }, 2000);  // 2 sec lockout
});

paperButton.addEventListener("click", () => {
  if (!canPlay) return;
  canPlay = false;
  battle("paper");
  selectButton(paperButton);
  setTimeout(() => {
    canPlay = true;
    document.querySelector("#cpu-rock").style.display = "none";
    document.querySelector("#cpu-paper").style.display = "none";
    document.querySelector("#cpu-scissors").style.display = "none";
    buttons.forEach(btn => btn.classList.remove("selected"));
    RESULT.innerHTML = loadingHTML; 
  }, 2000);
});

scissorButton.addEventListener("click", () => {
  if (!canPlay) return;
  canPlay = false;
  battle("scissors");
  selectButton(scissorButton);
  setTimeout(() => {
    canPlay = true;
    document.querySelector("#cpu-rock").style.display = "none";
    document.querySelector("#cpu-paper").style.display = "none";
    document.querySelector("#cpu-scissors").style.display = "none";
    buttons.forEach(btn => btn.classList.remove("selected"));
    RESULT.innerHTML = loadingHTML; 
  }, 2000);
});


// this lets us have the separate "screens"
startButton.addEventListener("click", () => {
  startScreen.style.display = "none";
  startMessage.style.display = "none";
  gameMessage.style.display = "flex";
  gameScreen.style.display = "flex";
});