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

    //Actualizar la Lista de Amigos
    ActualizarLista();
}

//Crear la función Actualizar Lista de Amigos
function ActualizarLista() {
    //obtener listaAmigos
    let lista = document.getElementById("listaAmigos");
    //limpiar lista antes de agregar nuevos elementos
    lista.innerHTML = "";
    //recorrer el array amigos
    for (let i = 0; i < amigos.length; i++) {
        //crear el elemnto <li>
        let li = document.createElement("li");
        //asignar el nombre a li
        li.textContent = amigos[i];
        //agregar <li> a <ul>
        lista.appendChild(li);
        
    }
}





