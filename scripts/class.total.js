let ac = 0
let precioTotal = 0

class Total {
    //Inicializacion de carrito de compras
    constructor(carritoDeCompras) {
        this.carrito = carritoDeCompras
    }
    obtenerSubtotal() {
        if (this.carrito.length > 0) { //Medimos si es superior a 0 el largo de la funcion
            for (let index = 0; index <= contador; index++) {
                //se multiplica la cantidad de productos por el precio
                ac = carrito[index].precio * carrito[index].cantidad
                precioTotal += ac
            }
            
            return precioTotal
        }
    }
}