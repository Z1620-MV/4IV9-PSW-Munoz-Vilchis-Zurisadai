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
    var valor3 = document.formulario.cantidad3.value;
    var suma = parseInt(valor) + parseInt(valor2) + parseInt(valor3);
    var resultado = (10*suma)/100; 
    var opera = resultado;
    var opera2 = resultado+15000;

    document.formulario.sueldoti.value="$"+opera;
    document.formulario.sueldoti2.value="$"+opera2;
}

function borrar(){
    document.formulario.cantidad.value="";
    document.formulario.sueldoti.value="";

    document.formulario.cantidad2.value="";
    document.formulario.sueldoti2.value="";

    document.formulario.cantidad3.value="";
}