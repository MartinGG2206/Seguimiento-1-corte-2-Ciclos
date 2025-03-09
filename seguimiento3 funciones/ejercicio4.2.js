function calcularPorcentajeYCalificacion(fisica, quimica, biologia, matematicas, informatica) {
    let sumaCalificaciones = fisica + quimica + biologia + matematicas + informatica;
    let porcentaje = (sumaCalificaciones / 50) * 100;
    let calificacion;

    if (porcentaje < 60) {
        calificacion = "Mala";
    } else if (porcentaje <= 80) {
        calificacion = "Buena";
    } else {
        calificacion = "Excelente";
    }

    return `Tu porcentaje es ${porcentaje.toFixed(2)}% y tu calificación es ${calificacion}.`;
}

function menuCalificaciones() {
    let continuar = true;
    while (continuar) {
        let fisica = parseFloat(prompt("Ingrese su calificación en Física (0-10):"));
        let quimica = parseFloat(prompt("Ingrese su calificación en Química (0-10):"));
        let biologia = parseFloat(prompt("Ingrese su calificación en Biología (0-10):"));
        let matematicas = parseFloat(prompt("Ingrese su calificación en Matemáticas (0-10):"));
        let informatica = parseFloat(prompt("Ingrese su calificación en Informática (0-10):"));
        
        alert(calcularPorcentajeYCalificacion(fisica, quimica, biologia, matematicas, informatica));
        
        let respuesta = prompt("¿Desea calcular otra calificación? (si/no)").toLowerCase();
        if (respuesta !== "si") {
            continuar = false;
        }
    }
}


menuCalificaciones();