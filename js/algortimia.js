function problema1(){
    var p1_input = document.querySelector('#p1-input').value;

    var p1_array = p1_input.split(' ').reverse();


    var p1_res = '';

    p1_array.forEach(function (palabra, i){
         
        if(i != 0 || i != p1_array.length) p1_res += ' ';
        p1_res += palabra;
    });

    document.querySelector('#p1-output').textContent = p1_res;
}

function problema2(){
    
    var p2_x1 = document.querySelector('#p2-x1').value;
    var p2_x2 = document.querySelector('#p2-x2').value;
    var p2_x3 = document.querySelector('#p2-x3').value;
    var p2_x4 = document.querySelector('#p2-x4').value;
    var p2_x5 = document.querySelector('#p2-x5').value;

    var p2_y1 = document.querySelector('#p2-y1').value;
    var p2_y2 = document.querySelector('#p2-y2').value;
    var p2_y3 = document.querySelector('#p2-y3').value;
    var p2_y4 = document.querySelector('#p2-y4').value;
    var p2_y5 = document.querySelector('#p2-y5').value;

    var v1 = [p2_x1, p2_x2, p2_x3, p2_x4, p2_x5];
    var v2 = [p2_y1, p2_y2, p2_y3, p2_y4, p2_y5];


    v1 = v1.sort(function (a, b){
        return b-a;
    });

    v2 = v2.sort(function (a, b){
        return b-a;
    });

    v2 = v2.reverse();

    var p2_producto = 0;

    for(var i = 0; i < v1.length; i++){
        p2_producto += v1[i]*v2[i];
    }

    document.querySelector('#p2-output').textContent = 'Producto escalar minimo :' + p2_producto;


}

function problema3(){
    var abc = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","Ñ","O","P","Q","R","S","T","U","V","W","X","Y","Z"];
    var p3_input=document.querySelector('#p3-input').value;
    var p3_array = p3_input.split(', ');
    var palabra=[];
    var z=0;
    var t=[];
    
    for(var i=0;i< p3_array.length;i++){
        for(var j=0;j<  abc.length;j++){
            if(abc[j]==p3_array[i]){
                palabra.push(p3_array[i]);
                if (p3_array[i]==","||i==p3_array.length-1){
                    t[z]=i+1;
                    z=z+1;
                    
                }
            }
        }
    }

    if (z!=0) {
       var lil=[];
       var x=0;
        for (i=0;i<palabra.length;i=t[x]){
            if(i!=0){
                x+=1;
            }
            nas=palabra.slice(i,t[x]);
            lil.push(nas); 
        } 
    
        const difer=[];
        var bear=[];
        for (i = 0; i< lil.length; i++) {
            for(var j = 0; j < lil[i].length; j++) {
                const obj = lil[i][j];    
                if (lil[i][j]!=','&& !difer.includes(lil[i][j]) ) {
                    difer.push(obj);
                }
            }
            bear[i]=difer.slice(0,difer.length);
            for (var m = 0; m < difer.length; m++) {
                delete difer[m];
            }
        }
        var resul=["La cantidad de carácteres únicos son"];
        for (var g = 0; g < bear.length; g++) {
            if(g==0){
                resul.push(bear[g].length);}
            else{
                resul.push(bear[g].length-bear[g-1].length);
            }
            resul.push("(");
            resul.push(bear[g]);
            resul.push(")");
        
        }
        document.querySelector('#p3-output').textContent=resul;
    }else{
        const raros = [];
        var bear=[];
        for (i = 0; i< palabra.length; i++) {
            const obj = palabra[i];    
             if (lil[i]!=','&& !raros.includes(lil[i]) ) {
                    raros.push(obj);
                }
            bear[i]=raros.slice(0,raros.length);
            for (var m = 0; m < raros.length; m++) {
                delete raros[m];
            }
        }
        var resul=["La cantidad de carácteres únicos son"];
        for (var g = 0; g < bear.length; g++) {
            if(g==0){
                resul.push(bear[g].length);}
            else{
                resul.push(bear[g].length-bear[g-1].length);
            }
            resul.push("(");
            resul.push(bear[g]);
            resul.push(")");
        
        } 
        document.querySelector('#p3-output').textContent=resul;
    }
}

function validarn(e){
    var teclado = (document.all)?e.keyCode:e.which;
    if(teclado===8)return true;
    var patron=/[A-Z]{0,24}[\,]{0,1}[ ]{0,1}/g;
    var prueba = String.fromCharCode(teclado);
    return patron.test(prueba);
}