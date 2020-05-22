<html>
    <head>
        <script src="../Script/cookies.js"></script>
    </head>
    <body>
        <?php

            $db = mysql_connect('localhost') OR die(mysql_error());
            if($db == FALSE){
                echo "Impossibile connettersi al DB";
            }
            mysql_select_db("my_imago2020");

            /* Reindirizzamento alla pagina principale se la pagina
             * non è stata richiamata dal bottone di registrazione */
            if(!(isset($_POST['bottoneRegistrazione']))){
                header("Location: ../Pre/PreIndice.html");
            }
            /* Controllo che non ci sia già un utente registrato 
             * con la stessa email */
            else{
                $email = $_POST['email'];
                $q_check = sprintf("SELECT * FROM utenti WHERE email='%s'", 
                                mysql_real_escape_string($email));
                $result = mysql_query($q_check);
                if($line = mysql_fetch_array($result, MYSQL_ASSOC)){
                    echo "<h1>Sei già registrato, esegui il login per accedere!</h1>
                    <a href=../Sito/HomeSito.html>HOME</a>";
                }
                else{
                    $nome=$_POST['nome'];
                    $cognome = $_POST['cognome'];
                    $password = $_POST['password'];
                    $q2=sprintf("INSERT INTO utenti VALUES ('%s', '%s', '%s', '%s')", 
                                mysql_real_escape_string($nome),
                                mysql_real_escape_string($cognome),
                                mysql_real_escape_string($email),
                                mysql_real_escape_string($password));
                    $data= mysql_query($q2);
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