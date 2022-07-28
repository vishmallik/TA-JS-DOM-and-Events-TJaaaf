let userInput = {};
let form = document.querySelector("form");
let modal = document.querySelector(".modal");
let close = document.querySelector(".close");

function handleSubmit(event) {
  event.preventDefault();
  userInput.name = form.elements.name.value;
  userInput.email = form.elements.email.value;
  userInput.likes = form.elements.movies.value;
  userInput.color = form.elements.color.value;
  userInput.rating = form.elements.range.value;
  userInput.bookGenre = form.elements.drone.value;
  userInput.terms = form.elements.terms.checked;
  modal.style.display = "block";
  form.style.display = "none";

  // modal

  close.addEventListener("click", function () {
    form.style.display = "flex";
    modal.style.display = "none";
  });

  modal.children[1].innerText = `Hello ${userInput.name}`;
  modal.children[2].innerText = `Email: ${userInput.email}`;
  modal.children[3].innerText = `You Love: ${userInput.likes}`;
  modal.children[4].innerText = `Color: ${userInput.color}`;
  modal.children[5].innerText = `Rating: ${userInput.rating}`;
  modal.children[6].innerText = `Book Genre: ${userInput.bookGenre}`;
  if (userInput.terms == true) {
    modal.children[7].innerText = `✅ You agreed to Terms and conditions`;
  } else {
    modal.children[7].innerText = `❌ You didn't agree to Terms and conditions`;
  }
  form.reset();
}
form.addEventListener("submit", handleSubmit);
