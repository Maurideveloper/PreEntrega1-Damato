function buscarChocolate (numChocolate) {
    //busca en el array chocolates el numero del objeto y si se encuentra dentro del array, es decir, compara chocolates.numero con el numChocolate ingresado.
    let verificacion = chocolates.find ((chocolates) => chocolates.numero === parseInt(numChocolate))
    return verificacion
}

function finalizarCompra() {
    //Se incova a la clase Total con el operador new
    const compra = new Total(carrito)
    console.log(`El costo total de su compra es de $ ${compra.obtenerSubtotal()}. Muchas gracias por tu compra!`)
    alert (`El costo total de su compra es de $ ${compra.obtenerSubtotal()}. Muchas gracias por tu compra!`)
}

function algoMas(){
    //se evalua si seguir comprando o no
    let respuesta2 = confirm ('¿Deseas llevar otro Chocolate? ')

    if (respuesta2 === true) {
        pedirChocolate ();
    }
    else {
        finalizarCompra()
    }
}

function pedirChocolate(){
    let numChocolate = prompt ('Ingresa el chocolate que deseas comprar (El numero)')
    //ingresa a la funcion buscarChocolate()
    let chocolateElegido = buscarChocolate (numChocolate)
    if (chocolateElegido !== undefined) {
        contador++
        carrito.push(chocolateElegido)

        //se modifica en el array carrito la cantidad de chocolate
        carrito[contador].cantidad = prompt ('Ingresa el chocolate que deseas comprar')

        alert('Usted eligio el ' + chocolateElegido.nombre + ' con la cantidad de ' + carrito[contador].cantidad + ' productos. Se agrego al CARRITO 🛒')
        algoMas()

        } 
  
    else {
        alert ('⚠ ERROR EN EL CODIGO INGRESADO. Refresca para comenzar de nuevo ⚠')
    }
  }