function calcularCostoAlquiler(tipoLavadora, cantidad, horas) {
    let costoPorHora;
    
    if (tipoLavadora === 1) {
        costoPorHora = 4000;
    } else if (tipoLavadora === 2) {
        costoPorHora = 3000;
    } else {
        return "Tipo de lavadora no válido.";
    }
    
    let costoBase = costoPorHora * cantidad * horas;
    
    if (cantidad > 3) {
        costoBase *= 0.97;
    }
    
    return `Costo total por alquilar ${cantidad} lavadoras tipo ${tipoLavadora} por ${horas} horas: $${costoBase.toFixed(2)}`;
}

function menuAlquiler() {
    let continuar = true;
    while (continuar) {
        let tipoLavadora = parseInt(prompt("Ingrese el tipo de lavadora (1 para grande, 2 para pequeña):"));
        let cantidad = parseInt(prompt("Ingrese la cantidad de lavadoras a alquilar:"));
        let horas = parseInt(prompt("Ingrese la cantidad de horas de alquiler:"));
        
        alert(calcularCostoAlquiler(tipoLavadora, cantidad, horas));
        
        let respuesta = prompt("¿Desea realizar otro alquiler? (si/no)").toLowerCase();
        if (respuesta !== "si") {
            continuar = false;
        }
    }
}


menuAlquiler();