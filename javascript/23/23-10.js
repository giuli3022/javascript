
/* Crear un array vacío. Hacer una función para llenar el array, pidiendo por prompt. Hacer una función que muestre en un alert el
último valor agregado al array. Hacer una función para imprimir la lista de valores del array en un console.log*/

let ejercicio = [];
const miFuncion = () => {
    let llenar = prompt("Llena la lista");
    ejercicio.push(llenar);
}
miFuncion();

const segundafuncion = () => {
    let ultimo = ejercicio[ejercicio.length - 1]
    alert(ultimo);
}
segundafuncion();

const lista = () => {
    console.log(ejercicio);
}

/* Escribir una función que reciba como parámetro un número e imprima ese número al revés. Pista: Buscar como trasformar
los strings en arrays*/

const reverseNumber = (numberToReverse) => {
    numberToReverse = numberToReverse.toString()
                                     .split("")
                                     .reverse()
                                     .toString();
    console.log (numberToReverse);
}
reverseNumber (numero)

const miFuncion = (variable1) => {
var numeroreverse = variable1.split('').reverse().join(''); /*ESTO HABÍA ESTADO HACIENDO, SOLO FALTO EL STRING*/
}