function getTimeFromSeg(seg) {
  const date = new Date(seg * 1000);
  return date.toLocaleTimeString("pt-BR", { hour12: false, timeZone: "GMT" });
}

const relogio = document.querySelector(".relogio");
const iniciar = document.querySelector(".iniciar");
const pausar = document.querySelector(".pausar");
const zerar = document.querySelector(".zerar");
let segundos = 0;
let timer;

function iniciaRelogio() {
  timer = setInterval(() => {
    segundos++;
    relogio.innerHTML = getTimeFromSeg(segundos);
  }, 1000);
}

document.addEventListener("click", (e) => {
  const element = e.target;

  if (element.classList.contains("iniciar")) {
    clearInterval(timer);
    iniciaRelogio();
    relogio.classList.remove("pausado");
  } else if (element.classList.contains("pausar")) {
    clearInterval(timer);
    relogio.classList.add("pausado");
  } else if (element.classList.contains("zerar")) {
    clearInterval(timer);
    relogio.innerHTML = "00:00:00";
    relogio.classList.add("pausado");
  }
});
