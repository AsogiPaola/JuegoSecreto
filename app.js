let numeroSecreto = 0;
let intentos = 0;
let listaNumerosSorteados = [];
let numeroMax = 10;

function VerificarIntento(){
    let numeroDeUsuario = parseInt(document.getElementById('valorUsuario').value);
    /* console.log(numeroDeUsuario);
    console.log(typeof(numeroDeUsuario));
    console.log(numeroSecreto);
    console.log(typeof(numeroSecreto));
    console.log(numeroDeUsuario == numeroSecreto); */

    if(numeroDeUsuario === numeroSecreto){
        asignarTextoElemento('p',`Acertaste el numero secreto en ${intentos} ${(intentos ===1) ? 'vez' : 'veces'}`);
        document.getElementById('reiniciar').removeAttribute('disabled');
    
    }else {
        //El usuario no acerto
        if(numeroDeUsuario > numeroSecreto){
            asignarTextoElemento('p', 'El numero secreto es menor');
        }else{
            asignarTextoElemento('p', 'El numero secreto es mayor');
        }
        intentos ++;
        limpiarCaja();
    }
    return;
}

function asignarTextoElemento(elemento, texto){
    let elementoHtml = document.querySelector(elemento);
    elementoHtml.innerHTML = texto;
    return;
}
function limpiarCaja(params) {
    let valorCaja = document.querySelector('#valorUsuario');
    valorCaja.value = '';
}
function condicionesIniciales() {
    asignarTextoElemento('h1', 'Juego del numero secreto');
    asignarTextoElemento('p', `Indica un numero de 1 al ${numeroMax}`);
    numeroSecreto = generarNumeroSecreto();
    intentos = 1;
}
function reiniciarJuego() {
    //limpiar la caja
    limpiarCaja();
    //indicar msj de intervalo de #
    //generar el  numero aleatorio,
    //inicializar el # de intentos
    condicionesIniciales();
    //deshabilitar el boton de nuevo juego, 
    document.querySelector('#reiniciar').setAttribute('disabled', 'true');

}
function generarNumeroSecreto() {
    let numeroGenerdo = Math.floor(Math.random()*numeroMax)+1;
    console.log(listaNumerosSorteados);
    if(listaNumerosSorteados.length == numeroMax){
        asignarTextoElemento('p', 'Ya se sortearon todos los numeros posibles');
    }else{
        //si el numero generado esta incluido en la lista 
        if(listaNumerosSorteados.includes(numeroGenerdo)){
            return generarNumeroSecreto();
        }else{
            listaNumerosSorteados.push(numeroGenerdo);
            return numeroGenerdo;
        }
    }

    
}

condicionesIniciales();
