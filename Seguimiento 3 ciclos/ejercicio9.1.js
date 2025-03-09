let copias;
do {
    copias = parseInt(prompt("Ingrese el número de copias que desea imprimir:"));
} while (isNaN(copias) || copias <= 0);

let precioPorCopia;
if (copias < 500) {
    precioPorCopia = 120;
} else if (copias < 750) {
    precioPorCopia = 100;
} else if (copias < 1000) {
    precioPorCopia = 80;
} else {
    precioPorCopia = 50;
}

let precioTotal = copias * precioPorCopia;


document.getElementById('mensaje').innerHTML = `El precio por copia es $${precioPorCopia} y el precio total es $${precioTotal}`;
console.log(mensaje);