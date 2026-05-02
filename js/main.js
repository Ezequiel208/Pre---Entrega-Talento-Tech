// ElectroTecno TalentoTech - main.js
// Autor: Ezequiel Paez - Talento Tech

let carrito = [];

// Abrir y cerrar el carrito
document.getElementById("carrito-btn").addEventListener("click", function() {
  document.getElementById("carrito-sidebar").classList.add("abierto");
});

document.getElementById("cerrar-carrito").addEventListener("click", function() {
  document.getElementById("carrito-sidebar").classList.remove("abierto");
});

// Agregar productos al carrito
document.querySelectorAll(".btn-agregar").forEach(function(boton) {
  boton.addEventListener("click", function() {
    let nombre = this.dataset.nombre;
    let precio = this.dataset.precio;

    carrito.push({ nombre: nombre, precio: precio });
    actualizarCarrito();

    alert(nombre + " agregado al carrito!");
  });
});

// Actualizar la lista del carrito
function actualizarCarrito() {
  let lista = document.getElementById("lista-carrito");
  let totalEl = document.getElementById("total-carrito");

  lista.innerHTML = "";

  let total = 0;

  carrito.forEach(function(item) {
    let li = document.createElement("li");
    li.textContent = item.nombre + " - $" + item.precio;
    lista.appendChild(li);
    total += parseInt(item.precio);
  });

  totalEl.textContent = "Total: $" + total;
}

// Año en el footer
document.getElementById("anio").textContent = new Date().getFullYear();