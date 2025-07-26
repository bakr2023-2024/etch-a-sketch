let pixelSize = 16;
const canvas = document.querySelector("#container");
document.addEventListener("DOMContentLoaded", () => {});
const setPixelSize = () => {
  pixelSize = Math.max(Number(prompt("Enter pixel size (max 100):")), 100);
};
