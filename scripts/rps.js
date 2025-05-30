const rockButton = document.querySelector("#rock-btn");
const paperButton = document.querySelector("#paper-btn");
const scissorButton = document.querySelector("#scissors-btn");
const CPU = document.querySelector("#CPU");

//const selection = "";
const options = [];
options.push("rock", "paper", "scissors");

// note: we don't need to supply a variable type
function battle(choice) {
  const randIndex = Math.floor(Math.random() * options.length);
  const selection = options[randIndex];
  if (selection == choice) {
    CPU.textContent = "TIE";
  }
  else if ((selection == "rock" && choice == "paper") || (selection == "paper" && choice == "scissors") || (selection == "scissors" && choice == "rock")) {
    CPU.textContent = "WIN";
  }
  else if ((choice == "rock" && selection == "paper") || (choice == "paper" && selection == "scissors") || (choice == "scissors" && selection == "rock")) {
    CPU.textContent = "LOSE";
  }
  else {
    CPU.textContent = "SOMETHING BROKE";
  }

}

// note: we can pass parameters like so...
rockButton.addEventListener("click", () => battle("rock"));
paperButton.addEventListener("click", () => battle("paper"));
scissorButton.addEventListener("click", () => battle("scissors"));