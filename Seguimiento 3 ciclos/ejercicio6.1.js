let genero;
do {
    genero = prompt("Ingrese su género (M para masculino o F para femenino):").toUpperCase();
} while (genero !== "M" && genero !== "F");

let edad;
do {
    edad = parseInt(prompt("Ingrese su edad:"));
} while (isNaN(edad) || edad <= 0);

const ayudaM = 40000;
const ayudaF = 100000;
const ayudaF2 = 120000;
const ayudaF3 = "No aplica";
let mensaje;

if (genero === "M") {
    mensaje = `Al ser usted Hombre, la alcaldía le proporcionará una ayuda económica de $${ayudaM}`;
} else if (edad >= 30 && edad <= 50) {
    mensaje = `Al ser usted Mujer entre 30 y 50 años, la alcaldía le proporcionará una ayuda económica de $${ayudaF}`;
} else if (edad >= 51) {
    mensaje = `Al ser usted Mujer con una edad mayor a 50 años, la alcaldía le proporcionará una ayuda económica de $${ayudaF2}`;
} else {
    mensaje = `Al ser usted Mujer menor de 30 años, la alcaldía no le proporcionará una ayuda económica: ${ayudaF3}`;
}

document.getElementById('mensaje').innerHTML = mensaje;
console.log(mensaje);