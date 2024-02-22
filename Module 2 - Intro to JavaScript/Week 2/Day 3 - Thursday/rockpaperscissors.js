const buttons = document.querySelectorAll(".choice");
const compDisplay = document.getElementById("computer");
const userDisplay = document.getElementById("user");
const gameData = {
  game: 1,
  tied: 0,
  lose: 0,
  win: 0,
};

buttons.forEach((btn) => {
  btn.addEventListener("click", userPick);
});

function userPick(e) {
  let comp = computerPick();
  let user = e.target.value;
  compDisplay.innerText = `The computer picked: ${comp}`;
  userDisplay.innerText = `You picked: ${user}`;

  if (user === comp) {
    endGame("tied");
  } else if (
    (user === "rock" && comp === "paper") ||
    (user === "paper" && comp === "scissors") ||
    (user === "scissors" && comp === "rock")
  ) {
    endGame("lose");
  } else {
    endGame("win");
  }
}

function computerPick() {
  let choices = ["rock", "paper", "scissors"];
  return choices[Math.floor(Math.random() * choices.length)];
}

function endGame(outcome) {
  gameData.game++;
  document.getElementById("game").innerText = gameData.game;
  document.getElementById("outcome").innerText = `You ${outcome}.`;
  gameData[outcome]++;
  document.getElementById(outcome).innerText = gameData[outcome];
}
