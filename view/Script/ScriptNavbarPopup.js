function toggleLogin(){
    document.querySelector(".overlay").classList.toggle("open"); 
}
function toggleLogin2(){
    document.querySelector(".overlay").classList.toggle("open"); 
}


function carrelloPopup(){
    document.querySelector(".contcarr").classList.toggle("open"); 
}
function riuscito(){
    alert("Pagamento effettuato con successo!");
}

function checkNome(){
    if(!isNaN(document.formRegistrazione.nome.value)) {
        alert("Attenzione Il Nome NON può essere un numero!");
        return false;
    }
    return true;
}

function checkCognome(){
    if(!isNaN(document.formRegistrazione.cognome.value)) {
        alert("Attenzione Il Cognome NON può essere un numero!");
        return false;
    }
    return true;
}

function validazioneForm(){
    if(document.formRegistrazione.nome.value=="" || document.formRegistrazione.cognome.value=="" || document.formRegistrazione.email.value=="" || document.formRegistrazione.password.value=="") {
        alert("Verifica che tutti i campi siano compilati!");
        return false;

    }

    alert("Dati Inseriti Correttamente!");
    return true;
}

function checkPassowrd(){
    var password= document.formRegistrazione.password.value;
    var presenzaNumero=false;
    for(i=0;i<=9;i++) {
        if(password.indexOf(i) >=0) {
            presenzaNumero=true;
        }
    }

    if(presenzaNumero==false){
        alert("inserisci almeno un numero nella password!!");
        return false;
    }
    
    return true;
        
    
}


