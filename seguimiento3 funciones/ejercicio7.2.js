
function calcularMensualidad(opcion) {
    const precios = {
        1: 18000,
        2: 35000,
        3: 86000
    };
    return precios[opcion] || "Opción inválida";
}


function mostrarMensaje(mensualidad) {
    let mensaje;
    if (mensualidad === "Opción inválida") {
        mensaje = "La opción ingresada no es válida. Por favor, seleccione 1, 2 o 3.";
    } else {
        mensaje = `El valor de la mensualidad es de $${mensualidad}`;
    }
    console.log(mensaje);
    document.getElementById('mensaje').innerHTML = mensaje;
}


let opcion = parseInt(prompt("Bienvenido al gimnasio, ingrese el número de la mensualidad que desea pagar (1 para 15 días, 2 para 30 días o 3 para 3 meses):"));


let costo = calcularMensualidad(opcion);
mostrarMensaje(costo);
