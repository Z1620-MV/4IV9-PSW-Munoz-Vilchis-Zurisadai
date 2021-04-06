function validarn(e){
    var teclado = (document.all)?e.keyCode:e.which;

    if(teclado == 8) return true;

    var patron = /[0-9\d .]/;

    var prueba = String.fromCharCode(teclado);

    return patron.test(prueba);
}

function sueldo(){
    var horae = document.formulario.cantidad.value;

    if(parseInt(horae)>0 && parseInt(horae)<=8){
        
        var valor = (parseInt(horae)*100)+30000;

        document.formulario.sueldoti.value="$"+valor;
    }

    else if (parseInt(horae)>8) {
        
        var restado = parseInt(horae)-8;
        var valor2 = (restado*150)+30800;

        document.formulario.sueldoti.value="$"+valor2;
    }
    
    else {
        
        document.formulario.sueldoti.value="$"+30000+" Sin hrs extra";
    }
    
}

function borrar(){
    document.formulario.cantidad.value="";
    document.formulario.sueldoti.value="";
}