function randomColor() {
  return Math.ceil(Math.random() * 255);
}

const currentValue = document.getElementById("value");
const body = document.getElementById("cuerpo");
const titulo = document.getElementsByClassName("titulo");

document.getElementById("generate").addEventListener("click", () => {
  const color = `rgb(${randomColor()},${randomColor()},${randomColor()})`;
  body.style.background = color;
  titulo[0].style.background = color;
  titulo[0].style.backgroundClip = "text";
  currentValue.textContent = color;
});
