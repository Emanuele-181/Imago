/* Include tutte le funzioni che servono alla pagina tool */

function visualizzaImg(){

    if(!sessionStorage.Img){
        alert("Caricare l'immagine");
        return;
    }

    var img = $("<img />").attr({   src : '../../public/Store/'+sessionStorage.Img,
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