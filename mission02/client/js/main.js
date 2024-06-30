import { data, setBgColor, setImage, setNameText } from "./index.js";

const nav = document.querySelector(".nav ul");
const elem = document.querySelector(".visual img");
const title = document.querySelector(".nickName");

nav.addEventListener("click", (event) => {
  const target = event.target.closest("li");
  if (target) {
    const index = target.dataset.index - 1;
    const itemData = data[index];
    setBgColor(document.body, itemData.color[0], itemData.color[1]);
    setImage(elem, itemData.name.toLowerCase(), itemData.alt);
    setNameText(title, itemData.name);
  }
});
