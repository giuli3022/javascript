let pelo = prompt("¡Bienvenido!¿Qué tan largo es tu pelo?");
let barba = confirm ("Y tenés barba?");


if (pelo == "corto" && barba)
 {    alert ("Entonces, rapado y retoque de barba.");
 }

else if (pelo == "medio" && barba) 
{    alert ("Cortamos las puntas y la barba.");
}

else if (pelo == "largo" && barba) 
{    alert ("Cortamos todo y lo hacemos peluca.");
}

else if (barba) {
    alert ("rebajamos la barba");
}

else if (pelo == "corto") {
    alert ("Bueno, sale rapado.");
}
else if (pelo == "medio")
 {
    alert ("Corte de puntas, entonces.");
}

else if (pelo == "largo")
{    alert ("Cortamos el pelo");
} 


else {alert ("Entonces, te vendo una peluca")}
