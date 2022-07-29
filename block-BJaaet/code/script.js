let movieName = document.querySelector("input[type = 'text']");

function handleInput(event) {
  let newItem = document.createElement("div");
  let root = document.querySelector("main");

  newItem.innerHTML = `<input type="checkbox" name="checkbox" id="checkbox">
    <label for="checkbox"></label>
    <i class="fa-solid fa-square-xmark"></i>`;

  if (event.keyCode === 13) {
    if (event.target.value !== "") {
      newItem.children[1].innerText = event.target.value;
      root.append(newItem);
      movieName.value = "";
    }
  }

  newItem.children[2].addEventListener("click", function () {
    newItem.children[2].parentElement.classList.add("close");
  });

  newItem.children[0].addEventListener("click", function () {
    if (newItem.children[0].checked) {
      newItem.children[0].parentElement.style.backgroundColor =
        "rgb(227, 255, 227)";
    } else {
      newItem.children[0].parentElement.style.backgroundColor =
        "rgb(255, 232, 243)";
    }
  });
}

movieName.addEventListener("keyup", handleInput);
