//Contador para seleccionar el index del array carrito. Puede servir para otras funcionalidades en el futuro
let contador = -1
let contadorDeCards = 0

//Carrito de compras vacio, donde van a ingresar los valores de chocolates.
const carrito = JSON.parse(localStorage.getItem('Carrito'))  || []

//Productos a comprar
const chocolates = []

const carritoVacio = []