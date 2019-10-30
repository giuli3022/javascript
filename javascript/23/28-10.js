//*EJ: Hacer una funcion que reciba una frase y devuelva el número de vocales que tiene la misma.*/

    const contador = (frase) => {
        frase = frase.toLowerCase();
        let vocal = 'aeiouAEIOU';
        let counter = 0;
        for (let x = 0; x < frase.length; x++) {
            if (vocal.indexOf(frase[x]) !== -1) {
                counter += 1;
            }
        }
        return counter;
    }
    
/*Hacer una función que tome, primero, una frase y luego pida un caracter para remover de la frase ingresada. Observaciones:
validar que el caracter ingresado sea solo uno. Si es más de uno, tirar un error.*/

const frase = (oración) => {
    let pedir = prompt ("saquemos un caracter");
    if (pedir.length != 1) {
    return "error"
    }
    oración = oración.toLowerCase();
    oración = oración.replace (pedir,''); /*escribir for*/
    return oración
    }
     
const frase = (oracion) => {
    let pedir = prompt("saquemos un caracter");
    if (pedir.length != 1) {
        return "error"
    }
    oracion = oracion.toLowerCase();
    pedir = newRegExp (pedir, 'g');
    frase = frase.replace(pedir,'');
    return frase
}

                                    /*REVISAR*/

    const sustractor = (frase) => {
        let caracter = prompt("Quitemos una letra")
        if (caracter.length != 1) {
           return "error"
        }
        frase = frase.toLowerCase();
        caracter = new RegExp(caracter, 'g');
        frase = frase.replace(caracter,''); 
        return frase
    }
    
