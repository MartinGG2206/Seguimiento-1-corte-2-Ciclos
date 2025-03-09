let angulos = [];

for (let i = 1; i <= 3; i++) {
    let angulo;
    do {
        angulo = parseInt(prompt(`Ingrese el ángulo ${i}:`));
    } while (isNaN(angulo) || angulo <= 0);
    
    angulos.push(angulo);
}

let sumaAngulos = angulos.reduce((a, b) => a + b, 0);
let mensaje = sumaAngulos === 180 ? "Los ángulos forman un triángulo válido." : "Los ángulos no forman un triángulo válido.";

document.getElementById('mensaje').innerHTML = mensaje;
console.log(mensaje);