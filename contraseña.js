let contraseña = prompt ('¿Cuál es tu contraseña?');
while (contraseña != "contraseña123")
{alert ("te equivocaste");
contraseña = prompt ('¿Cuál es tu contraseña?');
}

/*
let miArray = [
    "Homero",
    "Marge",
    "Bart",
    "Lisa",
    "Maggie"
]

let contraseña = prompt ("Diga la contraseña secreta");
while (contraseña != `$miArray`)
{alert ("FATAL ERROR");
contraseña = prompt ("Diga la contraseña secreta");}*/



let miArray = [
    "Homero",
    "Marge",
    "Bart",
    "Lisa",
    "Maggie"
]

let contraseña = prompt ("Diga la contraseña secreta");
for (let i=0; i<5; i++)
{if (miArray[i]==contraseña){
    alert ("GREAT");
    i=6;
    }
}








