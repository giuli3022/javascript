/*Pedir un día de la semana por prompt en un texto (ej. Lunes). Devolver el número  del día (ej. 2). En caso de que el día ingresado
no exista, tirar un error e imprimirlo*/

try {
    let día = prompt("día de la semana");
    día = día.toLowerCase();
    switch (día) {
        case "lunes":
            console.log(1);
            break;
        case "martes":
            console.log(2);
            break;
        case "miercoles":
        case "miércoles":
            console.log(3);
            break;
        case "jueves":
            console.log(4);
            break;
        case "viernes":
            console.log(5);
            break;
        case "sabado":
        case "sábado":
            console.log(1);
            break;
        case "domingo":
            console.log(1);
            break;
        default:
            throw "no existe el día ingresado";
    }
}
catch (err) {
    console.warn(err); throw 500;
}
finally {                                                                       /*Además del resultado, tira lo del finally*/
    console.log ("switch pasado");
}
console.log ("mensaje nuevo");

/*Hacer una función llamada "saludo". Cada vez que llamo a la función, me pide un nombre y toma ese nommbre y lo imprime en un alert*/

const saludo = () => {
    let name = prompt('¿Cuál es tu nombre?');
    alert(`¡Hola ${name}!`);
}
saludo();
