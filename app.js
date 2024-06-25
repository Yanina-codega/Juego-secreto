let numeroSecreto=0;
let intentos=0;
let listaNumerosSorteados=[];
let numeroMaximo=10;

function asignarElemento(elemento, texto){
    let elementoHTML = document.querySelector(elemento);
    elementoHTML.innerHTML = texto;
    return;
}

function verificarIntento(){
    let numeroUsuario = parseInt(document.getElementById('valorUsuario').value);
    
    if (numeroUsuario === numeroSecreto){
        asignarElemento('p',`Acertaste el número en ${intentos} ${(intentos === 1) ? 'vez' : 'veces'}`);
        document.getElementById('reiniciar').removeAttribute('disabled');

    } else{
        if(numeroUsuario > numeroSecreto){
            asignarElemento('p','El numero secreto es menor');
        }else{
            asignarElemento('p','El numero secreto es mayor');
        }
        intentos++;
        limpiarCaja();
    }
    return;
}

function limpiarCaja(){
    document.querySelector('#valorUsuario').value = '';
}

function generarNumeroSecreto(){
    let numeroGenerado = Math.floor(Math.random() * numeroMaximo+1);

//si ya sorteamos todos los numeros 
    if(listaNumerosSorteados.length == numeroMaximo){
        asignarElemento('p', 'Ya se sortearon todos los numeros posibles.')
    } else {

            //si el numero generado esta en la lista 
            if(listaNumerosSorteados.includes(numeroGenerado)){
                return generarNumeroSecreto();
            } else {
                listaNumerosSorteados.push(numeroGenerado);
                return numeroGenerado;
            }
        }
    }
function condicionesIniciales() {
    asignarElemento('h1','Juego del numero secreto');
    asignarElemento('p',`Escoge un numero del 1 al ${numeroMaximo}` );
    numeroSecreto=generarNumeroSecreto();
    intentos=1;
}

function reiniciarJuego(){
    //limpiar caja 
    limpiarCaja();
    //indicar mensaje de intervalo de numeros
    //generar el numero aletatorio
    //inicializar numero de intentos
    condicionesIniciales();
    //deshabilidar el boton de nuevo juego
    document.querySelector('#reiniciar').setAttribute('disabled', 'true');



}
condicionesIniciales();


