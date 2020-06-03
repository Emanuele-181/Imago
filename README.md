# Imago
Progetto Imago
CSS
Bootstrap → Cartella framework Bootstrap, usato per Navbar, popup login e registrazione, messaggio di login e registrazione effettuato con successo e button pagina “Corso”.
Fontawesome → utilizzato per icone (es: login, logout della navbar, su tool…)
PreIndice.css → pagina di stile preindice.html

public	
img → cartella contenente immagini preindice.html
Store →  cartella contenente immagini caricate dall’utente per essere modificate in tool.htm
utility
img → cartella con immagini delle varie pagini html del sitoù
EmanueleCV.docx  → CV che si scarica in ChiSiamo.html
SalvatoreCV.doc →  CV che si scarica in ChiSiamo.html
JossefCV.docx  →  CV che si scarica in ChiSiamo.html

view 
Pre 
PreIndice.html → prima pagina di collegamento al sito
Script 
cookies.js → contiene funzioni che gestiscono il local e session storage della variabile “login” per permettere di entrare sulle pagine “Corso” e “Tool” che necessitano di autenticazione
flash.js →  contiene funzioni vue.js per la pagina Flash.html visualizzata tramite Shop.html
fotocamera.js →  contiene funzioni vue.js per la pagina Fotocamere.html visualizzata tramite Shop.html
obiettivo.js →  contiene funzioni vue.js per la pagina Obiettivi.html visualizzata tramite Shop.html
ScriptHome.js → contiene la funzione che permette l’apertura del popup “foto” nella pagina Home.html, tramite il click sulla polaroid
ScriptNavbarPopup.js → contiene la funzione che permette l’apertura del popup login sulla navbar
tool.js → contiene funzioni javascript e jquery che permettono l’aumento e la diminuzione dei valori CSS per le immagini caricate sulla pagina Tool.html, pronte alla modifica in tempo reale
vue.min.js → framework vue.js

Shared 
caricaImmagine.php → contiene funzioni php che permettono di caricare l’immagine, lato utente, sul Tool.html
login.php → contiene funzioni php che permettono all’utente di effettuare il login sul sito  e setta, opportunamente, la variabile “login” nel session storage
NavbarPoppup.html → contiene la navbar e il popup login-registrazione che verranno collegati alle pagine (Home.html, Corso.html, Tool.html, Storia.html, E-Shop.html, Fotocamere.html, Obiettivi.html, Flash.html, ChiSiamo.html)
Popup.html → contiene il popup che verrà caricato sulla pagine PreIndice.html, che si apre tramite il click sulla card “Registrati” 
registrazione.php → contiene funzioni php che permettono all’utente di effettuare la registrazione sul sito e setta, opportunamente, la variabile “login” nel session storage

Sito 
Antica.html → documento html che viene visualizzata in Storia.html tramite click sul button “Antica” con jquery
ChiSiamoSito.html →  pagina che contiene informazioni sugli sviluppatori del sito
CorsoSito.html → pagina che contiene i button dei moduli
Curiosita.html →  documento html che viene visualizzata in Storia.html tramite click sul button “Curiosità” con jquery
Flash.html → pagina html che visualizza i flah da acquistare nell’e-shop
Fotocamere.html → pagina html che visualizza le fotocamere da acquistare nell’e-shop
HomeSito.html → pagina home del sito che contiene le informazioni su che cos’è IMAGO
Moderna.html → documento html che viene visualizzata in Storia.html tramite click sul button “Moderna” con jquery
MODULO1.html → documento html che viene visualizzata in Corso.html tramite click sul button “MODULO1” con AJAX
MODULO2.html →  documento html che viene visualizzata in Corso.html tramite click sul button “MODULO2” con AJAX
MODULO3.html → documento html che viene visualizzata in Corso.html tramite click sul button “MODULO3” con AJAX
Obiettivi.html → pagina html che visualizza gli obiettivi da acquistare nell’e-shop 
Shop.html → pagina html che contiene i collegamenti a pagine html (Fotocamera, Flash ed Obiettivi) dell’e-shop
StoriaSito.html → pagina html che contiene informazioni sulla storia della fotografia
ToolSito.html → pagina che contiene un tool di modifica di un’immagine, caricata dall’utente,  in tempo reale
