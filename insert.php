<?php session_start(); ?>
<!DOCTYPE html>
<html>
    <head>
        <title>Ohjelmoija kysely</title>
        <link rel="stylesheet" href="css/styling.css" type="text/css" />        
    </head>
    
    <body>
    <h1>Ohjelmoijakysely</h1>
    <p id="recordCount"></p>
    <?php 
    if(isset($_SESSION["lisäys"]))
    {
        print "<p>Tietojen lisäys tietokantaan onnistui.</p>";
        session_destroy();
    }    
    ?>
    
    <script src="https://code.jquery.com/jquery-3.3.1.min.js" crossorigin="anonymous"></script>
    <script src="js/records.js"></script>    
    <p><a href="distribution.html">Jakauma</a></p>
    <p><a href="average.html">Keskiarvot</a></p>
    </body>
</html>

