import { createDiv } from "./createDiv.js";

const divRoot = document.getElementById("root");

const arr = Array.from({ length: 100 });

const arrOfDiv = arr.map((_, id) => createDiv(id));

const galleryOfDiv = arrOfDiv.join("");

divRoot.insertAdjacentHTML("beforeend", galleryOfDiv);

divRoot.addEventListener("click", onClick);

function onClick(event) {
  if (event.target.classList.contains("selected")) {
    let previousSibling = null;

    for (let i = 1; i <= event.target.id; i += 1) {
      previousSibling = document.getElementById(event.target.id - i);
      if (!previousSibling.classList.contains("selected")) {
        break;
      }
    }

    console.log(previousSibling);

    if (!previousSibling) {
      event.target.classList.remove("selected");
      return;
    }

    previousSibling.after(event.target);

    event.target.classList.remove("selected");

    return;
  }

  event.target.classList.add("selected");
  event.target.parentNode.prepend(event.target);
}
