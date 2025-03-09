
function calcularPrecioPorCopia(nCopias) {
    if (nCopias > 0 && nCopias <= 499) {
        return 120;
    } else if (nCopias >= 500 && nCopias <= 749) {
        return 100;
    } else if (nCopias >= 750 && nCopias <= 999) {
        return 80;
    } else if (nCopias >= 1000) {
        return 50;
    } else {
        return "Opción inválida";
    }
}


function calcularPrecioTotal(nCopias, precioPorCopia) {
    return nCopias * precioPorCopia;
}


function mostrarMensajeCopias(nCopias, precioPorCopia, precioTotal) {
    let mensaje;
    if (precioPorCopia === "Opción inválida") {
        mensaje = "El número de copias ingresado no es válido.";
    } else {
        mensaje = `El precio por copia es de $${precioPorCopia} y el precio total por ${nCopias} copias es de $${precioTotal}`;
    }
    console.log(mensaje);
    document.getElementById('mensaje').innerHTML = mensaje;
}


let nCopias = parseInt(prompt("Ingrese el número de copias que quiere sacar:"));

let precioPorCopia = calcularPrecioPorCopia(nCopias);
let precioTotal = precioPorCopia !== "Opción inválida" ? calcularPrecioTotal(nCopias, precioPorCopia) : "Opción inválida";


mostrarMensajeCopias(nCopias, precioPorCopia, precioTotal);
