function encontrarNumeroMayor(num1, num2, num3) {
    let mayor;
    
    if (num1 >= num2 && num1 >= num3) {
        mayor = num1;
    } else if (num2 >= num1 && num2 >= num3) {
        mayor = num2;
    } else {
        mayor = num3;
    }
    
    return `El número mayor es: ${mayor}`;
}

function menuMayorNumero() {
    let continuar = true;
    while (continuar) {
        let num1 = parseFloat(prompt("Ingrese el primer número:"));
        let num2 = parseFloat(prompt("Ingrese el segundo número:"));
        let num3 = parseFloat(prompt("Ingrese el tercer número:"));
        
        alert(encontrarNumeroMayor(num1, num2, num3));
        
        let respuesta = prompt("¿Desea ingresar otros números? (si/no)").toLowerCase();
        if (respuesta !== "si") {
            continuar = false;
        }
    }
}


menuMayorNumero();
