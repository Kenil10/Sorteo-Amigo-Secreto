// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.

//crear array para almacenar los nombres
let amigos = [];

//crear la función agregar amigos
function agregarAmigo() {

    //capturamos el valor de la entrada
    const input = document.getElementById("amigo");
    const nombre = input.value.trim();

    //validamos si la entrada esta vacia
    if (nombre === "") {
        alert("por favor, inserte un nombre");
        return;
    }

    //ingresamos el nombre al array
    amigos.push(nombre);

    //limpiamos el valor de la entrada colocando en blanco
    input.value = "";

    //Actualizar la Lista de Amigos
    actualizarLista();
}

//Crear la función Actualizar Lista de Amigos
function actualizarLista() {
    //obtener listaAmigos
    const lista = document.getElementById("listaAmigos");
    //limpiar lista antes de agregar nuevos elementos
    lista.innerHTML = "";
    //recorrer el array amigos
    for (let i = 0; i < amigos.length; i++) {
        //crear el elemnto <li>
        const li = document.createElement("li");
        //asignar el nombre a li
        li.textContent = amigos[i];
        //agregar <li> a <ul>
        lista.appendChild(li);
        
    }
}

//Crear la Función Sortear Amigo
function sortearAmigo() {
    //validar si la lista de amigos no este vacia
    if (amigos.length === 0) {
        alert("No hay amigos en la lista para sortear");
        return;
    }
    //generar numero aleatorio, multiplicarlo por la cantidad de elementos del array y redondearlo hacia abajo
    const IndiceAleatorio = Math.floor(Math.random()*amigos.length);
    //obtener el nombre del amigo sorteado
    const AmigoSorteado = amigos[IndiceAleatorio];

    //obtener el <ul> donde se mostrará el resultado
    const resultado = document.getElementById("resultado");
    //insertar el resultado en un <li> en html
    resultado.innerHTML = `<li> El amigo secreto es: ${AmigoSorteado} </li>`;
}





