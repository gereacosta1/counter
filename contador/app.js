let cuenta = 0;

function aumentar() {
    cuenta++;
    document.getElementById("numero").innerHTML = cuenta;
}

function disminuir(){
    cuenta--;
    document.getElementById('numero').innerHTML = cuenta;
}

function reiniciar(){
    cuenta = 0;
    document.getElementById('numero').innerHTML = cuenta;
}