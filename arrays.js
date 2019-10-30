/* hacer un array que se llame nombres, pedirlem al usuario que ingrese 5 nombres, imprimirlos en el orden ingredaso y luego al reverso*/


let nombres= Array();

for(var i=1;i<=5;i++)
{
    var name = prompt("Introduce cinco nombres");
    nombres.push(name);
}
alert(nombres);

alert (nombres.reverse())
