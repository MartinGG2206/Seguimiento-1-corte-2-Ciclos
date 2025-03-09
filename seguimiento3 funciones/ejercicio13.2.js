function pequeñoSeleccionado(){
const valor = 6000;
const precioFinal = pequeñoSeleccionado + tocinetaSeleccionada + jalapeñoSeleccionado + pavoSeleccionado + quesoSeleccionado
document.getElementById('mensaje').innerHTML = (`El valor de su orden es de: ${precioFinal}`);
}
function grandeSeleccionado(){
const valor = 12000;

const precioFinal = grandeSeleccionado + tocinetaSeleccionada + jalapeñoSeleccionado + pavoSeleccionado + quesoSeleccionado
document.getElementById('mensaje').innerHTML = (`El valor de su orden es de: ${precioFinal}`);
}

function tocinetaSeleccionada() {
 valor += 3000
}
function jalapeñoSeleccionado(){
valor +=  0
}
function pavoSeleccionado (){
valor += 3000
}
function quesoSeleccionado(){
 valor += 2500
}
function ordenarSandwich(){
    let flag = true;

    do{
        let orden = prompt("Bienvenido, por favor seleccione el tipo de sandwich que quiere (grande o pequeño)")
        let tocinetaSeleccionada = prompt("¿Desea agregar tocineta? (si/no)");
        let jalapeñoSeleccionado = prompt("¿Desea agregar jalapeño? (si/no)");
        let pavoSeleccionado = prompt("¿Desea agregar pavo? (si/no)");
        let quesoSeleccionado = prompt("¿Desea agregar queso? (si/no)");

        switch(orden){
            case 'Grande':
                grandeSeleccionado(tocinetaSeleccionada && jalapeñoSeleccionado && quesoSeleccionado && pavoSeleccionado)
                flag = false;
                break;
            case 'Pequeño':
                pequeñoSeleccionado(tocinetaSeleccionada && jalapeñoSeleccionado && quesoSeleccionado && pavoSeleccionado);
                flag = false;
                break;
            case 'Queso':
             quesoSeleccionado();
             flag = false;
             break;    
            case 'Jalapeño':
             jalapeñoSeleccionado();
             flag = false;
             break;
            case 'Pavo':
             pavoSeleccionado();
             flag = false;
             break;
            case 'Tocineta':
             tocinetaSeleccionada();
             flag = false;
             break;
        }
    } while(flag)
}
ordenarSandwich();