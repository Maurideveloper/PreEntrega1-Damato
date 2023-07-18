/*let boton1 = document.getElementById("botonCompra1")
let boton2 = document.getElementById("botonCompra2")
let boton3 = document.getElementById("botonCompra3")
let boton4 = document.getElementById("botonCompra4")
let boton5 = document.getElementById("botonCompra5")
let boton6 = document.getElementById("botonCompra6")
let finalizar = document.getElementById("finalizarCompra")

// Obtenemos una referencia a los elementos
let input1 = document.getElementById("valor1");
let btnDecrementar1 = document.getElementById("decrementar1");
let btnIncrementar1 = document.getElementById("incrementar1");

let input2 = document.getElementById("valor2");
let btnDecrementar2 = document.getElementById("decrementar2");
let btnIncrementar2 = document.getElementById("incrementar2");

let input3 = document.getElementById("valor3");
let btnDecrementar3 = document.getElementById("decrementar3");
let btnIncrementar3 = document.getElementById("incrementar3");

let input4 = document.getElementById("valor4");
let btnDecrementar4 = document.getElementById("decrementar4");
let btnIncrementar4 = document.getElementById("incrementar4");

let input5 = document.getElementById("valor5");
let btnDecrementar5 = document.getElementById("decrementar5");
let btnIncrementar5 = document.getElementById("incrementar5");

let input6 = document.getElementById("valor6");
let btnDecrementar6 = document.getElementById("decrementar6");
let btnIncrementar6 = document.getElementById("incrementar6");


  
boton1.addEventListener("click", pedirChocolate)
boton2.addEventListener("click", respuestaClick) 
boton3.addEventListener("click", respuestaClick) 
boton4.addEventListener("click", respuestaClick) 
boton5.addEventListener("click", respuestaClick) 
boton6.addEventListener("click", respuestaClick)
finalizar.addEventListener("click", respuestaClick)  


// Función de manejo de evento para el botón de decrementar
btnDecrementar1.addEventListener("click", function() {
  var valorActual = parseInt(input1.value);
  if (valorActual > 0) {
    input1.value = valorActual - 1;
  }
});

// Función de manejo de evento para el botón de incrementar
btnIncrementar1.addEventListener("click", function() {
  var valorActual = parseInt(input1.value);
  if (valorActual < 20) {
    input1.value = valorActual + 1;
  }
});

// 2 

btnDecrementar2.addEventListener("click", function() {
    var valorActual = parseInt(input2.value);
    if (valorActual > 0) {
      input2.value = valorActual - 1;
    }
  });
  
  // Función de manejo de evento para el botón de incrementar
  btnIncrementar2.addEventListener("click", function() {
    var valorActual = parseInt(input2.value);
    if (valorActual < 20) {
      input2.value = valorActual + 1;
    }
  });

  //3

  btnDecrementar3.addEventListener("click", function() {
    var valorActual = parseInt(input3.value);
    if (valorActual > 0) {
      input3.value = valorActual - 1;
    }
  });
  
  // Función de manejo de evento para el botón de incrementar
  btnIncrementar3.addEventListener("click", function() {
    var valorActual = parseInt(input3.value);
    if (valorActual < 20) {
      input3.value = valorActual + 1;
    }
  });

  //4

  btnDecrementar4.addEventListener("click", function() {
    var valorActual = parseInt(input4.value);
    if (valorActual > 0) {
      input4.value = valorActual - 1;
    }
  });
  
  // Función de manejo de evento para el botón de incrementar
  btnIncrementar4.addEventListener("click", function() {
    var valorActual = parseInt(input4.value);
    if (valorActual < 20) {
      input4.value = valorActual + 1;
    }
  });

  //5

  btnDecrementar5.addEventListener("click", function() {
    var valorActual = parseInt(input5.value);
    if (valorActual > 0) {
      input5.value = valorActual - 1;
    }
  });
  
  // Función de manejo de evento para el botón de incrementar
  btnIncrementar5.addEventListener("click", function() {
    var valorActual = parseInt(input5.value);
    if (valorActual < 20) {
      input5.value = valorActual + 1;
    }
  });

  //6

  btnDecrementar6.addEventListener("click", function() {
    var valorActual = parseInt(input6.value);
    if (valorActual > 0) {
      input6.value = valorActual - 1;
    }
  });
  
  // Función de manejo de evento para el botón de incrementar
  btnIncrementar6.addEventListener("click", function() {
    var valorActual = parseInt(input6.value);
    if (valorActual < 20) {
      input6.value = valorActual + 1;
    }
  });
  */
  
  
  

const container = document.querySelector('div.productos')

function retornarCardHTML({ imagen, numero, nombre, precio } = producto ) {
  return `<div class="col">
            <div class="card">
              <img src="${imagen}" class="card-img-top" alt="...">
              <div class="card-body">
                <h5 class="card-title">${nombre}</h5>
                <p class="card-text">Precio del chocolate: ${precio}</p>
                <h6>Cantidad</h6>
                <input type="number" id="${numero}" value="0" min="0" max="100" required pattern="[0-100]">
                <button id="${numero}">🛒Comprar🛒</button>
              </div>
            </div>
          </div>`
}

function cargarProductos(array) {
  container.innerHTML = ""
  array.forEach((producto)=> container.innerHTML += retornarCardHTML(producto) )
}

chocolates.length > 0 ? cargarProductos(chocolates) : alert ('No hay carrito')