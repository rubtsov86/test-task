import { createDiv } from "./createDiv.js";

const divRoot = document.getElementById("root");
let currentDivOnClick = null;

const arr = Array.from({ length: 100 });

const arrOfDiv = arr.map((_, id) => createDiv(id));

const galleryOfDiv = arrOfDiv.join("");

divRoot.insertAdjacentHTML("beforeend", galleryOfDiv);

divRoot.addEventListener("click", onClick);

function onClick(event) {
  console.log(currentDivOnClick === event.target.id);

  if (currentDivOnClick === event.target.id) {
    const newArr = [
      ...arrOfDiv.slice(0, event.target.id),
      arrOfDiv[event.target.id],
      ...arrOfDiv.slice(Number(event.target.id) + 1, arrOfDiv.length),
    ];
    divRoot.innerHTML = newArr.join("");
    currentDivOnClick = event.target.id;

    currentDivOnClick = null;
    return;
  }

  const newArr = [
    arrOfDiv[event.target.id],
    ...arrOfDiv.slice(0, event.target.id),
    ...arrOfDiv.slice(Number(event.target.id) + 1, arrOfDiv.length),
  ];

  divRoot.innerHTML = newArr.join("");
  currentDivOnClick = event.target.id;
}
