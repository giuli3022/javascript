let hora = prompt ('¿Qué hora es?');

if (hora >= 6 && hora <=14)
{
    alert ("¡Buenos días!");
}

else if (hora >= 15 && hora <=19)
{
    alert ("¡Buenas tardes!");
}

else if ((hora >= 20 && hora <=23) || (hora >= 0 && hora <=5))
{
    alert ("¡Buenas noches!");
}



let i= 10
while (i > 0) {
    console.log (i);
    i--;
}