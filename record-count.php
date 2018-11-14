<?php
    $host = "localhost";
    $dbname = "programmer_query";
    $tablename = "programmer_data";
    $user = "root";
    $password = "";

    $database = new PDO("mysql:host=$host;dbname=$dbname;charset=utf8;", $user, $password);
    $database->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
    
    $query = sprintf("SELECT COUNT(*) AS record_count FROM $tablename");    
    
    $tietue = $database->query($query);
    
    foreach($tietue as $row)
    {
        $recordCount[] = $row; 
    }
    
    //echo $recordCount;
    print json_encode($recordCount);
    header("Content-type:application/json");