const choices = ["Piedra", "Papel", "Tijera"];
const historyList = document.getElementById("historyList");

const playButton = document.getElementById("playButton");
const playerChoiceElement = document.getElementById("playerChoice");
const computerChoiceElement = document.getElementById("computerChoice");
const resultText = document.querySelector(".result p");

playButton.addEventListener("click", playRound);

function playRound() {
  const playerChoiceIndex = Math.floor(Math.random() * 3);
  const computerChoiceIndex = Math.floor(Math.random() * 3);

  const playerChoice = choices[playerChoiceIndex];
  const computerChoice = choices[computerChoiceIndex];

  playerChoiceElement.textContent = playerChoice;
  computerChoiceElement.textContent = computerChoice;

  const result = determineWinner(playerChoiceIndex, computerChoiceIndex);
  resultText.textContent = result;
  resultText.classList.remove("winner", "loser", "draw");

  if (result === "Ganaste") {
    resultText.classList.add("winner");
    resultText.textContent = "¡Ganaste!";
  } else if (result === "Perdiste") {
    resultText.classList.add("loser");
    resultText.textContent = "¡Perdiste!";
  } else {
    resultText.classList.add("draw");
    resultText.textContent = "Empate";
  }

  updateHistory(playerChoice, computerChoice, result);
}

function determineWinner(playerIndex, computerIndex) {
  if (playerIndex === computerIndex) {
    return "Empate";
  } else if (
    (playerIndex === 0 && computerIndex === 2) ||(playerIndex === 1 && computerIndex === 0) || (playerIndex === 2 && computerIndex === 1)
  ) {
    return "Ganaste";
  } else {
    return "Perdiste";
  }
}

function updateHistory(playerChoice, computerChoice, result) {
  const historyItem = document.createElement("li");
  historyItem.classList.add("history-item");
  
  const icon = document.createElement("span");
  icon.classList.add("icon");
  if (result === "Ganaste") {
    icon.classList.add("icon-green");
    icon.textContent = "✔";
  } else if (result === "Perdiste") {
    icon.classList.add("icon-red");
    icon.textContent = "✘";
  } else {
    icon.textContent = "-";
  }

  const text = document.createElement("span");
  text.textContent = `Tu elección: ${playerChoice}, Competidor: ${computerChoice}, Resultado: ${result}`;

  historyItem.appendChild(icon);
  historyItem.appendChild(text);

  historyList.appendChild(historyItem);
}
