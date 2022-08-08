let game = document.getElementById("game");
let choices = document.getElementById("choices");

let wonMsg = document.createElement("div");
wonMsg.classList.add("won");

const WINNING_COMBINATIONS = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6],
];

for (let i = 0; i < 9; i++) {
  let div = document.createElement("div");
  div.classList.add("box");
  div.setAttribute("data-id", i);
  game.append(div);
}
let playerChoices = [];
let CPUChoices = [];
let previousValue = [];
let playerWon = false;
let CPUWon = false;
let CPUCount = 0;

let form = document.createElement("form");
let select = document.createElement("select");
select.name = "selected";
let option1 = document.createElement("option");
option1.value = "X";
option1.innerText = "X";

let option2 = document.createElement("option");
option2.value = "O";
option2.innerText = "O";

let btn = document.createElement("button");
btn.type = "submit";
btn.innerText = "Submit";
select.append(option1, option2);
form.append(select, btn);
choices.append(form, wonMsg);

let playerSelection = "";
let bot = null;

form.addEventListener("submit", (event) => {
  event.preventDefault();
  playerSelection = form.elements.selected.value;
  select.disabled = "true";

  if (playerSelection == "X") {
    bot = "O";
  } else if (playerSelection == "O") {
    bot = "X";
  }
  startGame();
});

function startGame() {
  game.addEventListener("click", (event) => {
    let clicked = event.target;
    let id = +event.target.dataset.id;

    if (
      previousValue.includes(clicked) ||
      clicked.nodeName === "SECTION" ||
      clicked.classList.contains("selected") ||
      playerWon ||
      CPUWon
    ) {
      return;
    }

    previousValue.push(clicked);
    playerChoices.push(id);
    clicked.innerText = playerSelection;
    clicked.classList.add("selected");

    setTimeout(CPU, 500);
    winLogic();
  });
}

function winLogic() {
  playerWon = WINNING_COMBINATIONS.some((combo) =>
    combo.every((ele) => playerChoices.includes(ele))
  );
  CPUWon = WINNING_COMBINATIONS.some((combo) =>
    combo.every((ele) => CPUChoices.includes(ele))
  );

  if (playerWon) {
    wonMsg.innerText = "🥳🥳🥳 !!!YOU WON!!! 🥳🥳🥳";
  } else if (CPUWon) {
    wonMsg.innerText = "😞 CPU WON 😞";
  } else {
    return;
  }
}

function CPU() {
  CPUCount++;
  if (CPUCount < 5) {
    try {
      var botChoice = random();
    } catch (error) {
      wonMsg.innerText = "It's a TIE!!!😐";
      return;
    }
    CPUChoices.push(botChoice);

    let CPUSelect = document.querySelector(`div[data-id='${botChoice}']`);
    CPUSelect.classList.add("selected");
    if (playerWon) {
      CPUSelect.innerText = "";
    } else {
      CPUSelect.innerText = bot;
    }

    winLogic();
  }
}

function random() {
  var rnd = Math.round(Math.random() * 8);
  if (!playerChoices.includes(rnd) && !CPUChoices.includes(rnd)) {
    return rnd;
  } else {
    return random();
  }
}
