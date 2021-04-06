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
    var resultado = (parseInt(valor)*0.55) + (parseInt(valor2)*0.30) + (parseInt(valor3)*0.15); 
    var opera = resultado;

    document.formulario.sueldoti.value=opera;

}

function borrar(){
    document.formulario.cantidad.value="";
    document.formulario.sueldoti.value="";

    document.formulario.cantidad2.value="";

    document.formulario.cantidad3.value="";
}