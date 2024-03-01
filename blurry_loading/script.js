const loadText = document.querySelector(".loading-text");
const bg = document.querySelector(".bg");

let load = 0;
let filterBlur = 30;

let int = setInterval(blurring, 30);

function blurring() {
  load++;
  filterBlur -= 0.3;
  if (load > 99) {
    clearInterval(int);
  }
  loadText.innerText = `${load}%`;
  loadText.style.opacity = (100 - load) / 100;
  bg.style.filter = `blur(${filterBlur}px)`;
}
