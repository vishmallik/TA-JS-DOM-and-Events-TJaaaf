// function main() {
let allTodos = JSON.parse(localStorage.getItem("todos")) || [];
let rootElm = document.querySelector(".rootelm");
let inputText = document.querySelector(
  `input[placeholder="What needs to be done?"]`
);
let statusbar = document.querySelector(".status");
let tab = document.querySelector(".tab");

function handleDelete(event) {
  let id = event.target.dataset.id;
  allTodos.splice(id, 1);
  localStorage.setItem("todos", JSON.stringify(allTodos));
  createUI(allTodos, rootElm);
  if (rootElm.childElementCount === 0) {
    statusbar.style.display = "none";
  }
}
function handleToggle(event) {
  let id = event.target.dataset.id;
  allTodos[id].isDone = !allTodos[id].isDone;
  localStorage.setItem("todos", JSON.stringify(allTodos));
  createUI(allTodos, rootElm);
}

function createUI(data, root) {
  let count = 0;

  root.innerHTML = "";
  data.forEach((todo, index) => {
    let li = document.createElement("li");
    let checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    checkbox.checked = todo.isDone;
    checkbox.setAttribute("data-id", index);
    checkbox.addEventListener("input", handleToggle);
    let span = document.createElement("span");
    let i = document.createElement("i");
    span.innerText = todo.name;
    if (todo.isDone) {
      span.style.textDecoration = "line-through";
      span.style.color = "lightgrey";
      statusbar.lastElementChild.style.visibility = "visible";
      count--;
    }
    i.classList.add("fa-solid");
    i.classList.add("fa-xmark");
    i.style.visibility = "visible";
    i.setAttribute("data-id", index);
    i.addEventListener("click", handleDelete);
    checkbox.style.visibility = "visible";
    li.append(checkbox, span, i);
    root.append(li);
    statusbar.style.display = "flex";
    count++;
    statusbar.children[0].innerText = `${count} Item left`;
    tab.children[0].addEventListener("click", function () {});
    tab.children[1].addEventListener("click", function () {
      allTodos.filter((todo, index) => {
        if (todo.isDone) {
          rootElm.children[index].style.display = "none";
        } else {
          rootElm.children[index].style.display = "block";
        }
      });
    });
    tab.children[2].addEventListener("click", function () {
      if (todo.isDone == false) {
        li.style.display = "none";
      } else {
        li.style.display = "block";
      }
    });
  });
}

function handleInput(event) {
  let value = event.target.value;
  if (event.keyCode === 13 && value !== "") {
    let todo = {
      name: value,
      isDone: false,
    };
    allTodos.push(todo);
    localStorage.setItem("todos", JSON.stringify(allTodos));
    event.target.value = "";
    createUI(allTodos, rootElm);
  }
}

inputText.addEventListener("keyup", handleInput);
// }

// main();
