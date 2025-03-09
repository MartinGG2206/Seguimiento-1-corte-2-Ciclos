
function esTrianguloValido(angulo1, angulo2, angulo3) {
    return (angulo1 + angulo2 + angulo3) === 180;
}

function mostrarMensajeTriangulo(valido) {
    let mensaje = valido ? "El triángulo es válido." : "El triángulo no es válido.";
    console.log(mensaje);
    document.getElementById('mensaje').innerHTML = mensaje;
}


let angulo1 = parseInt(prompt("Ingrese el primer ángulo del triángulo:"));
let angulo2 = parseInt(prompt("Ingrese el segundo ángulo del triángulo:"));
let angulo3 = parseInt(prompt("Ingrese el tercer ángulo del triángulo:"));


let valido = esTrianguloValido(angulo1, angulo2, angulo3);
mostrarMensajeTriangulo(valido);
