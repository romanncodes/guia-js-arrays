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
    <input id="txtn1" type="text" /><br/>
    % Nº1 <br />
    <input id="txtp1" type="text" /><br />

    Nota 2 <br />
    <input id="txtn2" type="text" /><br/>
    % Nº2 <br />
    <input id="txtp2" type="text" /><br />

    Nota 3 <br />
    <input id="txtn3" type="text" /><br/>
    % Nº3 <br />
    <input id="txtp3" type="text" /><br />

    <button>calular</button>

    <div id="salida"></div>


  `,

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
