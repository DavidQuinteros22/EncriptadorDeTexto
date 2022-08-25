const inputTexto = document.querySelector(".input-texto");
const mensaje = document.querySelector(".mensaje");
const imagen = document.querySelector(".img");
const boton = document.querySelector('.var-copiar');

function btnEncriptar(){
    const textoEncriptado = encriptar(inputTexto.value)
    mensaje.value = textoEncriptado;
    mensaje.style.backgroundImage = 'none';
    inputTexto.value = '';
    imagen.style.display = 'none';
    mensaje.style.display = 'block';
    boton.style.display = 'block';
}
function btnDesencriptar(){
    const textoEncriptado = desencriptar(inputTexto.value)
    mensaje.value = textoEncriptado;
    mensaje.style.backgroundImage = 'none';
    inputTexto.value = '';
    imagen.style.display = 'none';
    mensaje.style.display = 'block';
    boton.style.display = 'block';
}
function encriptar(stringEncriptado){
    let matrizCodigo = [['e','enter'], ['i','imes'], ['a','ai'],['o','ober'],['u','ufat']]
    stringEncriptado = stringEncriptado.toLowerCase();


for(let i = 0; i < matrizCodigo.length;i++){
    if(stringEncriptado.includes(matrizCodigo[i][0])){
        stringEncriptado = stringEncriptado.replaceAll(matrizCodigo[i][0],matrizCodigo[i][1]);
        }
    }
    return stringEncriptado;
}

function desencriptar(stringDesencriptado){
    let matrizCodigo = [['enter','e'], ['imes','i'], ['ai','a'],['ober','o'],['ufat','u']]
    stringDesencriptado = stringDesencriptado.toLowerCase();


for(let i = 0; i < matrizCodigo.length;i++){
    if(stringDesencriptado.includes(matrizCodigo[i][0])){
        stringDesencriptado = stringDesencriptado.replaceAll(matrizCodigo[i][0],matrizCodigo[i][1]);
        }
    }
    return stringDesencriptado;
}

function copiar(){
    mensaje.select()
    navigator.clipboard.writeText(mensaje.value);
    mensaje.value = '';
    alert('Texto copiado');
}




