let main = document.body.children[1];
for (let i = 1; i <= 500; i++) {
  var div = document.createElement("div");
  main.append(div);
  div.classList.add("box");
  div.innerText = `${i}`;
}
let box = document.querySelectorAll(".box");
function randomNumber() {
  return Math.floor(Math.random() * 500);
}
function randomColor() {
  let hex = [
    "0",
    "1",
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
    "a",
    "b",
    "c",
    "d",
    "e",
    "f",
  ];

  var color = "#";
  for (let i = 0; i < 6; i++) {
    let rnd = Math.floor(Math.random() * 16);
    color = color + hex[rnd];
  }
  return color;
}
function disco() {
  box.forEach((elm) => (elm.style.backgroundColor = randomColor()));
  box.forEach((elm) => (elm.innerText = randomNumber()));
}

box.forEach((elm) => elm.addEventListener("mousemove", disco));
