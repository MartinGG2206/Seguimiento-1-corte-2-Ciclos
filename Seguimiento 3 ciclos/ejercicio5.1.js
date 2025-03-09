let numeros = [];

for (let i = 1; i <= 3; i++) {
    let numero;
    do {
        numero = parseFloat(prompt(`Ingrese el número ${i}:`));
    } while (isNaN(numero));
    
    numeros.push(numero);
}

let mayor = Math.max(...numeros);

console.log(`El número mayor es ${mayor}`);
document.getElementById('mensaje').innerHTML = `El número mayor es ${mayor}`;
