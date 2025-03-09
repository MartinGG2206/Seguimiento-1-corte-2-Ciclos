let pitido = prompt("¿La computadora emite un pitido al iniciarse? (S/N)").toUpperCase();
let discoGira = prompt("¿El disco duro gira? (S/N)").toUpperCase();

let mensaje;
if (pitido === "S" && discoGira === "S") {
    mensaje = "Póngase en contacto con el técnico de apoyo.";
} else if (pitido === "S" && discoGira === "N") {
    mensaje = "Verificar contactos de la unidad.";
} else if (pitido === "N" && discoGira === "N") {
    mensaje = "Traiga la computadora para repararla en la central.";
} else if (pitido === "N" && discoGira === "S") {
    mensaje = "Compruebe las conexiones de altavoces.";
} else {
    mensaje = "Entrada no válida. Por favor, responda con S o N.";
}

document.getElementById('mensaje').innerHTML = mensaje;
console.log(mensaje);
