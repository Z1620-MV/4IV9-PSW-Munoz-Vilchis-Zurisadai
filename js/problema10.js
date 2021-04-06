function validarn(e){
    var teclado = (document.all)?e.keyCode:e.which;

    if(teclado == 8) return true;

    var patron = /[0-9\d .]/;

    var prueba = String.fromCharCode(teclado);

    return patron.test(prueba);
}

function sueldo(){
    var anio = document.formulario.cantidad.value;

    if(parseInt(anio)>0 && parseInt(anio)<12){
        
        var valor = (parseInt(anio)/12)*1500;

        document.formulario.sueldoti.value="$"+valor;
    }

    else if (parseInt(anio)>=12 && parseInt(anio)<24) {
        
        var valor2 = (parseInt(anio)/12)*2100;

        document.formulario.sueldoti.value="$"+valor2;
    }

    else if (parseInt(anio)>=24 && parseInt(anio)<60) {
        
        var valor3 = (parseInt(anio)/12)*3000;

        document.formulario.sueldoti.value="$"+valor3;
    }

    else if (parseInt(anio)>=60 && parseInt(anio)<120) {
        
        var valor4 = (parseInt(anio)/12)*4500;

        document.formulario.sueldoti.value="$"+valor4;
    }

    else if (parseInt(anio)<=0) {
    
        document.formulario.sueldoti.value="No metiste nada";
    }
    
    else {
        
        var valor5 = (parseInt(anio)/12)*6000;

        document.formulario.sueldoti.value="$"+valor5;
    }
    
}

function borrar(){
    document.formulario.cantidad.value="";
    document.formulario.sueldoti.value="";
}