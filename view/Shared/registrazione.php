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
            if(!(isset($_POST['bottoneRegistrazione']))){
                header("Location: ../Pre/PreIndice.html");
            }
            /* Controllo che non ci sia già un utente registrato 
             * con la stessa email */
            else{
                $email = $_POST['email'];
                $q_check = "SELECT * FROM utente WHERE email=$1";
                $result = pg_query_params($db, $q_check, array($email));
                if($line = pg_fetch_array($result, null, PGSQL_ASSOC)){
                    echo "<h1>Sei già registrato, esegui il login per accedere!</h1>
                    <a href=../Sito/HomeSito.html>HOME</a>";
                }
                else{
                    $nome=$_POST['nome'];
                    $cognome = $_POST['cognome'];
                    $password = $_POST['password'];
                    $q2="insert into utente values ($1, $2, $3, $4)";
                    $data=pg_query_params($db, $q2, array($email, $password, $nome, $cognome));
                    if($data){
                        echo '<script type="text/javascript">sessionLoginTrue();</script>'; /* In questo modo si è già loggati dopo la registrazione */
                        echo "<h1>Registrazione avvenuta con successo</h1>";
                        echo "<a href='../Sito/HomeSito.html'>HOME</a>";
                    }
                }
            }

        ?>
    </body>
</html>