let check = false;
let valorHoras = 30000;
let valorHoras2 = 33000;
while (check != true) {
    alert(`Consulte pago por horas laborales, 
    \n 1. Si trabajó menos de 10 horas. 
    \n 2. Si trabajó más de 10 horas. 
    \n 3. Salir.`);

    let opcion = Number(prompt("Ingrese la opción"));

    switch (opcion) {
        case 1: {
            let Nombre = prompt("Ingrese su nombre");
            let Horas = prompt("Ingrese horas de trabajo");
            alert(`Bienvenido ${Nombre}, ya que usted trabajó ${Horas} horas, su paga es de ${valorHoras * Horas}`);
            break;
        }
        case 2: {
            let Nombre = prompt("Ingrese su nombre");
            let Horas = prompt("Ingrese horas de trabajo");
            alert(`Bienvenido ${Nombre}, ya que usted trabajó ${Horas} horas, su paga es de ${valorHoras2 * Horas}`);
            break;
        }
        case 3:
            check = true;
            break;
        default:
            alert("Opción no válida. Intente de nuevo.");
    }
}
