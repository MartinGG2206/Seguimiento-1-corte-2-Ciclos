const calcularMCD = (a, b) => {
    if (!Number.isInteger(a) || !Number.isInteger(b) || a <= 0 || b <= 0){
        return "por favor, ingrese dos numeros enteros positivos."
    }
    a = Math.abs(a);
    b = Math.abs(b);
    while (b != 0){
        let t = b;
        b = a % b;
        a = t;
    }
    return a;
}
console.log(calcularMCD(4, 5));
console.log(calcularMCD(0, 8));
console.log(calcularMCD(1, 0));
console.log(calcularMCD(2, -8));