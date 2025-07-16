// 1️⃣ Catálogo de productos
const productos = [
  { nombre: "camisa",   precio: 5000 },
  { nombre: "pantalón", precio: 8000 },
  { nombre: "zapatos",  precio: 12000 }
];

// 2️⃣ Carrito con detalle de cantidad y subtotal
const carrito = [];

// 3️⃣ Totales individuales (sirve para cumplir el mínimo de 3 arrays)
const totales = [];

function mostrarProductos() {
  let lista = "📋 Productos disponibles:\n";
  for (let i = 0; i < productos.length; i++) {
    lista += `${i + 1}. ${productos[i].nombre} - $${productos[i].precio}\n`;
  }
  alert(lista);
}

function buscarProducto(nombreProducto) {
  return productos.find(
    p => p.nombre === nombreProducto.toLowerCase()
  );
}

function iniciarSimulador() {
  let seleccion = "";

  while (seleccion !== "salir") {
    mostrarProductos();
    seleccion = prompt(
      "¿Qué producto querés agregar? (nombre o 'salir')"
    );

    if (seleccion === null || seleccion.toLowerCase() === "salir") {
      break;
    }

    const producto = buscarProducto(seleccion);
    if (!producto) {
      alert("❌ Producto no encontrado. Intentá de nuevo.");
      continue;
    }

    // ── Captura de cantidad ──
    const cantidadStr = prompt(
      `¿Cuántas unidades de ${producto.nombre} querés agregar?`
    );
    if (cantidadStr === null) continue; // canceló

    const cantidad = parseInt(cantidadStr);
    if (isNaN(cantidad) || cantidad <= 0) {
      alert("La cantidad debe ser un número positivo.");
      continue;
    }

    const subtotal = producto.precio * cantidad;

    // Guardamos en el carrito
    carrito.push({
      nombre:    producto.nombre,
      precio:    producto.precio,
      cantidad,  // shorthand
      subtotal
    });

    totales.push(subtotal);

    alert(
      `✅ Agregado: ${cantidad} x ${producto.nombre} = $${subtotal}`
    );
  }

  mostrarResumen();
}

function mostrarResumen() {
  if (carrito.length === 0) {
    alert("No agregaste productos al carrito.");
    return;
  }

  let resumen = "🛒 Resumen de tu carrito:\n";
  let totalGeneral = 0;

  for (let i = 0; i < carrito.length; i++) {
    const item = carrito[i];
    resumen += `• ${item.cantidad} x ${item.nombre} ($${item.precio} c/u) = $${item.subtotal}\n`;
    totalGeneral += item.subtotal;
  }

  resumen += `\n💰 Total a pagar: $${totalGeneral}`;
  alert(resumen);
}

// ── Arranque ──
iniciarSimulador();

