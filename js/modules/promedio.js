export default {
  promedios: [
    { ramo: "Matematica", promedio: 3.5, estado: "Reprobado" },
    { ramo: "Programación", promedio: 4.6, estado: "probado" },
  ],
  data: `
    <h1>Mis Promedios</h1>
    Asignatura <br />
    <input id="txt1" type="text" /><br/>

    Nota 1 <br />
    <input id="txtn1" type="number" /><br/>
    % Nº1 <br />
    <input id="txtp1" type="number" /><br />

    Nota 2 <br />
    <input id="txtn2" type="number" /><br/>
    % Nº2 <br />
    <input id="txtp2" type="number" /><br />

    Nota 3 <br />
    <input id="txtn3" type="number" /><br/>
    % Nº3 <br />
    <input id="txtp3" type="number" /><br />

    <button onclick = "calcular()">calular</button>

    <div id="salida"></div>


  `,

  calcular: function () {
    var txt_asignatura = document.getElementById("txt1");
    var txtn1 = document.getElementById("txtn1");
    var txtp1 = document.getElementById("txtp1");
    var txtn2 = document.getElementById("txtn2");
    var txtp2 = document.getElementById("txtp2");
    var txtn3 = document.getElementById("txtn3");
    var txtp3 = document.getElementById("txtp3");

    if (txt_asignatura.value == "" || txtn1.value == "") {
      alert("Hay campos vacios");
      return;
    }

    if (txtn1.value < 1 || txtn1.value > 7) {
      alert("la nota 1 no esta entre 1 y 7");
      txtn1.value = "";
      txtn1.focus();
      return;
    }
    if (txtn2.value < 1 || txtn2.value > 7) {
      alert("la nota 2 no esta entre 1 y 7");
      txtn1.value = "";
      txtn1.focus();
      return;
    }
    if (txtn3.value < 1 || txtn3.value > 7) {
      alert("la nota 3 no esta entre 1 y 7");
      txtn1.value = "";
      txtn1.focus();
      return;
    }

    if (txtp1.value < 1 || txtp1.value > 100) {
      alert("El % de la nota 1 no esta entre 1 y 100");
      txtp1.value = "";
      txtp1.focus();
      return;
    }

    if (txtp2.value < 1 || txtp2.value > 100) {
      alert("El % de la nota 2 no esta entre 1 y 100");
      txtp2.value = "";
      txtp2.focus();
      return;
    }

    if (txtp3.value < 1 || txtp3.value > 100) {
      alert("El % de la nota 3 no esta entre 1 y 100");
      txtp3.value = "";
      txtp3.focus();
      return;
    }
    var suma =
      parseInt(txtp1.value) + parseInt(txtp2.value) + parseInt(txtp3.value);
    console.log(suma);

    if (suma != 100) {
      alert("la suma de los % no es 100");
      return;
    }

    var prom =
      (txtn1.value * txtp1.value) / 100 +
      (txtn2.value * txtp2.value) / 100 +
      (txtn3.value * txtp3.value) / 100;

    var obj = {
      ramo: txt_asignatura.value,
      promedio: prom.toFixed(1),
      estado: prom >= 4 ? "Aprobado" : "Reprobado",
    };

    this.promedios.push(obj);
    this.cargaNotas();
    txt_asignatura.value = "";
  },

  cargaNotas: function () {
    var salida = document.getElementById("salida");

    var tabla = `    
        <table border="1" width="400">
            <tr>
                <th>Asignatura</th>
                <th>Promedio</th>
                <th>Estado</th>
            </tr>
    `;

    this.promedios.forEach((item) => {
      tabla += `
        <tr class="${item.promedio >= 4 ? "nota_azul" : "nota_roja"}">
          <td>${item.ramo}</td>
          <td>${item.promedio}</td>
          <td>${item.estado}</td>
        </tr>
      `;
    });

    tabla += "</table>";

    salida.innerHTML = tabla;
  },
};
