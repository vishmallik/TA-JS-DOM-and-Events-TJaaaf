let box1 = document.querySelector(".first");
let box2 = document.querySelector(".second");

box1.addEventListener("click", function () {
  box1.style.backgroundColor = `#${Math.floor(
    Math.random() * 16777215
  ).toString(16)}`;
});

box2.addEventListener("mousemove", function () {
  box2.style.backgroundColor = `#${Math.floor(
    Math.random() * 16777215
  ).toString(16)}`;
});
