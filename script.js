const canvas = document.getElementById("canvas");
const context = canvas.getContext("2d");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

let isMouseDowned = false;

class Mouse {
  constructor(initialX, initialY) {
    this.x = initialX;
    this.y = initialY;
  }

  update(x, y) {
    this.x = x;
    this.y = y;
  }
}
const mousePosition = new Mouse(canvas.width / 2, canvas.height / 2);

class Particle {
  constructor(x, y, radius, color) {
    this.x = x;
    this.y = y;
    this.radius = radius;
    this.color = color;
  }
}

canvas.addEventListener("mousedown", (e) => {
  isMouseDowned = true;
});

canvas.addEventListener("mouseup", (e) => {
  isMouseDowned = false;
});

canvas.addEventListener("mousemove", (e) => {
  if (isMouseDowned) {
    mousePosition.update(e.clientX, e.clientY);
  }
});
