const symbols = [
  "🍎",
  "🍎",
  "🚀",
  "🚀",
  "💎",
  "💎",
  "👻",
  "👻",
  "👨🏻‍💻",
  "👨🏻‍💻",
  "🤖",
  "🤖",
];
const board = document.getElementById("box");
const resetGameBtn = document.getElementById("resetGame");
let flippedCards = [];

function createBoard() {
  board.innerHTML = "";
  shuffleSymbols(symbols);

  symbols.forEach((symbol) => {
    const card = document.createElement("div");
    card.dataset.symbol = symbol;
    card.innerText = "?";
    card.addEventListener("click", flipCard);
    board.appendChild(card);
  });
}

function flipCard() {
  if (flippedCards.length < 2 && !this.classList.contains("flipped")) {
    this.innerText = this.dataset.symbol;
    this.classList.add("flipped");
    flippedCards.push(this);

    if (flippedCards.length === 2) {
      checkMatch();
    }
  }
}

function checkMatch() {
  const [card1, card2] = flippedCards;
  if (card1.dataset.symbol === card2.dataset.symbol) {
    card1.style.backgroundColor = "var(--bg-success)";
    card2.style.backgroundColor = "var(--bg-success)";
    flippedCards = [];
    const isGameOver =
      document.querySelectorAll(".flipped").length === symbols.length;
    if (isGameOver) {
      setTimeout(() => {
        alert("Game Over! 🎉");
      }, 500);
    }
  } else {
    setTimeout(() => {
      card1.innerText = "?";
      card2.innerText = "?";
      card1.classList.remove("flipped");
      card2.classList.remove("flipped");
      flippedCards = [];
    }, 1000);
  }
}

function shuffleSymbols(arr) {
  for (let i = arr.length - 1; i > 0; i--) {
    // pick random index
    let j = Math.floor(Math.random() * (i + 1));

    // swap elements
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
  return arr;
}

resetGameBtn.addEventListener("click", createBoard);

createBoard();
