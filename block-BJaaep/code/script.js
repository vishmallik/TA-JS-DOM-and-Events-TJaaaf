function main() {
  let boxes = document.querySelectorAll(".box");
  boxes.forEach((box, index) => {
    box.addEventListener("click", function () {
      box.innerText = `${index + 1}`;
    });
  });

  let ul = document.querySelector(".boxes");
  ul.addEventListener("click", function (event) {
    // event.target.innerText = 0;
    event.target.innerText = +event.target.innerText + 1;
  });
}
main();
