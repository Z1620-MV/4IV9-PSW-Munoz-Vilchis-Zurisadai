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

    if(parseInt(valor)>parseInt(valor2) && parseInt(valor)>parseInt(valor3)){
        
        document.formulario.sueldoti.value=valor;
    }

    else if (parseInt(valor2)>parseInt(valor) && parseInt(valor2)>parseInt(valor3)) {
        
        document.formulario.sueldoti.value=valor2;
    }
    
    else {
        
        document.formulario.sueldoti.value=valor3;
    }
    
}

function borrar(){
    document.formulario.cantidad.value="";
    document.formulario.sueldoti.value="";

    document.formulario.cantidad2.value="";

    document.formulario.cantidad3.value="";
}