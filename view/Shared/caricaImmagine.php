<html>
    <head>
    </head>
    <body>
        <?php

            /* Cartella di destinazione.
             * Cambiare per scegliere un'altra destinazione */
            $destinazione = "../../public/Store";
            
            /* $_FILES contiene tutte le informazioni del file caricato
             * devo specificare a quale input mi riferisco e l'informazione che voglio */
            $nome_file_dst = $destinazione . basename($_FILES["inputImg"]["name"]);

            /* Variabile che controlla se l'upload è andato a buon fine */
            $uploadOk = 1;

            /* Controlo se il file esiste già */
            if(file_exists($nome_file_dst)){
                echo "E' già presente un file con questo nome nel server";
                $uploadOk = 0;
            }

            /* Se il file va bene viene caricato altrimenti viene stampato un messaggio 
             * di errore */
            if($uploadOk == 0){
                echo "Il file non può essere caricato, ci scusiamo per il disagio";
            }
            else{
                
                /* Questa parte di codice può essere cambiata per provare a caricare 
                 * l'immagine direttamente nella pagina html*/
                if (move_uploaded_file($_FILES["inputImg"]["tmp_name"], $nome_file_dst)) {
                    echo "<script>
                            $('#Img').load(function(){
                                $image.attr('src'," . $nome_file_dst . ");
                            });
                        </script>";
                }
                else {
                    echo "Il file non può essere caricato, ci scusiamo per il disagio";
                }
            }



        ?>
        
    </body>
</html>