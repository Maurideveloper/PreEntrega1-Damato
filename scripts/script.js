const productosEnCarrito = document.querySelector('span#productosEnCarrito')
const container = document.querySelector('div.productos')
const renovarCarrito = document.querySelector('button#renovarCarrito')
const inputSearch = document.querySelector('input#inputSearch')
const URL = 'scripts/chocolates.json'

function mostrarTotalProdsEnCarrito() {
  productosEnCarrito.textContent = carrito.length
}

renovarCarrito.addEventListener('click', ()=> {
  carrito.splice(0, carrito.length);
  localStorage.setItem('Carrito', JSON.stringify(carrito))
  mostrarTotalProdsEnCarrito()
})


function retornarCardHTML({ imagen, numero, nombre, precio } = producto ) {
  return `<div class="col">
            <div class="card">
              <img src="${imagen}" class="card-img-top" alt="...">
              <div class="card-body">
                <h5 class="card-title">${nombre}</h5>
                <p class="card-text">Precio del chocolate: ${precio}</p>
                <h6>Cantidad</h6>
                <input type="number" id="${numero}" class="cantidad" value="0" min="0" max="100" required pattern="[0-100]">
                <button id="${numero}" class="buttonComprar">🛒Comprar🛒</button>
              </div>
            </div>
          </div>`
}

function cargarProductos(array) {
  container.innerHTML = ""
  array.forEach((producto)=> container.innerHTML += retornarCardHTML(producto) )
  activarClickEnBotones()
}

function activarClickEnBotones() {
  const botones = document.querySelectorAll('button.buttonComprar')
  const cantidadDelProducto = document.querySelectorAll('input.cantidad')
  botones.forEach((boton) => {
    boton.addEventListener('click', () => {
      const cantidadSeleccionada = parseInt(boton.parentElement.querySelector('input.cantidad').value);
      if (cantidadSeleccionada > 0) {
        let producto = chocolates.find((chocolate) => chocolate.numero === parseInt(boton.id))
        cantidadDelProducto.forEach((cantidad) => {
          const objetoAModificar = chocolates.find((chocolate2) => chocolate2.numero === parseInt(cantidad.id));
          if (objetoAModificar) {
            objetoAModificar.cantidad = parseInt(cantidad.value); // Usar el valor del input para actualizar la cantidad
            objetoAModificar.subtotal = objetoAModificar.cantidad * objetoAModificar.precio
          }
        })
        Swal.fire({
          title: 'Desea realizar esta compra?',
          text: "Se añadira al carrito de compra!",
          icon: 'question',
          showCancelButton: true,
          confirmButtonColor: '#3085d6',
          cancelButtonColor: '#d33',
          confirmButtonText: 'Comprar!'
        }).then((result) => {
          if (result.isConfirmed) {
            carrito.push(producto)
            console.table(carrito)
            localStorage.setItem('Carrito', JSON.stringify(carrito))
            mostrarTotalProdsEnCarrito()
            Swal.fire(
              'Se realizo la compra!',
              'Ha sido ingresada al carrito de compras.',
              'success'
            )
          }
        })
        
        
      }
      else (
        Swal.fire({
          icon: 'error',
          title: 'Tiene 0 productos seleccionados',
          text: 'Por favor ingrese una cantidad!',
        })
      )
    })
  })
}

inputSearch.addEventListener('search', ()=> {
  localStorage.setItem("ultimaBusqueda", inputSearch.value)
  const resultado = chocolates.filter((chocolate)=> chocolate.nombre.toLowerCase().includes(inputSearch.value.toLowerCase()))
  cargarProductos(resultado)
})

async function obtenerChocolates() { // await
  try {
      const response = await fetch(URL)
      const data = await response.json()
      chocolates.push(...data)
      cargarProductos(chocolates)
  } catch (error) {
      console.error("Se ha producido un error:", error)
      container.innerHTML = retornarCardError()
  }
}



carrito.length > 0 && mostrarTotalProdsEnCarrito()
obtenerChocolates()
//chocolates.length > 0 ? cargarProductos(chocolates) : alert ('No tenemos productos cargados actualmente')


