import promedio from "./modules/promedio.js";

window.cargaNotas = promedio.cargaNotas;
window.calcular = promedio.calcular.bind(promedio);

var caja = document.getElementById("caja");

document.getElementById("e4").addEventListener("click", () => {
  caja.innerHTML = promedio.data;
  promedio.cargaNotas();
});
