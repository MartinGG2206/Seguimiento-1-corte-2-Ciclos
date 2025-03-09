let operador;
do {
    operador = prompt("Ingrese su operador (Claro, Tigo o Movistar):").toLowerCase();
} while (operador !== "claro" && operador !== "tigo" && operador !== "movistar");

let minutos;
do {
    minutos = parseInt(prompt("Ingrese la cantidad de minutos internacionales consumidos:"));
} while (isNaN(minutos) || minutos < 0);

let cargoFijo = 0, valorMinuto = 0, valorPaquete = 0;
if (operador === "tigo") {
    cargoFijo = 45000;
    valorMinuto = 200;
    valorPaquete = 12000;
} else if (operador === "claro") {
    cargoFijo = 30000;
    valorMinuto = 100;
    valorPaquete = 18000;
} else if (operador === "movistar") {
    cargoFijo = 40000;
    valorMinuto = 250;
    valorPaquete = 8000;
}

let costoTotal = cargoFijo + (minutos * valorMinuto) + valorPaquete;
let mensaje = "\nCosto total: $" + costoTotal;

document.getElementById('mensaje').innerHTML = mensaje;
console.log(mensaje);
