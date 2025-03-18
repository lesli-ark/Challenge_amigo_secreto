//El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema
const listaAmigos = [];
const inputAmigo = document.getElementById("amigo");
const ulListaAmigos = document.getElementById("listaAmigos");
const resultado = document.getElementById("resultado");

function agregarAmigo() {
    if (inputAmigo.value.trim() === "") {
        alert("NO HAY DATOS. Por favor, inserte un Nombre");
        return;
    }
    if (listaAmigos.includes(inputAmigo.value.trim())) {
        alert("ERROR: Este nombre ya ha sido agregado.");
        return;
    }

    listaAmigos.push(inputAmigo.value.trim());
    ulListaAmigos.innerHTML += `<li>${inputAmigo.value.trim()}</li>`;
    inputAmigo.value = ""; // Limpiar el input después de agregar
}

function sortearAmigo() {
    if (listaAmigos.length === 0) {
        alert("NO HAY AMIGOS PARA SORTEAR. Agregar nombres primero");
        return;
    }

    const amixAleatorio = Math.floor(Math.random() * listaAmigos.length);
    const amigoSecreto = listaAmigos[amixAleatorio];
    resultado.innerHTML = `<li>${amigoSecreto}</li>`;
}