function calcularSalario(horas) {
    let tarifa = horas <= 10 ? 30000 : 33000;
    return horas * tarifa;
}


function mostrarMensaje(nombre, horas, salario) {
    let mensaje = `Señor@ ${nombre}, su número de horas trabajadas es ${horas} y su salario equivale a $${salario}`;
    console.log(mensaje);
    document.getElementById('mensaje').innerHTML = mensaje;
}


let nombre = prompt("¿Cuál es tu nombre?");
let horas = parseInt(prompt("¿Cuántas horas trabajaste?"));


let salario = calcularSalario(horas);
mostrarMensaje(nombre, horas, salario);