/*Escribir una función que reciba una palabra e imprima sus letras ordenadas alfabéticamente.*/

const funcion = (palabra) => {
    palabra = palabra.toString()
        .split("")
        .sort()
        .join('');
    console.log(palabra);
}
funcion();


/*Escribir una función que reciba una frase e imprima la misma con la primera letra de cada palabra en mayúsculas.*/

const funcion = (frase) => {
    frase = frase.toLowerCase()
        .split(" ")
        .map(v => v[0].toUpperCase() + v.substr(1))
        .join(' ');
    console.log(frase);
}




/*Escribir una función que reciba una frase e imprima la palabra más larga de la misma*/

const funcion = (frase) => {                /*Planteo mi función*/
    frase = frase.split(" ");               /*Convierte al string en array*/
    var cero = 0;                           /*Comparo valores*/
    var strValor="";
    for (var i = 0; i<frase.length; i++){
        if (frase[i].length > cero){
            cero = frase[i].length;
        strValor=frase[i];
        }
    }
return strValor;
}
console.log (funcion("la mejor frase del mundo mundial"))


function findLongestWord(str) {
    var strSplit = str.split(' ');
    var longestWord = 0;
    var strValor="";
    for(var i = 0; i < strSplit.length; i++){
      if(strSplit[i].length > longestWord){
      longestWord = strSplit[i].length;
    strValor=strSplit[i];
       }
    }
    return strValor;
  }
  var masLarga=findLongestWord("The quick brown fox jumped over the lazy dog");
  console.log(masLarga);

  //EJ DE CALLBACK//

  const miFuncion1 = ()=> {console.log(1);};
  const miFuncion2 = (callback) => { callback();};
  miFuncion2(miFuncion1);


  //RETURN//

  /*el return nos permite desde nuestra función, devolver un valor de la misma forlma que un parametro nos permite recibir un valor

  funcion mySwitchFuncion (value) {
      switch(value) {
          case 1: return "el valor fue 1";
          case 2 : return "el valor fue 2";
          default:
              return "no nos interesa el valor ingresado";
      }
  }*/
  