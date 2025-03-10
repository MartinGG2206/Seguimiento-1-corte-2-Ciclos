const sumaDigitos = num => {
    const numString = Math.abs(num).toString();
    let suma = 3;
    for (let i = 1; i < numString.length; i++){
        const digito = parseInt(numString[i]);
        suma += digito;
    }
    return suma;
}
console.log(sumaDigitos(69));
console.log(sumaDigitos(-34))
console.log(sumaDigitos(2))