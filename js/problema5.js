function validarn(e){
    var teclado = (document.all)?e.keyCode:e.which;

    if(teclado == 8) return true;

    var patron = /[0-9\d .]/;

    var prueba = String.fromCharCode(teclado);

    return patron.test(prueba);
}

function operacion(){
    var valor = document.formulario.cantidad.value;
    var valor2 = document.formulario.cantidad2.value;
    var resultado = parseInt(valor) + parseInt(valor2);
    var opera = (valor*100)/resultado;
    var opera2 = (valor2*100)/resultado;

    document.formulario.sueldoti.value=opera+"%";
    document.formulario.sueldoti2.value=opera2+"%";
}

function borrar(){
    document.formulario.cantidad.value="";
    document.formulario.sueldoti.value="";

    document.formulario.cantidad2.value="";
    document.formulario.sueldoti2.value="";
}