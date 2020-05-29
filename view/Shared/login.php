<html>
    <head>
        <script src="../Script/cookies.js"></script>
        <link rel="stylesheet" href="../../css/Bootstrap/css/bootstrap.css">
    </head>
    <body class = " bg-dark">
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
                        echo "<h1 class='display-4 text-center text-light'>Login effettuato con successo. Verrai ricordato nelle prossime sessioni</h1>
                                <center>
                                <img calss='justify-content-center' src='../../utility//Img//green-tick.png' height='200px'>
                                </center>
                                <center>
                                <a class='btn btn-outline-warning' style = 'margin-top: 25px;' href=../Sito/HomeSito.html>Torna alla HOME</a>
                                </center>";
                    }
                    else{
                        echo "<script>sessionLoginTrue()</script>";
                        echo "<h1 class='display-4 text-center text-light'>Login effettuato con successo.</h1>
                                <center>
                                <img calss='justify-content-center' src='../../utility//Img//green-tick.png' height='200px'>
                                </center>
                                <center>
                                <a class='btn btn-outline-warning' style = 'margin-top: 25px;' href=../Sito/HomeSito.html>Torna alla HOME</a>
                                </center>";
                    }
                }
                else{
                    echo "<h1 class='display-4 text-center text-light'>Non sei registrato!</h1>
                            <center>
                            <img calss='justify-content-center' src='../../utility//Img//red-x.png' height='200px'>
                            </center>
                            <center>
                            <a class='btn btn-outline-warning' style = 'margin-top: 25px;' href=../Sito/HomeSito.html>Torna alla HOME</a>
                            </center>";
                            
                }
            }

        ?>
        
    </body>
</html>