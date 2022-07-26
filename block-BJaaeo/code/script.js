let screen = document.querySelector(".screen");
screen.innerText = "";
keypad = document.querySelector(".keypad");
keypad.addEventListener("click", function (event) {
  screen.innerText += event.target.dataset.num;
  let num = event.target.dataset.num;
  let num1 = 0,
    num2 = 0,
    operator;

  switch (true) {
    case num === "C":
      screen.innerText = "";
      break;
    case num === "1":
    case num === "2":
    case num === "3":
    case num === "4":
    case num === "5":
    case num === "6":
    case num === "7":
    case num === "6":
    case num === "7":
      if (num !== 0) {
        num2 = +num;
      } else {
        num1 = +num;
      }
      break;
    case num === "+":
    case num === "-":
    case num === "*":
    case num === "/":
  }
});
let equals = document.querySelector(".equals");
equals.addEventListener("click", function (event) {
  screen.innerText = eval(
    screen.innerText.split("").forEach((element, index) => {
      if (element === "+") {
      }
    })
  );
});
