/****************************************************
 *                                                   *
 * 1. Hacer una función que guarde una lista         *
 *    de listas de datos de personas. Deberia        *
 *    guardar por cada persona, una lista de datos   *
 *    que incluyan el nombre completo, la edad y     *
 *    la dirección de email.                         *
 * 2. Al ingresar nueva persona, validar que no      *
 *    exista en la lista. Si existe, tirar un error. *
 *    (Usar una función distinta para validar y      *
 *    llamar dentro de la función de guardar persona)*
 * 3. Hacer una función que me devuelva la lista     *
 *    completa de personas.                          *
 * 4. Hacer una función que me permita encontrar     *
 *    una persona por email.                         *
 * 5. Hacer una función que me permita encontrar     *
 *    personas por nombre o parte del nombre.        *
 * 6. Hacer una función para borrar personas por mail*
 * 7. Hacer una función que permita modificar nombre *
 *    buscando por mail.                             *
 * 8. Hacer una función que permita modificar edad   *
 *    buscando por mail.                             *
 *                                                   *
 *    Observaciones: Googl                           *
 ****************************************************/

/*Ej 1 y 2*/

let lista = [];

const comprobar = (nombre) => {   
    for (var i = 0; i < lista.length; i++) {
        if (nombre == lista[i][0]) {
            throw "Nombre ya ingresado. Intente nuevamente.";
        }
    }
} 

const guardarLista = () => {
    let datos = [];
    let nombre = prompt("¿Cuál es tu nombre completo?");
    comprobar (nombre);
    let edad = prompt("¿Cuál es tu edad?");
    let email = prompt("¿Cuál es tu email?");
    datos.push(nombre, edad, email);
    lista.push(datos);   
}


/*Ej 3*/

const listaCompleta = () => {
    console.log (lista);
}

/*Ej 4*/

const buscarEmail = () => {
    let comprobarEmail = prompt("Ingrese un email para buscar:");
    for (var i = 0; i < lista.length; i++) {
        if (comprobarEmail != lista[i][2]) {

        if else
            throw "Ese email no ha sido ingresado anteriormente.";
        }
}


/*hacer una función que me haga ingresar un email. Tengo que chequear que ese email está en la lista. Si está, tirar el perfil
de la persona a la que le corresponde el mail. Sino está, tirar error.*/