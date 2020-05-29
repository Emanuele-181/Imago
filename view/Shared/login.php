<html>
    <head>
        <script src="../Script/cookies.js"></script>
        <link rel="stylesheet" href="../../css/Bootstrap/css/bootstrap.css">
    </head>
    <body class = " bg-dark text-light">
        <?php

            $db = mysql_connect('localhost') OR die(mysql_error());
            if($db == FALSE){
                echo "Impossibile connettersi al DB";
            }
            mysql_select_db("my_imago2020");

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
                $q_check = sprintf("SELECT * FROM utenti WHERE email='%s' AND password='%s'",
                                mysql_real_escape_string($email),
                                mysql_real_escape_string($password));
                $result = mysql_query($q_check);
                if($line = mysql_fetch_array($result, MYSQL_ASSOC)){
                    if($ricordami != ''){
                        echo "<script>localLoginTrue()</script>";
                        echo "<h1 class = 'display-4'>Login effettuato con successo. Verrai ricordato nelle prossime sessioni</h1>";
                    }
                    else{
                        echo "<script>sessionLoginTrue()</script>";
                        echo "<h1 class = 'display-4>Login effettuato con successo.</h1>";
                    }
                }
                else{
                    echo "<h1 class = 'display-4>Non sei registrato!</h1>
                    <a class='btn btn-outline-warning' href=../Sito/HomeSito.html>HOME</a>";
                }
            }

        ?>
        
    </body>
</html>