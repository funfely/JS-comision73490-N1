// Array de productos disponibles
const productos = [
  { nombre: "camisa", precio: 5000 },
  { nombre: "pantalón", precio: 8000 },
  { nombre: "zapatos", precio: 12000 }
];

// Array de productos elegidos por el usuario (carrito)
const carrito = [];

// Array para registrar solo los precios agregados (para cumplir el mínimo de 3 arrays)
const totales = [];

function mostrarProductos() {
  let lista = "Productos disponibles:\n";
  for (let i = 0; i < productos.length; i++) {
    lista += `${i + 1}. ${productos[i].nombre} - $${productos[i].precio}\n`;
  }
  alert(lista);
}

function buscarProducto(nombreProducto) {
  return productos.find(p => p.nombre === nombreProducto.toLowerCase());
}

function iniciarSimulador() {
  let seleccion = "";

  while (seleccion !== "salir") {
    mostrarProductos();
    seleccion = prompt("¿Qué producto querés agregar al carrito? (escribí el nombre o 'salir')");

    if (seleccion === null || seleccion.toLowerCase() === "salir") {
      break;
    }

    const producto = buscarProducto(seleccion);
    if (producto) {
      carrito.push(producto);
      totales.push(producto.precio);
      alert(`Agregaste ${producto.nombre} al carrito. Precio: $${producto.precio}`);
    } else {
      alert("Producto no encontrado. Intentá de nuevo.");
    }
  }

  mostrarResumen();
}

function mostrarResumen() {
  if (carrito.length === 0) {
    alert("No agregaste productos al carrito.");
    return;
  }

  let resumen = "Resumen de tu carrito:\n";
  let total = 0;

  for (let i = 0; i < carrito.length; i++) {
    resumen += `- ${carrito[i].nombre}: $${carrito[i].precio}\n`;
    total += carrito[i].precio;
  }

  resumen += `\nTotal a pagar: $${total}`;
  alert(resumen);
}

iniciarSimulador();

