
function verificarDefecto(modelo) {
    let modelosDefectuosos = [119, 179, 189, 190, 191, 192, 193, 194, 195, 221, 780];
    return modelosDefectuosos.includes(modelo) ? "El automóvil está defectuoso, llevar a garantía" : "Su automóvil no está defectuoso";
}


function mostrarMensajeAutomovil(mensaje) {
    console.log(mensaje);
    document.getElementById('mensaje').innerHTML = mensaje;
}


let modeloAutomovil = parseInt(prompt("Ingrese su modelo de automóvil"));


let mensajeAutomovil = verificarDefecto(modeloAutomovil);
mostrarMensajeAutomovil(mensajeAutomovil);