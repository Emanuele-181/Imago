/* Include tutte le funzioni che servono alla pagina tool */

function visualizzaImg(){

    if(!sessionStorage.Img){
        alert("Caricare l'immagine");
        return;
    }

    var img = $("<img />").attr({   id: 'Immagine',
                                    src: '../../public/Store/'+sessionStorage.Img,
                                    style:"width:50vw;border-radius: 10px; box-shadow: 4px 4px 8px"}).on('load', function() {
        if (!this.complete || typeof this.naturalWidth == "undefined" || this.naturalWidth == 0) {
            alert('Attenzione! Immagine non caricata!');
        }
        else {
            $('#Img').html(img);
        }
    });

}

function blocca(){
        document.getElementById('formCarica').style.display = 'none';
}

function controlloPresenzaImg(){
    if(sessionStorage.Img){
        document.getElementById('formCarica').style.display = 'none';
    }
}







/* *************************************** */
/* Funzioni per la modifica delle immagini */
/* *************************************** */

/* Variabili */
var default_value = {luminosita_var : 1, contrasto_var : 100};
var obj_mod = {luminosita_var : 1, contrasto_var : 100};


/*var contrasto_var = 100;
var luminosita_var = 1;*/


/* Funzioni */
function reset(){
    obj_mod = JSON.parse(JSON.stringify(default_value));
    var value = 'brightness('+ (Math.floor(obj_mod.luminosita_var * 10) / 10).toString() +') contrast('+ obj_mod.contrasto_var.toString() + '%' +')';
    $('#Immagine').css('filter', value);
}


function contrasto(cmd){
    if(cmd == '+'){
        obj_mod.contrasto_var = obj_mod.contrasto_var + 10;
        var str = obj_mod.contrasto_var.toString() + '%';
        var value = 'brightness('+ (Math.floor(obj_mod.luminosita_var * 10) / 10).toString() +') contrast('+ str +')';
        $('#Immagine').css('filter', value);
    }
    else{
        obj_mod.contrasto_var = obj_mod.contrasto_var - 10;
        var str = obj_mod.contrasto_var.toString() + '%';
        var value = 'brightness('+ (Math.floor(obj_mod.luminosita_var * 10) / 10).toString() +') contrast('+ str +')';
        $('#Immagine').css('filter', value);
    }
    
}

function luminosita(cmd){
    if(cmd == '+'){
        obj_mod.luminosita_var = obj_mod.luminosita_var + 0.1;
        var str = (Math.floor(obj_mod.luminosita_var * 10) / 10).toString();
        var value = 'brightness('+ str +') contrast('+ obj_mod.contrasto_var.toString() + '%' +')';
        $('#Immagine').css('filter', value);
    }
    else{
        obj_mod.luminosita_var = obj_mod.luminosita_var - 0.1;
        var str = (Math.floor(obj_mod.luminosita_var * 10) / 10).toString();
        var value = 'brightness('+ str +') contrast('+ obj_mod.contrasto_var.toString() + '%' +')';
        $('#Immagine').css('filter', value);
    }
    
}