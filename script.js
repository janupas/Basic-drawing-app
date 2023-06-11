const canvas = document.getElementById("canvas");
const context = canvas.getContext("2d");

const brushColorContainer = document.getElementById("brush-color");
const colorsBox = document.createElement("div");

const colors = ["black", "blue", "red"];

const colorSelectObjects = [];

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

let currentBrushColor = "black";

let isMouseDown;
let mouse = {
  x: undefined,
  y: undefined,
};

const drawCircle = () => {
  context.fillStyle = currentBrushColor || "black";

  context.beginPath();
  context.arc(mouse.x, mouse.y, 3, 0, Math.PI * 2);
  context.fill();
};

canvas.addEventListener("mousemove", (e) => {
  mouse.x = e.clientX;
  mouse.y = e.clientY;

  if (isMouseDown) {
    drawCircle();
  }
});

canvas.addEventListener("click", (e) => {
  mouse.x = e.clientX;
  mouse.y = e.clientY;

  drawCircle();
});

canvas.addEventListener("mousedown", (e) => {
  isMouseDown = true;
});

canvas.addEventListener("mouseup", (e) => {
  isMouseDown = false;
});

document.addEventListener("DOMContentLoaded", () => {
  colorsBox.classList.add("color-box");

  colors.forEach((color) => {
    const colorbox = document.createElement("div");
    colorbox.style.backgroundColor = color;

    colorbox.classList.add("color");
    colorsBox.appendChild(colorbox);

    colorSelectObjects.push(colorbox);
  });

  brushColorContainer.appendChild(colorsBox);
});

const update = () => {
  colorSelectObjects.forEach((obj) => {
    obj.addEventListener("click", (e) => {
      currentBrushColor = obj.style.backgroundColor || "black";
    });
  });
};

const animate = () => {
  update();

  requestAnimationFrame(animate);
};

animate();
