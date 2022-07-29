let form = document.querySelector("form");
let user = {};
let errorMsgs = [
  "Username can't be less than 4 characters",
  "You can't use number in the name field",
  "Not a valid email",
  "Email can't be less than 6 characters",
  "Phone number can't be less than 7 characters",
  "Phone number can only contain numbers",
  "Both password should match",
  "",
];
function containNumber(str) {
  return str.split("").some((ele) => Number(ele));
}
let elements = form.elements;
function handleSubmit(event) {
  event.preventDefault();
  user.username = elements.username.value;
  user.name = elements.name.value;
  user.email = elements.email.value;
  user.phone = elements.phone.value;
  if (elements.password.value === elements.confirmpassword.value) {
    user.password = elements.password.value;
  } else {
    user.password = "";
  }

  if (user.username.length < 4) {
    event.target.elements.username.classList.add("invalid");
    elements.username.nextElementSibling.innerText = errorMsgs[0];
  } else if (containNumber(user.name)) {
    event.target.elements.name.classList.add("invalid");
    elements.name.nextElementSibling.innerText = errorMsgs[1];
  } else if (!user.email.includes("@")) {
    event.target.elements.email.classList.add("invalid");
    elements.email.nextElementSibling.innerText = errorMsgs[2];
  } else if (user.email.length < 6) {
    event.target.elements.email.classList.add("invalid");
    elements.email.nextElementSibling.innerText = errorMsgs[3];
  } else if (user.phone.length < 7) {
    event.target.elements.phone.classList.add("invalid");
    elements.phone.nextElementSibling.innerText = errorMsgs[4];
  } else if (!containNumber(user.phone)) {
    event.target.elements.phone.classList.add("invalid");
    elements.phone.nextElementSibling.innerText = errorMsgs[5];
  } else if (user.password !== elements.confirmpassword.value) {
    event.target.elements.password.classList.add("invalid");
    elements.password.nextElementSibling.innerText = errorMsgs[6];
  } else {
    event.target.elements.password.classList.remove("invalid");
    event.target.elements.email.classList.remove("invalid");
    event.target.elements.email.classList.remove("invalid");
    event.target.elements.phone.classList.remove("invalid");
    event.target.elements.phone.classList.remove("invalid");
    event.target.elements.name.classList.remove("invalid");
    event.target.elements.username.classList.remove("invalid");
    elements.username.nextElementSibling.innerText = errorMsgs[7];
    elements.name.nextElementSibling.innerText = errorMsgs[7];
    elements.email.nextElementSibling.innerText = errorMsgs[7];
    elements.email.nextElementSibling.innerText = errorMsgs[7];
    elements.phone.nextElementSibling.innerText = errorMsgs[7];
    elements.phone.nextElementSibling.innerText = errorMsgs[7];
    elements.password.nextElementSibling.innerText = errorMsgs[7];
  }
  form.reset();
}

form.addEventListener("submit", handleSubmit);
