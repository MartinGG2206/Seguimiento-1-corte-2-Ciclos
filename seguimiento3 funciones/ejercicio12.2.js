function claroSelected(internationlaMinutesUsed) {
    const fixValue = 30000;
    const internationalMinute = 100;
    const data = 18000;

    const result = fixValue + data + (internationalMinute * internationlaMinutesUsed);

    document.getElementById('mensaje').innerHTML =(`El valor de su plan de telefonia es de: ${result}`);
}

function tigoSelected(internationlaMinutesUsed) {
    const fixValue = 45000;
    const internationalMinute = 200;
    const data = 12000;

    const result = fixValue + data + (internationalMinute * internationlaMinutesUsed);

    document.getElementById('mensaje').innerHTML =(`El valor de su plan de telefonia es de: ${result}`);
}

function movistarSelected(internationlaMinutesUsed) {
    const fixValue = 40000;
    const internationalMinute = 250;
    const data = 8000;

    const result = fixValue + data + (internationalMinute * internationlaMinutesUsed);

    document.getElementById('mensaje').innerHTML = (`El valor de su plan de telefonia es de: ${result}`);
}

function selectOperator() {
    let flag = true;
    
    do {
        let operatorName = prompt("Ingrese el nombre del operador");
        let minutesUsed = parseInt(prompt("Cuantos minutos internacionales ha usado?:"));

        switch (operatorName) {
            case 'Claro':
                claroSelected(minutesUsed);
                flag = false;
                break;
            case 'Movistar':
                movistarSelected(minutesUsed);
                flag = false;
                break;
            case 'Tigo':
                tigoSelected(minutesUsed);
                flag = false;
                break;
            default:
                document.getElementById('mensaje').innerHTML = `Operador desconocido, ingrese el nombre de nuevo`;
        }
    } while (flag);
}

selectOperator();
