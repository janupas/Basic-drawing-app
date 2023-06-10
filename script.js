const canvas = document.getElementById("canvas");
const context = canvas.getContext("2d");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

let isMouseDown;
let mouse = {
  x: undefined,
  y: undefined,
};

const drawCircle = () => {
  context.fillStyle = "blue";

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
