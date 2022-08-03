let ul = document.querySelector("ul");

let container = document.querySelector(".body-container");
let filter = document.createElement("div");
filter.classList.add("filter");

got.houses.forEach((house, i) => {
  let span = document.createElement("span");
  span.innerText = house.name;
  span.setAttribute("data-id", i);
  filter.append(span);
});

container.prepend(filter);

got.houses.forEach((house) => {
  house.people.forEach((people) => {
    createUI(people);
  });
});

function handleClick(event) {
  ul.innerHTML = "";
  let id = event.target.dataset.id;
  got.houses[id].people.forEach((people) => {
    createUI(people);
  });
}

function createUI(person) {
  let li = document.createElement("li");
  let img = document.createElement("img");
  let h2 = document.createElement("h2");
  let p = document.createElement("p");
  let btn = document.createElement("button");
  let div = document.createElement("div");
  div.classList.add("people");

  img.src = person.image;
  h2.innerText = person.name;
  div.append(img, h2);
  p.innerText = person.description;
  btn.innerHTML = `<a href=${person.wikiLink}>Learn More!</a>`;
  li.append(div, p, btn);
  ul.append(li);
}

filter.addEventListener("click", handleClick);

let search = document.querySelector("input[name=search]");
search.addEventListener("keyup", handleSearch);

function handleSearch(event) {
  let keyWord = event.target.value;
  ul.innerHTML = "";

  got.houses.forEach((house) => {
    house.people.forEach((people, i) => {
      if (people.name.toLowerCase().includes(keyWord.toLowerCase())) {
        createUI(people);
        console.log(people.name);
      }
    });
  });
  if (event.keyCode == 13) {
    event.target.value = "";
  }
}
