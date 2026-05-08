const cursor = document.getElementById("cursor");

let x = 0;
let y = 0;

document.addEventListener("mousemove", (e) => {
  x = e.clientX;
  y = e.clientY;
});

function smoothMove() {
  cursor.style.left = x + "px";
  cursor.style.top = y + "px";
  requestAnimationFrame(smoothMove);
}

smoothMove();