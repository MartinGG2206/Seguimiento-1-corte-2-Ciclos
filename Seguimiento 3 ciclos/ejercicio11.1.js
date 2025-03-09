let modelo = parseInt(prompt("Ingrese el número de modelo de su automóvil:"));

const modelosDefectuosos = [119, 179, 189, 190, 191, 192, 193, 194, 195, 221, 780];

let mensaje = modelosDefectuosos.includes(modelo) 
    ? "El automóvil está defectuoso, llevar a garantía." 
    : "Su automóvil no está defectuoso.";

document.getElementById('mensaje').innerHTML = mensaje;
console.log(mensaje);
