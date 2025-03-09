let duracion;
do {
    duracion = parseInt(prompt("Ingrese la duración de la membresía en días (15, 30, o 90):"));
} while (![15, 30, 90].includes(duracion));

let costo;
switch (duracion) {
    case 15:
        costo = 18000;
        break;
    case 30:
        costo = 35000;
        break;
    case 90:
        costo = 86000;
        break;
}

let mensaje = `El costo de la membresía por ${duracion} días es de $${costo}`;
document.getElementById('mensaje').innerHTML = mensaje;
console.log(mensaje);