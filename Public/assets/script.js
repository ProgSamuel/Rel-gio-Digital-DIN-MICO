const horas = document.getElementById("horas");
const minutos = document.getElementById("minutos");
const segundos = document.getElementById("segundos");

const relogio = setInterval(function time() {
  let dateToday = new Date();
  let hr = dateToday.getHours();
  let min = dateToday.getMinutes();
  let s = dateToday.getSeconds();

  if (hr < 10) hr = "0" + hr;
  if (min < 10) min = "0" + min;
  if (s < 10) s = "0" + s;

  horas.textContent = hr;
  minutos.textContent = min;
  segundos.textContent = s;
});

const divElemento = document.getElementById("meuDiv");
const selectElement = document.getElementById("selectTema");

selectElement.addEventListener("change", function () {
  const selectedValue = selectElement.value;

  switch (selectedValue) {
    case "PinkPop":
      divElemento.style.background =
        "linear-gradient(120deg, #89fffd, #ef32d9)";
      break;
    case "GrayBlue":
      divElemento.style.background =
        "linear-gradient(120deg, #859398, #283048)";
      break;
    case "Gray":
      divElemento.style.background =
        "linear-gradient(120deg, #414345, #232526)";
      break;
    default:
      divElemento.style.background =
        "linear-gradient(120deg, #ffe53bd8, #ff2525da)";
  }
});



