// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.

//crear array para almacenar los nombres
let amigos = [];

//crear la función agregar amigos
function AgregarAmigos() {

    //capturamos el valor de la entrada
    let entrada = document.getElementById("amigo");
    let nombre = entrada.value.trim();

    //validamos si la entrada esta vacia
    if (nombre === "") {
        alert("por favor, inserte un nombre");
        return
    }

    //ingresamos el nombre al array
    amigos.push(nombre);

    //limpiamos el valor de la entrada colocando en blanco
    entrada.value = "";

}





