<html>
    <head></head>
    <body>
        <?php

            $db = pg_connect("host=localhost port=5432 dbname=Imago_test user=postgres password=manuvb")
            or die('Errore! Impossibile connettersi al DB: ' . pg_last_error());

            /* Reindirizzamento alla pagina principale se la pagina
             * non è stata richiamata dal bottone di registrazione */
            if(!(isset($_POST['bottoneRegistrazione']))){
                header("Location: ../Pre/PreIndice.html");
            }
            /* Controllo che non ci sia già un utente registrato 
             * con la stessa email */
            else{
                
            }

        ?>
    </body>
</html>