/*Pedir un mes del año por prompt en números (ej. 10)
Devolver el mes del año en texto (ej octubre)
Hacer dos veces, una con switch y otra con if else if else.*/


let meses = prompt("¿En que mes cumples años?");
switch (meses) {
    case '1': alert('Enero')
        break;
    case '2': alert('Febrero')
        break;
    case '3': alert('Marzo')
        break;
    case '4': alert('Abril')
        break;
    case '5': alert('Mayo')
        break;
    case '6': alert('Junio')
        break;
    case '7': alert('Julio')
        break;
    case '8': alert('Agosto')
        break;
    case '9': alert('Septiembre')
        break;
    case '10': alert('Octubre')
        break;
    case '11': alert('Noviembre')
        break;
    case '12': alert('Diciembre')
        break;
    default: alert('Que triste no tener cumpleaños.')
}

let meses = prompt("¿En que mes cumples años?");
if (meses == 1) {
    alert("Enero");
}
else if (meses == 2) {
    alert("Febrero");
}
else if (meses == 3) {
    alert("Marzo");
}
else if (meses == 3) {
    alert("Marzo");
}
else if (meses == 4) {
    alert("Abril");
}
else if (meses == 5) {
    alert("Mayo");
}
else if (meses == 6) {
    alert("Junio");
}
else if (meses == 7) {
    alert("Julio");
}
else if (meses == 8) {
    alert("Agosto");
}
else if (meses == 9) {
    alert("Septiembre");
}
else if (meses == 10) {
    alert("Octubre");
}
else if (meses == 11) {
    alert("Noviembre");
}
else if (meses == 12) {
    alert("Diciembre");
}
else {
    alert("Que triste no tener cumpleaños.")
}