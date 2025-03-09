
let materias = ["Física", "Química", "Biología", "Matemáticas", "Informática"];
let sumaNotas = 0;

for (let i = 0; i < materias.length; i++) {
    let nota;
    do {
        nota = parseFloat(prompt(`Ingrese la nota de ${materias[i]} (0-10):`));
    } while (isNaN(nota) || nota < 0 || nota > 10);
    
    sumaNotas += nota;
}

let porcentaje = (sumaNotas / 50) * 100;
let calificacion;

if (porcentaje > 80) {
    calificacion = "Excelente";
} else if (porcentaje >= 60) {
    calificacion = "Buena";
} else {
    calificacion = "Mala";
}

console.log(`Tu porcentaje es ${porcentaje}% y tu calificación es ${calificacion}`);
document.getElementById('mensaje').innerHTML = `Tu porcentaje es ${porcentaje}% y tu calificación es ${calificacion}`;
