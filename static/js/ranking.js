
var lastDir = {};
function sortTable(n, dir) {
  var table, rows, switching, i, x, y, shouldSwitch;
  table = document.getElementById("ranking");
  switching = true;

  // if n is -1, set it to last column (total)
  if (n == -1){
    n = table.rows[0].cells.length - 1;
  }

  dir = lastDir[n] ? (lastDir[n] === "asc" ? "desc" : "asc") : dir;
  lastDir[n] = dir;

  
  // Set the sorting direction to ascending
  /* Make a loop that will continue until
  no switching has been done: */
  while (switching) {
    // Start by saying: no switching is done:
    switching = false;
    rows = table.rows;
    /* Loop through all table rows (except the
    first, which contains table headers): */
    for (i = 1; i < (rows.length - 1); i++) {
      // Start by saying there should be no switching:
      shouldSwitch = false;
      /* Get the two elements you want to compare,
      one from current row and one from the next: */
      x = rows[i].getElementsByTagName("TD")[n];
      y = rows[i + 1].getElementsByTagName("TD")[n];
      if (n != 0){
        x = parseInt(x.textContent.trim());
        y = parseInt(y.textContent.trim());
      }
      else{
        x = x.innerHTML.toLowerCase()
        y = y.innerHTML.toLowerCase()

      }
      /* Check if the two rows should switch place,
      based on the direction, asc or desc: */
      if (dir == "asc") {
        if (x > y) {
          // If so, mark as a switch and break the loop:
          shouldSwitch = true;
          break;
        }
      } else if (dir == "desc") {
        if (x < y) {
          // If so, mark as a switch and break the loop:
          shouldSwitch = true;
          break;
        }
      }
    }
    if (shouldSwitch) {
      /* If a switch has been marked, make the switch
      and mark that a switch has been done: */
      rows[i].parentNode.insertBefore(rows[i + 1], rows[i]);
      switching = true;
    }
  }
  alternarColores()
}




function filtrarCategoria() {
    const tablaTiradores = document.getElementById("tabla-tiradores");
    const tablaRanking = document.getElementById("ranking");

    const categoria = document.getElementById("selector-categoria").selectedIndex + 1;


    const categorias = new Map();

    for (let i = 1; i < tablaTiradores.rows.length; i++) {
        const nombre = tablaTiradores.rows[i].cells[0].textContent.trim();
        const valor = parseInt(tablaTiradores.rows[i].cells[1].textContent.trim());


        categorias.set(nombre, valor);

        
    }

    for (let i = 1; i < tablaRanking.rows.length; i++) {
        const nombre = tablaRanking.rows[i].cells[0].textContent.trim();
        const valor = categorias.get(nombre);
        
        tablaRanking.rows[i].style.display =
            valor !== undefined && valor <= categoria ? "" : "none";
    }
    alternarColores()
}

function alternarColores() {
    const filas = document.querySelectorAll("table.sortable tbody tr");
    let contador = 0;

    filas.forEach(fila => {
        if (fila.style.display !== "none") {
            fila.style.backgroundColor =
                contador % 2 === 0 ? "#ddd" : "#fff";
            contador++;
        }
    });
}

document.addEventListener("DOMContentLoaded", function() {
    filtrarCategoria();
    sortTable(-1, 'desc');
});