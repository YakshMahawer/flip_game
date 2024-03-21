const emojis = ["😀", "😁", "😂", "🤣", "😃", "😄", "😅", "😆"];

const cards = [...emojis, ...emojis];
let flipCards = [];
let matchCards = [];
let clickDisabled = false;

function createCard(emoji) {
  const card = document.createElement("div");
  card.classList.add("card");
  card.innerHTML = `<span class="hidden">${emoji}</span>`;
  card.addEventListener("click", () => flipCard(card));
  return card;
}

function shuffle(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
}

function flipCard(card) {
  if (clickDisabled || card === flipCards[0]) return;
  card.firstChild.classList.remove("hidden");
  flipCards.push(card);
  card.classList.toggle('show-animation');

  if (flipCards.length == 2) {
    clickDisabled = true;

    setTimeout(() => {
      const [card1, card2] = flipCards;
      if (card1.firstChild.textContent === card2.firstChild.textContent) {
        alert("You Won Man!!");
      }
      card1.firstChild.classList.add("hidden");
      card2.firstChild.classList.add("hidden");
      flipCards = [];
      clickDisabled = false;
    }, 1000);
  }
}

function initializeGame() {
  const container = document.getElementById("game-container");
  shuffle(cards).forEach((emoji) => {
    const card = createCard(emoji);
    container.appendChild(card);
  });
}

initializeGame();