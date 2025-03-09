// Función para calcular la ayuda económica
function calcularAyuda(genero, edad) {
    const ayudaM = 40000;
    const ayudaF1 = 100000;
    const ayudaF2 = 120000;
    const ayudaF3 = "No aplica";
    
    if (genero === "M") {
        return ayudaM;
    } else if (genero === "F") {
        if (edad >= 51) {
            return ayudaF2;
        } else if (edad >= 30 && edad <= 50) {
            return ayudaF1;
        } else {
            return ayudaF3;
        }
    }
    return "Entrada inválida";
}


function mostrarMensaje(genero, edad, ayuda) {
    let mensaje;
    if (ayuda === "No aplica") {
        mensaje = `Al ser usted Mujer menor de 30 años, la alcaldía no le proporcionará una ayuda económica.`;
    } else {
        mensaje = `El valor de ayuda mensual es: $${ayuda}`;
    }
    console.log(mensaje);
    document.getElementById('mensaje').innerHTML = mensaje;
}

let genero = prompt("Ingrese su género (M para masculino o F para femenino):");
let edad = parseInt(prompt("Ingrese su edad:"));


let ayuda = calcularAyuda(genero, edad);
mostrarMensaje(genero, edad, ayuda);