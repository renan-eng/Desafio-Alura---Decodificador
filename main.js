// Deve ser carregado na primeira pagina
console.log('/**************************/');

//Definindo todas as letras do alfabeto
const alfabeto = "AÁÃÂÀaàáãâBbCcÇçDdEÉeèéêFfGgHhIiíìJjKkLlMmNnOÓÔÕoóõôPpQqRrSsTtUÚuVvWwXxYyZz.;:?/!|@#$%&*(){}[]";
let fraseCript = "";
let fraseDecript = "";

//Essa função tem como objetico pegar a variável alfabeto e inverter a ordem dos caracteres
function reverteString(str) {
    return str.split('').reverse().join('');
}

//alfabetoInverso contém todos os caracteres na ordem inversa do alfabeto
const alfabetoInverso = reverteString(alfabeto);

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
    segredo(frase);
    console.log(fraseCript);
    escreveParagrafo(fraseCript);
    let btn = document.getElementById("copiar");
    if(btn) {
        btn.textContent = `Copiar`;
    }
}


//Essa função é acionada ao clicar em descriptografar
function descriptografar(e) {
    e.preventDefault();
    let frase = document.getElementById('frase').value;
    segredoInv(frase);
    console.log(fraseDecript);
    escreveParagrafo(fraseDecript);
    let btn = document.getElementById("copiar");
    if(btn) {
        btn.textContent = `Copiar`;
    }
}

//Função que faz a criptografia
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

//Função que escreve o resultado das funções acima dentro do nosso HTML
function escreveParagrafo(texto) {
    let element = document.getElementById("criptografia");
    let removerDiv = document.getElementById("msgNaoEcontrada");
    if (element.innerText !== texto){
        element.innerHTML = texto;
        fraseDecript = "";
        fraseCript = "";
        //Remover elementos HTML -> img e texto de msg não encontrada
        if(removerDiv) {
            removerDiv.parentElement.removeChild(removerDiv);
            //Adiciona o botão de copiar
            addBtn();
            let btn = document.getElementById("copiar");
            btn.addEventListener("click", (e) =>{
                copiarMsg(e);
                btn.textContent = `Copiado!!!`;
            })
        }
    }
}

//Função que adicionar um botão de copiar
function addBtn() {
    let mensagem = document.getElementById("mensagem");
    let btn = document.createElement("BUTTON");
    btn.innerHTML = "Copiar";
    btn.id = "copiar";
    mensagem.appendChild(btn);
    return btn;
}

function copiarMsg(e) {
    let msg = document.getElementById("criptografia");
    msg = msg.innerText;
    console.log(e);
    return navigator.clipboard.writeText(msg);
}

