function esParOImpar(numero) {
    
    if (numero % 2 === 0) {
        alert ("El número " + numero + " es par.");
    } else {
        alert ("El número " + numero + " es impar.");
    }
}
let numero = parseInt(prompt("Ingrese un numero"))
document.getElementById('mensaje').innerHTML = `El numero es ${esParOImpar(numero)}`