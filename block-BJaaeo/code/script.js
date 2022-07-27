let screen = document.querySelector(".screen");
btn = document.querySelectorAll(".btn");
let initialValue = 0;
screen.innerText = initialValue;
function clickAction(event) {
  if (event.target.dataset.num == "=") {
    screen.innerText = eval(screen.innerText);
    return;
  }

  if (screen.innerText == initialValue) {
    screen.innerText = event.target.dataset.num;
  } else {
    screen.innerText += event.target.dataset.num;
  }
  if (event.target.dataset.num == "C") {
    screen.innerText = initialValue;
    return;
  }
}

btn.forEach((element) => {
  element.addEventListener("click", clickAction);
});
screen.innerText = initialValue;
