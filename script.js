let pixelSize = 16;
const canvas = document.querySelector("#container");
const setPixelSizeBtn = document.querySelector("#setPixelSizeBtn");
const setPixelSize = () => {
  pixelSize = Math.min(Number(prompt("Enter pixel size (max 100):")), 100);
};
const setupCanvas = () => {
  const { width, height } = canvas.getBoundingClientRect();
  const pixelWidth = width / pixelSize;
  const pixelHeight = height / pixelSize;
  for (let i = 0; i < pixelSize; i++) {
    for (let j = 0; j < pixelSize; j++) {
      const pixel = document.createElement("div");
      pixel.setAttribute(
        "style",
        `width: ${pixelWidth}px;height: ${pixelHeight}px;`
      );
      pixel.addEventListener("mouseenter", (e) => {
        e.target.style.backgroundColor = `rgb(
        ${Math.floor(Math.random() * 256)},
        ${Math.floor(Math.random() * 256)},
        ${Math.floor(Math.random() * 256)})`;
      });
      canvas.appendChild(pixel);
    }
  }
};

document.addEventListener("DOMContentLoaded", () => {
  setupCanvas();
});
setPixelSizeBtn.addEventListener("click", () => {
  canvas.innerHTML = "";
  setPixelSize();
  console.log(pixelSize);
  setupCanvas();
});
