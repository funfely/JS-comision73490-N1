const productos = [
  { nombre: "camisa", precio: 5000 },
  { nombre: "pantalón", precio: 8000 },
  { nombre: "zapatos", precio: 12000 }
];

const carrito = [];
const totales = [];

function mostrarProductos() {
  let lista = "📋 Productos disponibles:\n";
  for (let i = 0; i < productos.length; i++) {
    lista += `${i + 1}. ${productos[i].nombre} - $${productos[i].precio}\n`;
  }
  alert(lista);
}

function buscarProducto(nombreProducto) {
  return productos.find(p => p.nombre === nombreProducto.toLowerCase());
}

function buscarEnCarrito(nombreProducto) {
  return carrito.find(p => p.nombre === nombreProducto.toLowerCase());
}

function iniciarSimulador() {
  alert("🛍️ ¡Bienvenido a la tienda virtual!");

  let seguirComprando = true;

  while (seguirComprando) {
    mostrarProductos();

    const seleccion = prompt("¿Qué producto querés agregar? (escribí el nombre)");
    if (seleccion === null) break;

    const producto = buscarProducto(seleccion);
    if (!producto) {
      alert("❌ Producto no encontrado. Intentá de nuevo.");
      continue;
    }

    const cantidadStr = prompt(`¿Cuántas unidades de ${producto.nombre} querés?`);
    if (cantidadStr === null) continue;

    const cantidad = parseInt(cantidadStr);
    if (isNaN(cantidad) || cantidad <= 0) {
      alert("⚠️ La cantidad debe ser un número positivo.");
      continue;
    }

    const subtotal = producto.precio * cantidad;
    totales.push(subtotal);

    const itemExistente = buscarEnCarrito(producto.nombre);

    if (itemExistente) {
      itemExistente.cantidad += cantidad;
      itemExistente.subtotal += subtotal;
      alert(`🔁 Se actualizó ${producto.nombre}: total ahora ${itemExistente.cantidad} unidades.`);
    } else {
      carrito.push({
        nombre: producto.nombre,
        precio: producto.precio,
        cantidad,
        subtotal
      });
      alert(`✅ Agregado: ${cantidad} x ${producto.nombre} = $${subtotal}`);
    }

    seguirComprando = confirm("¿Querés agregar otro producto?");
  }

  mostrarResumen();
}

function mostrarResumen() {
  if (carrito.length === 0) {
    alert("No agregaste productos al carrito.");
    return;
  }

  let resumen = "🛒 Resumen de tu carrito:\n";
  let totalGeneral = 0;

  for (let i = 0; i < carrito.length; i++) {
    const item = carrito[i];
    resumen += `• ${item.cantidad} x ${item.nombre} ($${item.precio} c/u) = $${item.subtotal}\n`;
    totalGeneral += item.subtotal;
  }

  resumen += `\n💰 Total a pagar: $${totalGeneral}`;
  alert(resumen);
}

iniciarSimulador();

