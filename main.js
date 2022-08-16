// Deve ser carregado na primeira pagina
console.log('/**************************/');

//Definindo todas as letras do alfabeto
const alfabeto = "AÁÃÂÀaàáãâBbCcÇçDdEÉeèéêFfGgHhIiíìJjKkLlMmNnOÓÔÕoóõôPpQqRrSsTtUÚuVvWwXxYyZz.;:?/!|@#$%&*(){}[]";
let fraseCript = "";
let fraseDecript = "";

function reverteString(str) {
    return str.split('').reverse().join('');
}

let alfabetoInverso = reverteString(alfabeto);
console.log(alfabetoInverso)

//Toda vez que a página recarrega executa uma função chamada carregaPagina
window.addEventListener("load", carregaPagina);

//Essa função captura o formulário e cria um evento toda vez que o botão submit for acionado.
function carregaPagina() {
    const btn1 = document.getElementById('cript');
    const btn2 = document.getElementById('descript');
    btn1.addEventListener("click", encriptador);
    btn2.addEventListener("click", descriptografar);
}

//Essa função é acionada ao clicar em criptografar
function encriptador(e) {
    e.preventDefault();
    let frase = document.getElementById('frase').value;
    let element = document.getElementById("criptografia");
    segredo(frase);
    console.log(fraseCript);
    escreveParagrafo(fraseCript);
}


//Essa função é acionada ao clicar em descriptografar
function descriptografar(e) {
    e.preventDefault();
    let frase = document.getElementById('frase').value;
    let element = document.getElementById("criptografia");
    segredoInv(frase);
    console.log(fraseDecript);
    escreveParagrafo(fraseDecript);
}

//Funçao que faz a criptografia
function segredo(frase) {
    for (let i = 0; frase.length >= i; i++) {
        for (let j = 0; alfabeto.length - 1 >= j; j++) {
            if (frase[i] === alfabeto[j]) {
                fraseCript = fraseCript + alfabetoInverso[j];
            } else if (frase[i] === " ") {
                fraseCript = fraseCript + " ";
            }
        }
    }
    return fraseCript;
}

//Função que faz a descriptografia
function segredoInv(frase) {
    for (let i = 0; frase.length >= i; i++) {
        for (let j = 0; alfabeto.length - 1 >= j; j++) {
            if (frase[i] === alfabetoInverso[j]) {
                fraseDecript = fraseDecript + alfabeto[j];
            } else if (frase[i] === " ") {
                fraseDecript = fraseDecript + " ";
            }
        }
    }
    return fraseDecript;
}

function escreveParagrafo(texto) {
    let element = document.getElementById("criptografia");
    if (element.innerText !== texto){
        element.innerHTML = texto;
        fraseDecript = "";
        fraseCript = "";
    }
}