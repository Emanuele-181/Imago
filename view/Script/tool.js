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
var default_value = {luminosita_var : 1, contrasto_var : 100, saturazione_var : 100, sfocatura_var : 0, colore_var : 0, sfumatura_var : 100, seppia_var : 0, negativo_var : 0};
var obj_mod = {luminosita_var : 1, contrasto_var : 100, saturazione_var : 100, sfocatura_var : 0, colore_var : 0, sfumatura_var : 100, seppia_var : 0, negativo_var : 0};

/* Funzioni ausiliarie */
function toValue(){

    var value = 'brightness('+ (Math.floor(obj_mod.luminosita_var * 10) / 10).toString() +') ' +
                'contrast('+ obj_mod.contrasto_var.toString() + '%) ' +
                'saturate('+ obj_mod.saturazione_var.toString() + '%) ' +
                'blur(' + obj_mod.sfocatura_var.toString() + 'px) ' +
                'hue-rotate(' + obj_mod.colore_var.toString() + 'deg)' +
                'opacity('+ obj_mod.sfumatura_var.toString() + '%) ' +
                'sepia('+ obj_mod.seppia_var.toString() + '%) ' +
                'invert('+ obj_mod.negativo_var.toString() + '%) ';
    return value;
}


/* Funzioni */
function reset(){
    obj_mod = JSON.parse(JSON.stringify(default_value));
    var value = toValue();
    $('#Immagine').css('filter', value);
}


function contrasto(cmd){
    if(cmd == '+'){
        obj_mod.contrasto_var = obj_mod.contrasto_var + 10;
        var value = toValue();
        $('#Immagine').css('filter', value);
    }
    else{
        obj_mod.contrasto_var = obj_mod.contrasto_var - 10;
        var value = toValue();
        $('#Immagine').css('filter', value);
    }   
}

function luminosita(cmd){
    if(cmd == '+'){
        obj_mod.luminosita_var = obj_mod.luminosita_var + 0.1;
        var value = toValue();
        $('#Immagine').css('filter', value);
    }
    else{
        obj_mod.luminosita_var = obj_mod.luminosita_var - 0.1;
        var value = toValue();
        $('#Immagine').css('filter', value);
    }
}

function saturazione(cmd){
    if(cmd == '+'){
        obj_mod.saturazione_var = obj_mod.saturazione_var + 10;
        var value = toValue();
        $('#Immagine').css('filter', value);
    }
    else{
        obj_mod.saturazione_var = obj_mod.saturazione_var - 10;
        var value = toValue();
        $('#Immagine').css('filter', value);
    } 
}

function sfocatura(cmd){
    if(cmd == '+'){
        obj_mod.sfocatura_var = obj_mod.sfocatura_var + 1;
        var value = toValue();
        $('#Immagine').css('filter', value);
    }
    else{
        if(obj_mod.sfocatura_var <= 0) return;
        obj_mod.sfocatura_var = obj_mod.sfocatura_var - 1;
        var value = toValue();
        $('#Immagine').css('filter', value);
    }  
}

function colore(cmd){
    if(cmd == '+'){
        obj_mod.colore_var = obj_mod.colore_var + 10;
        var value = toValue();
        $('#Immagine').css('filter', value);
    }
    else{
        obj_mod.colore_var = obj_mod.colore_var - 10;
        var value = toValue();
        $('#Immagine').css('filter', value);
    }  
}

function sfumatura(cmd){
    if(cmd == '+'){
        if(obj_mod.sfumatura_var <= 0) return;
        obj_mod.sfumatura_var = obj_mod.sfumatura_var - 10;
        var value = toValue();
        $('#Immagine').css('filter', value);
    }
    else{
        if(obj_mod.sfumatura_var >= 100) return;
        obj_mod.sfumatura_var = obj_mod.sfumatura_var + 10;
        var value = toValue();
        $('#Immagine').css('filter', value);
    }  
}

function seppia(cmd){
    if(cmd == '+'){
        if(obj_mod.seppia_var >= 100) return;
        obj_mod.seppia_var = obj_mod.seppia_var + 10;
        var value = toValue();
        $('#Immagine').css('filter', value);
    }
    else{
        if(obj_mod.seppia_var <= 0) return;
        obj_mod.seppia_var = obj_mod.seppia_var - 10;
        var value = toValue();
        $('#Immagine').css('filter', value);
    }  
}

function negativo(cmd){
    if(cmd == '+'){
        if(obj_mod.negativo_var >= 100) return;
        obj_mod.negativo_var = obj_mod.negativo_var + 10;
        var value = toValue();
        $('#Immagine').css('filter', value);
    }
    else{
        if(obj_mod.negativo_var <= 0) return;
        obj_mod.negativo_var = obj_mod.negativo_var - 10;
        var value = toValue();
        $('#Immagine').css('filter', value);
    }  
}