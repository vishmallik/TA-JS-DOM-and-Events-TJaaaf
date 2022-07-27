function main() {
  let boxeswoed = document.querySelectorAll(".first li");
  boxeswoed.forEach((box, index) => {
    box.addEventListener("click", function () {
      box.innerText = `${index + 1}`;
      setTimeout(() => {
        box.innerText = ``;
      }, 5000);
    });
  });
}

let boxeswed = document.querySelector(".second");
boxeswed.addEventListener("click", function (event) {
  let text = event.target.dataset.box;
  event.target.innerText = text;
  setTimeout(() => {
    event.target.innerText = ``;
  }, 5000);
});

main();
