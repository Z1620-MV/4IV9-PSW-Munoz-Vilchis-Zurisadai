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

    if(parseInt(valor)==parseInt(valor2)){
        
        var resultado = valor*valor2;
        document.formulario.sueldoti.value=resultado;
    }

    else if (parseInt(valor)>parseInt(valor2)) {
        
        var suma = valor-valor2;
        document.formulario.sueldoti.value=suma;
    }
    
    else {
        
        var resta = parseInt(valor)+parseInt(valor2);
        document.formulario.sueldoti.value=resta;
    }
    
}

function borrar(){
    document.formulario.cantidad.value="";
    document.formulario.sueldoti.value="";

    document.formulario.cantidad2.value="";
}