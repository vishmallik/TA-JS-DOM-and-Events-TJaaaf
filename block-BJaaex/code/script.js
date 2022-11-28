function main() {
  // Card data
  const cardsArray = [
    {
      name: "star",
      img: `img/star.svg`,
    },
    {
      name: "beaker",
      img: "img/beaker.svg",
    },
    {
      name: "bell",
      img: "img/bell.svg",
    },
    {
      name: "cake",
      img: "img/cake.svg",
    },
    {
      name: "clock",
      img: "img/clock.svg",
    },
    {
      name: "moon",
      img: "img/moon.svg",
    },
    {
      name: "phone",
      img: "img/phone.svg",
    },
    {
      name: "rupee",
      img: "img/rupee.svg",
    },
  ];

  let gameGrid = cardsArray.concat(cardsArray);
  gameGrid.sort(() => 0.5 - Math.random());

  const game = document.getElementById("game");
  const grid = document.createElement("section");
  const countMoves = document.createElement("div");
  const timeTaken = document.createElement("div");
  const winMsg = document.createElement("div");
  countMoves.classList.add("moves");
  timeTaken.classList.add("time");
  winMsg.classList.add("win");

  grid.setAttribute("class", "grid");
  game.append(grid, countMoves, timeTaken, winMsg);

  gameGrid.forEach((item) => {
    const card = document.createElement("div");
    card.classList.add("card");
    card.dataset.name = item.name;

    const front = document.createElement("div");
    front.classList.add("front");

    const back = document.createElement("div");
    back.classList.add("back");
    back.style.backgroundImage = `url(${item.img})`;

    grid.appendChild(card);
    card.appendChild(front);
    card.appendChild(back);
  });

  let matched = 0;
  let count = 0;
  let firstGuess = "";
  let secondGuess = "";
  let previousTarget = null;
  let delay = 1200;
  let moves = 0;
  let eventNum = 0;
  let start = null;
  let stopped = null;

  countMoves.innerText = `Moves: ${moves}`;

  grid.addEventListener("click", function (event) {
    eventNum++;

    if (eventNum === 1) {
      start = performance.now();
    }

    let clicked = event.target;

    if (
      clicked.nodeName === "SECTION" ||
      clicked === previousTarget ||
      clicked.parentNode.classList.contains("selected") ||
      clicked.parentNode.classList.contains("match")
    ) {
      return;
    }

    if (count < 2) {
      count++;
      if (count === 1) {
        firstGuess = clicked.parentNode.dataset.name;
        clicked.parentNode.classList.add("selected");
      } else {
        secondGuess = clicked.parentNode.dataset.name;
        clicked.parentNode.classList.add("selected");
      }
      if (firstGuess !== "" && secondGuess !== "") {
        if (firstGuess === secondGuess) {
          setTimeout(match, delay);
          setTimeout(resetGuesses, delay);
        } else {
          setTimeout(resetGuesses, delay);
        }
      }

      previousTarget = clicked;
    }
  });

  function match() {
    matched++;

    let selected = document.querySelectorAll(".selected");
    selected.forEach((card) => {
      card.classList.add("match");
    });

    if (matched > 7) {
      stopped = performance.now();
      timeTaken.innerText = `Time Taken to Complete: ${Math.round(
        (stopped - start) / 1000
      )} seconds`;

      winMsg.innerText = `!!! 🥳 YOU WON 🥳!!!`;
    }
  }

  function resetGuesses() {
    moves++;
    countMoves.innerText = `Moves: ${moves}`;
    firstGuess = "";
    secondGuess = "";
    count = 0;
    previousTarget = null;

    var selected = document.querySelectorAll(".selected");
    selected.forEach((card) => {
      card.classList.remove("selected");
    });
  }
}
main();
