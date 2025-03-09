let tamano;
do {
    tamano = prompt("Ingrese el tamaño del sándwich (pequeño o grande):").toLowerCase();
} while (tamano !== "pequeño" && tamano !== "grande");

let precioBase = tamano === "pequeño" ? 6000 : 12000;

let tocineta = confirm("¿Desea agregar tocineta? (Costo: $3000)");
let jalapeno = confirm("¿Desea agregar jalapeño? (Gratis)");
let pavo = confirm("¿Desea agregar pavo? (Costo: $3000)");
let queso = confirm("¿Desea agregar queso? (Costo: $2500)");

let costoTotal = precioBase;
if (tocineta) costoTotal += 3000;
if (pavo) costoTotal += 3000;
if (queso) costoTotal += 2500;

let mensaje = "Tamaño del sándwich: " + tamano + "\nPrecio base: $" + precioBase + "\n";
mensaje += tocineta ? "Tocineta: $3000\n" : "";
mensaje += jalapeno ? "Jalapeño: Gratis\n" : "";
mensaje += pavo ? "Pavo: $3000\n" : "";
mensaje += queso ? "Queso: $2500\n" : "";
mensaje += "Costo total: $" + costoTotal;

document.getElementById('mensaje').innerHTML = mensaje;
console.log(mensaje);