const words = ["javascript", "ciencia", "cartel", "programar", "computadora", "remera", "hamster", "salchipapa","telescopio"];
let chosenWord = words[Math.floor(Math.random() * words.length)];
let remainingAttempts = 5;
let guessedLetters = [];
let hangmanImageNumber = 0;

const wordDisplay = document.getElementById("word-display");
const guessResult = document.getElementById("guess-result");
const letterInput = document.getElementById("letter-input");
const guessButton = document.getElementById("guess-button");
const newGameButton = document.getElementById("new-game-button");
const resetButton = document.getElementById("reset-button");
const hangmanImage = document.getElementById("hangman-image");
const keyboard = document.getElementById("keyboard");

guessButton.addEventListener("click", handleGuess);
newGameButton.addEventListener("click", startNewGame);
resetButton.addEventListener("click", resetGame);

function handleGuess() {
    const letter = letterInput.value.toLowerCase();
    if (letter.match(/[a-z]/) && !guessedLetters.includes(letter)) {
      guessedLetters.push(letter);
      if (!chosenWord.includes(letter)) {
        remainingAttempts--;
        updateHangmanImage();
        guessResult.innerHTML += `<span class="incorrect-letter">${letter}</span> `;
      }
      displayWord();
      checkWinOrLose();
      letterInput.value = "";
    }
  }
  
  function startNewGame() {
    guessResult.innerHTML = "";
    chosenWord = words[Math.floor(Math.random() * words.length)];
    remainingAttempts = 5;
    guessedLetters = [];
    hangmanImageNumber = 0;
    hangmanImage.src = `images/hangman_${hangmanImageNumber}.png`;
    displayWord();
    letterInput.value = "";
    guessButton.disabled = false;
    letterInput.disabled = false;
  }
  
  function resetGame() {
    chosenWord = words[Math.floor(Math.random() * words.length)];
    remainingAttempts = 5;
    guessedLetters = [];
    hangmanImageNumber = 0;
    hangmanImage.src = `images/hangman_${hangmanImageNumber}.png`;
    displayWord();
    letterInput.value = "";
  }
  

  function displayWord() {
    let displayText = "";
    for (const letter of chosenWord) {
      if (guessedLetters.includes(letter)) {
        displayText += `<span class="correct-letter">${letter}</span> `;
      } else {
        displayText += "_ ";
      }
    }
    wordDisplay.innerHTML = displayText;
  }

function updateHangmanImage() {
  hangmanImageNumber++;
  hangmanImage.src = `images/hangman_${hangmanImageNumber}.png`;
}

function checkWinOrLose() {
  const correctGuesses = guessedLetters.filter(letter => chosenWord.includes(letter)).length;
  
  if (correctGuesses === chosenWord.length) {
    displayWord();
    showMessage(true, `¡Has ganado! La palabra era: "${chosenWord}".`);
  } else if (remainingAttempts === 0) {
    displayWord();
    showMessage(false, `¡Has perdido! La palabra era: "${chosenWord}".`);
  }
}

function showMessage(isWin, message) {
  guessButton.disabled = true;
  letterInput.disabled = true;
  guessResult.innerHTML = `<p class="${isWin ? 'win-message' : 'lose-message'}">${message}</p>`;
  letterInput.value = "";
}

function handleLetterClick(event) {
  const letter = event.target.textContent;
  if (!guessedLetters.includes(letter)) {
    guessedLetters.push(letter);
    if (!chosenWord.includes(letter)) {
      remainingAttempts--;
      updateHangmanImage();
    }
    displayWord();
    checkWinOrLose();
  }
}

function resetGame() {
  chosenWord = words[Math.floor(Math.random() * words.length)];
  remainingAttempts = 5;
  guessedLetters = [];
  hangmanImageNumber = 0;
  hangmanImage.src = `images/hangman_${hangmanImageNumber}.png`;
  displayWord();
}

for (let i = 65; i <= 90; i++) {
  const letter = String.fromCharCode(i);
  const keyElement = document.createElement("div");
  keyElement.classList.add("key");
  keyElement.textContent = letter;
  keyElement.addEventListener("click", handleLetterClick);
  keyboard.appendChild(keyElement);
}

displayWord();
