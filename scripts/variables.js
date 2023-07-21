//Contador para seleccionar el index del array carrito. Puede servir para otras funcionalidades en el futuro
let contador = -1
let contadorDeCards = 0

//Carrito de compras vacio, donde van a ingresar los valores de chocolates.
const carrito = JSON.parse(localStorage.getItem('Carrito'))  || []

//Productos a comprar
const chocolates = [
    {imagen: '../images/chocolate1.png', numero: 1, nombre: 'Chocolate negro', precio: 3500, cantidad: 0, subtotal: 0},
    {imagen: '../images/chocolate1.png', numero: 2, nombre: 'Chocolate blanco', precio: 2200, cantidad: 0, subtotal: 0},
    {imagen: '../images/chocolate1.png', numero: 3, nombre: 'Chocolate con nuez', precio: 2000, cantidad: 0, subtotal: 0},
    {imagen: '../images/chocolate1.png', numero: 4, nombre: 'Chocolate oreo', precio: 4000, cantidad: 0, subtotal: 0},
    {imagen: '../images/chocolate1.png', numero: 5, nombre: 'Chocolate kitkat', precio: 1000, cantidad: 0, subtotal: 0},
    {imagen: '../images/chocolate1.png', numero: 6, nombre: 'Chocolate surtido', precio: 1500, cantidad: 0, subtotal: 0}
]

const carritoVacio = []