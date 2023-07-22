const tableBody = document.querySelector('tbody')
const sectionProductos = document.querySelector('section')
const total = document.querySelector('th#resultado')

function finalizarCompra() {
  const shopping = new Compra(carrito)
  console.log(shopping)
  total.innerHTML = `${shopping.obtenerSubtotal()}`
}

function listarProductosEnCarritoHTML(chocolate) {
    return `<tr>
                <td>${chocolate.imagen}</td>
                <td>${chocolate.nombre}</td>
                <td>$ ${chocolate.precio.toLocaleString()}</td>
                <td>${chocolate.cantidad.toLocaleString()}</td>
                <td>${chocolate.subtotal}</td>
                <td> <button class="eliminarProducto">❌</button></td>
            </tr>`
}

function mostrarMsgCarritoVacio() {
    return `<div class="card-error">
                <h3>El carrito está vacío</h3>
                <h4>🛒</h4>
            </div>`
}

function armarCarrito() {
    console.table(carrito)
    tableBody.innerHTML = ''
    carrito.length > 0 ? carrito.forEach((chocolate)=> tableBody.innerHTML += listarProductosEnCarritoHTML(chocolate) )
                              : sectionProductos.innerHTML = mostrarMsgCarritoVacio()
                              
}

function activarClickEnBotones2() {
  let xCarrito = document.querySelectorAll('button.eliminarProducto');
  xCarrito.forEach((botonX) => {
    botonX.addEventListener('click', () => {
      Swal.fire({
        title: 'Cuidado!',
        text: "Usted quiere quitar el producto del carrito?",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Si borrar!'
      }).then((result) => {
        if (result.isConfirmed) {
          Swal.fire(
            'Eliminado',
            'El producto se borro del carrito',
            'success'
          )
          let indiceProducto = Array.from(xCarrito).indexOf(botonX);
        
          if (indiceProducto !== -1) {
            // Eliminar el producto del carrito usando el índice
            carrito.splice(indiceProducto, 1);
            localStorage.setItem('Carrito', JSON.stringify(carrito))
              
      
            // Volver a armar el carrito para reflejar los cambios en la tabla
            armarCarrito();
            finalizarCompra()
            activarClickEnBotones2()
          } 
        }
      })
      // Obtener el índice del producto a eliminar según el índice del botón
      
    });
  });
}

armarCarrito()
finalizarCompra()
activarClickEnBotones2()
