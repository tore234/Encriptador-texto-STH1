// Función para encriptar el texto
function encriptarTexto() {
    let texto = document.getElementById('textoUsuario').value;
    let textoEncriptado = texto
        .replace(/e/g, "enter")
        .replace(/i/g, "imes")
        .replace(/a/g, "ai")
        .replace(/o/g, "ober")
        .replace(/u/g, "ufat");

    document.getElementById('textoResultado').innerText = textoEncriptado;
}

// Función para desencriptar el texto
function desencriptarTexto() {
    let texto = document.getElementById('textoUsuario').value;
    let textoDesencriptado = texto
        .replace(/enter/g, "e")
        .replace(/imes/g, "i")
        .replace(/ai/g, "a")
        .replace(/ober/g, "o")
        .replace(/ufat/g, "u");

    document.getElementById('textoResultado').innerText = textoDesencriptado;
}

// Función auxiliar para asignar texto a elementos HTML
function asignarTextoElemento(elemento, texto) {
    let elementoHTML = document.querySelector(elemento);
    elementoHTML.innerHTML = texto;
    return;
}

// Asignar el texto inicial a los elementos HTML
asignarTextoElemento('h1', 'Encriptador de Texto');
asignarTextoElemento('p', 'Ingresa el texto que deseas encriptar o desencriptar:');
