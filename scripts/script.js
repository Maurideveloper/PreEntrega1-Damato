alert ("Si la cantidad de productos comprados es superior a 6 podes llevarte un producto con un valor igual o menor a 3000 pesos gratis! En caso de ser superior se le hace un descuento del 15% en el producto");
alert ("Si el precio del total de productos comprados supera los 20000 pesos te llevas un descuento del 10%!!!");


// se pide la cantidad de productos
let cantProductos = parseInt(prompt("Ingrese la cantidad de productos que desea comprar"));
let precioTotal = 0;
let cantProductosGratis = 0;
let valorProducto = 0;
let eleccion = true;

function consultarProductos () {

    // Se elige y se suma el valor de los productos comprados
    for (let i = 1; i <= cantProductos; i++) {
        productoElegido (i);
        precioTotal = precioTotal + valorProducto;
        alert ("El precio del producto numero " + i + " que eligio es de " + valorProducto + " y el valor total de su compra es de " + precioTotal + ". Le faltan " + (cantProductos-i) + " productos");
    }

    console.log("El precio total de la compra actualmente es de " + precioTotal);

    // se divide por 6 para saber cuantas veces se puede pedir un producto gratis y se redondea para abajo para los casos posteriores
    cantProductosGratis=Math.floor(cantProductos/6);



    if (cantProductos > 6) {
        //esto es para cada valor con resto 0 siendo multiplo de 6 se le cuente ese producto gratis o no, en caso de tener resto 0 se le descontara un producto ya que no supera las 6, es igual a 6. 
            if (cantProductos%6==0){
                productosGratis (cantProductosGratis-1);
            }
        
            else {
                productosGratis (cantProductosGratis);
            }
    }

    //se verifica si el total supera los 20000 pesos y se aplica el descuento
    if (precioTotal > 20000) {
        alert ("El total de su compra supera los 20000 pesos! Se le aplicara un descuento del 10% en su compra")
        precioTotal = precioTotal * 0.90;
        console.log("Se aplica le descuento del 10%, el precio total de la compra actualmente es de " + precioTotal);
    }
    
    alert ("El precio total de su compra final es de " + precioTotal)
    console.log("El precio total de la compra final es de " + precioTotal);

}

function productosGratis (x) {
    //entran como x la cantidad de productos gratis a reclamar
    alert ("Puede reclamar " + x + " productos de forma gratuita!")
    console.log("El reclamo es de " + x + " productos de forma gratuita");
    for (let i=1; i <= x; i++) {
        
        do {

            productoElegido (i);

            //entra el producto en caso de superar los 3000
            if (valorProducto > 3000) {
                let elegir = " ";
                elegir = prompt("Su producto supera los 3000 pesos, se le agregara al total pero con un 15% de descuento en el producto! Desea adquirirlo de todas formas? Escribe 'Si' (en caso de aceptar) o escribe 'No' (en caso de querer pedir otro producto)");
                
                //si dice Si se le agrega el valor con el descuento del 15% al total de la compra
                if (elegir === "Si") {
                    precioTotal = (valorProducto * 0.85) + precioTotal;
                    eleccion=true;
                    console.log("Eligio la respuesta " + elegir);
                    console.log("La eleccion fue " + eleccion);
                    console.log("El precio total de la compra actualmente es de " + precioTotal);
                }

                //si dice No se vuelve a repetir el proceso
                else if (elegir === "No") {
                    eleccion=false;
                    console.log("Eligio la respuesta " + elegir);
                    console.log("La eleccion fue " + eleccion);
                }
                else {
                    alert ("No eligio de forma correcta! Vuelva a seleccionar el valor del producto")
                    console.log("No eleigio de forma correcta");
                    eleccion=false;
                    console.log("La eleccion fue " + eleccion);
                }
            }
            
        } while (!eleccion);
    }
}

function productoElegido (i) {

    //bucle para elegir si o si un producto
    do {
        eleccion = true;
        let elegirProducto = prompt("Ingrese el numero del producto a elegir (1, 2, 3 ,4 ,5 o 6)");
        
        if (elegirProducto <= 6 && elegirProducto >= 1) {
            alert ("Eligio el producto " + elegirProducto);

            switch (elegirProducto) {
                case "1": 
                valorProducto = 3500;
                break;
    
                case "2": 
                valorProducto = 2200;
                break;
    
                case "3": 
                valorProducto = 2000;
                break;
    
                case "4": 
                valorProducto = 4000;
                break;
    
                case "5": 
                valorProducto = 1000;
                break;
    
                case "6": 
                valorProducto = 1500;
                break;
            }

            console.log("El precio del producto a comprar numero " + i + " es de " + valorProducto + " pesos");
        }

        else {
            alert ("No existe el producto " + elegirProducto);
            eleccion = false;
        }

        //bucle para elegir si o si un producto

        }while (eleccion !== true);
}

consultarProductos ();