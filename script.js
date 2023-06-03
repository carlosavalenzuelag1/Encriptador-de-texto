/* La letra "e" es convertida para "enter"
La letra "i" es convertida para "imes"
La letra "a" es convertida para "ai"
La letra "o" es convertida para "ober"
La letra "u" es convertida para "ufat" */

const textArea = document.querySelector(".text-area");
const mensaje = document.querySelector(".mensaje");
const btnCopy = document.querySelector(".btn-copy");

function ecrypt(textArea) {
  var ecryptText = textArea.replace(/e/g, "enter");
  ecryptText = ecryptText.replace(/i/g, "imes");
  ecryptText = ecryptText.replace(/a/g, "ai");
  ecryptText = ecryptText.replace(/o/g, "ober");
  ecryptText = ecryptText.replace(/u/g, "ufat");

  return ecryptText;
}

function btnEcrypt() {
  const textEcrypting = ecrypt(textArea.value);
  mensaje.value = textEcrypting;
  textArea.value = "";
  mensaje.style.backgroundImage = "none";
}
function decrypt(textArea) {
  var decryptText = textArea.replace(/enter/g, "e");
  decryptText = decryptText.replace(/imes/g, "i");
  decryptText = decryptText.replace(/ai/g, "a");
  decryptText = decryptText.replace(/ober/g, "o");
  decryptText = decryptText.replace(/ufat/g, "u");

  return decryptText;
}

function btnDecrypt() {
  const textEcrypting = decrypt(textArea.value);
  mensaje.value = textEcrypting;
  textArea.value = "";
  mensaje.style.backgroundImage = "none";
}

function copyText(){
    mensaje.select();
    document.execCommand("copy");
}

btnCopy.addEventListener("click", copyText);
