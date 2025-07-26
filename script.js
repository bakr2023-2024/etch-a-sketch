let pixelSize = 16;
const canvas = document.querySelector("#container");
const setPixelSizeBtn = document.querySelector("#setPixelSizeBtn");
const setPixelSize = () => {
  pixelSize = Math.max(Number(prompt("Enter pixel size (max 100):")), 100);
};
const setupCanvas = () => {
  const { width, height } = canvas.getBoundingClientRect();
  const pixel = document.createElement("div");
  const pixelWidth = width / pixelSize;
  const pixelHeight = height / pixelSize;
  pixel.setAttribute(
    "style",
    `width:${pixelWidth}px;height:${pixelHeight}px;background-color:white`
  );
  for (let i = 0; i < pixelSize; i++)
    for (let j = 0; j < pixelSize; j++) canvas.appendChild(pixel);
  pixel.addEventListener("hover", (e) => {
    e.target.style.backgroundColor = "green";
  });
};
document.addEventListener("DOMContentLoaded", () => {
  setupCanvas();
});
setPixelSizeBtn.addEventListener("click", () => {
  setPixelSize();
  setupCanvas();
});
