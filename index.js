const productos = ["camisa", "pantalón", "zapatos"];
const precios = [5000, 8000, 12000];

function mostrarProductos() {
  let lista = "Productos disponibles:\n";
  for (let i = 0; i < productos.length; i++) {
    lista += `${i + 1}. ${productos[i]} - $${precios[i]}\n`;
  }
  alert(lista);
}

function obtenerPrecio(producto) {
  for (let i = 0; i < productos.length; i++) {
    if (producto.toLowerCase() === productos[i]) {
      return precios[i];
    }
  }
  return null;
}

function iniciarSimulador() {
  let seleccion = "";

  while (seleccion !== "salir") {
    mostrarProductos();
    seleccion = prompt("¿Qué producto querés comprar? (escribí el nombre o 'salir')");

    if (seleccion === null || seleccion.toLowerCase() === "salir") {
      alert("Gracias por visitar nuestra tienda.");
      break;
    }

    const precio = obtenerPrecio(seleccion);
    if (precio !== null) {
      alert(`El precio de ${seleccion} es $${precio}`);
    } else {
      alert("Producto no encontrado. Intentá de nuevo.");
    }
  }
}

iniciarSimulador();
