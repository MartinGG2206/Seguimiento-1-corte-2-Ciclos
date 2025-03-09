
function diagnosticarComputadora(emitePitido, discoGira) {
    if (emitePitido === "Si" && discoGira === "Si") {
        return "Póngase en contacto con el técnico de apoyo";
    } else if (emitePitido === "Si" && discoGira === "No") {
        return "Verificar contactos de la unidad";
    } else if (emitePitido === "No" && discoGira === "No") {
        return "Traiga la computadora para repararla en la central";
    } else if (emitePitido === "No" && discoGira === "Si") {
        return "Compruebe las conexiones de altavoces";
    } else {
        return "Entrada no válida. Por favor, responda con 'Si' o 'No'";
    }
}

function mostrarMensajeDiagnostico(mensaje) {
    console.log(mensaje);
    document.getElementById('mensaje').innerHTML = mensaje;
}


let diagnosticarComputadora1 = prompt("¿La computadora emite pitidos (Si o No) ?");
let diagnosticarComputadora2 = prompt("¿El disco gira (Si o No) ?");


let mensajeDiagnostico = diagnosticarComputadora(diagnosticarComputadora1, diagnosticarComputadora2);
mostrarMensajeDiagnostico(mensajeDiagnostico);
