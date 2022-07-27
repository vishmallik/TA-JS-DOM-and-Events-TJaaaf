let result = document.createElement("h2");
let parent = document.querySelector(".parent");

let rock = document.querySelector(".rock");
let playerRock = document.querySelector(".player-rock");

let paper = document.querySelector(".paper");
let playerPaper = document.querySelector(".player-paper");

let scissors = document.querySelector(".scissors");
let playerScissors = document.querySelector(".player-scissors");

parent.append(result);
let reset = document.querySelector(".reset");
let active;
let player = document.querySelector(".player");
let bot = document.querySelector(".pc");
let playerSelection = document.querySelector(".player-selection");
let pcSelection = document.querySelector(".pc-selection");
let playerCounter = document.querySelector(".player-counter");
let pcCounter = document.querySelector(".pc-counter");
let countWin = 0,
  countLose = 0;
pcCounter.innerText = `${countLose}`;
playerCounter.innerText = `${countWin}`;

function clickHandler(event) {
  playerPaper.style.color = "rgb(33, 143, 252)";
  playerRock.style.color = "rgb(33, 143, 252)";
  playerScissors.style.color = "rgb(33, 143, 252)";
  event.target.style.color = "black";
  let object = event.target.dataset.type;
  botLogic();
  if (object == "rock" && active == "rock") {
    result.innerText = "It's A Tie!!";
    playerSelection.innerText = `  --${object}`;
    pcSelection.innerText = `  --${active}`;
  } else if (object == "rock" && active == "scissors") {
    result.innerText = "You Won!";
    countWin++;
    playerSelection.innerText = `  --${object}`;
    pcSelection.innerText = `  --${active}`;
  } else if (object == "rock" && active == "paper") {
    result.innerText = "You Lost!";
    countLose++;
    playerSelection.innerText = `  --${object}`;
    pcSelection.innerText = `  --${active}`;
  } else if (object == "paper" && active == "paper") {
    result.innerText = "It's A Tie!!";
    playerSelection.innerText = `  --${object}`;
    pcSelection.innerText = `  --${active}`;
  } else if (object == "paper" && active == "rock") {
    result.innerText = "You Won!";
    countWin++;
    playerSelection.innerText = `  --${object}`;
    pcSelection.innerText = `  --${active}`;
  } else if (object == "paper" && active == "scissors") {
    result.innerText = "You Lost!";
    countLose++;
    playerSelection.innerText = `  --${object}`;
    pcSelection.innerText = `  --${active}`;
  } else if (object == "scissor" && active == "rock") {
    result.innerText = "You Lost!";
    countLose++;
    playerSelection.innerText = `  --${object}`;
    pcSelection.innerText = `  --${active}`;
  } else if (object == "scissor" && active == "paper") {
    result.innerText = "You Won!";
    countWin++;
    playerSelection.innerText = `  --${object}`;
    pcSelection.innerText = `  --${active}`;
  } else if (object == "scissor" && active == "scissors") {
    result.innerText = "It's A Tie!!";
    playerSelection.innerText = `  --${object}`;
    pcSelection.innerText = `  --${active}`;
  }
  pcCounter.innerText = `${countLose}`;
  playerCounter.innerText = `${countWin}`;
}

function botLogic() {
  let rnd = Math.round(Math.random() * 2);
  switch (true) {
    case rnd == 0:
      rock.style.color = "black";
      paper.style.color = "red";
      scissors.style.color = "red";
      return (active = "rock");
    case rnd == 1:
      active = paper;
      rock.style.color = "red";
      paper.style.color = "black";
      scissors.style.color = "red";
      return (active = "paper");
    case rnd == 2:
      rock.style.color = "red";
      scissors.style.color = "black";
      paper.style.color = "red";
      return (active = "scissors");
  }
}

player.addEventListener("click", clickHandler);
reset.addEventListener("click", function () {
  countWin = 0;
  countLose = 0;
  pcCounter.innerText = `${0}`;
  playerCounter.innerText = `${0}`;
  playerSelection.innerText = ``;
  pcSelection.innerText = ``;
  result.innerText = ``;
  rock.style.color = "red";
  scissors.style.color = "red";
  paper.style.color = "red";
  playerPaper.style.color = "rgb(33, 143, 252)";
  playerRock.style.color = "rgb(33, 143, 252)";
  playerScissors.style.color = "rgb(33, 143, 252)";
});
