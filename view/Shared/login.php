<html>
    <head>
        <script src="../Script/cookies.js"></script>
    </head>
    <body>
        <?php

            $db = pg_connect("host=localhost port=5432 dbname=Imago_test user=postgres password=password")
            or die('Errore! Impossibile connettersi al DB: ' . pg_last_error());

            /* Reindirizzamento alla pagina principale se la pagina
             * non è stata richiamata dal bottone di registrazione */
            if(!(isset($_POST['bottoneLogin']))){
                header("Location: ../Pre/PreIndice.html");
            }
            /* Controlo dei dati del login */
            else{
                $email = $_POST['email'];
                $password = $_POST['password'];
                $ricordami = isset($_POST['ricordami'])?$_POST['ricordami']:'';
                $q_check = "SELECT * FROM utente WHERE email=$1 AND password=$2";
                $result = pg_query_params($db, $q_check, array($email, $password));
                if($line = pg_fetch_array($result, null, PGSQL_ASSOC)){
                    if($ricordami != ''){
                        echo "<script>localLoginTrue()</script>";
                        echo "<h1>Login effettuato con successo. Verrai ricordato nelle prossime sessioni</h1>";
                    }
                    else{
                        echo "<script>sessionLoginTrue()</script>";
                        echo "<h1>Login effettuato con successo.</h1>";
                    }
                }
                else{
                    echo "<h1>Non sei registrato!</h1>
                    <a href=../Sito/HomeSito.html>HOME</a>";
                }
            }

        ?>
        
    </body>
</html>