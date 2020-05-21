/* Insieme di funzioni che gestiscono i cookie*/


/* Cookie di accesso */

/* Un utente può loggarsi per una singola sessione oppure scegliere se
 * rimanere loggato anche se la sessione viene chiusa spuntando la checkbox
 * ricordami. */

/* Controlla se un utente è loggato */
function checkLogin(){
    if(sessionStorage.logged != 'true' && localStorage.logged != 'true'){
        alert('Per accedere a questa pagina devi registrarti o fare il login.');
        if(window.history.length <= 2){
            window.location.replace('../Sito/HomeSito.html');
        }
        else{
            window.history.back()
        }
        return false;
    }
    return true;
}

/* Imposta a true il cookie di login della SESSIONE */
function sessionLoginTrue(){
    sessionStorage.logged = 'true';
}

/* Imposta a true il cokie di login PERMANENTE */
function localLoginTrue(){
    localStorage.logged = 'true';
}

/* Imposta a false il cookie di login della SESSIONE */
function sessionLoginFalse(){
    sessionStorage.logged = 'false';
}

/* Imposta a true il cokie di login PERMANENTE */
function localLoginFalse(){
    localStorage.logged = 'false';
}

/* Se loggati inverte il simbolo di login */
function selectImage(){
    if(sessionStorage.logged != 'true' && localStorage.logged != 'true'){
        document.write('<a id="imglogin"> <i class="icona_utente fas fa-users" style=" z-index: 1;font-size:60px; color:white; cursor: pointer; position: absolute; top: 1%; right:2%;"> <br>' + '<p style="font-family:' + " 'Poiret One'" + ', cursive; font-size: 20px; text-align: center;"> LOGIN </p> </i> </a>');
    }
    else{
        document.write('<a id="imglogout" style="display: none;"> <i class="fas fa-sign-out-alt" style="z-index: 1;font-size:60px; color:white; cursor: pointer; position: absolute; top: 1%; right:2%;"> <br>' + '<p style="font-family:' +" 'Poiret One'" + ', cursive; font-size: 20px; text-align: center;"> LOGOUT </p> </i> </a>');
    }
}
