/* Insieme di funzioni che gestiscono i cookie*/


/* Cookie di accesso */

/* Un utente può loggarsi per una singola sessione oppure scegliere se
 * rimanere loggato anche se la sessione viene chiusa spuntando la checkbox
 * ricordami. */

/* Controlla se un utente è loggato */
function checkLogin(){

    if(sessionStorage.logged != 'true' && localStorage.logged != 'true'){
        document.getElementsByTagName("body")[0].style.filter = "blur(10px)";
        alert('Per accedere a questa pagina devi registrarti o fare il login.');
        if(window.history.length <= 2){
            window.location.replace('../Sito/HomeSito.html');
        }
        else{
            window.history.back()
        }
        return false;
    }
    else{
        document.getElementById("imglogin").style.display="none";
        document.getElementById("imglogout").style.display="flex";
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



