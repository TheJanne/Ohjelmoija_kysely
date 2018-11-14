<?php
        $host = "localhost";
        $dbname = "programmer_query";
        $tablename = "programmer_data";
        $user = "root";
        $password = "";
        
        $database = new PDO("mysql:host=$host;dbname=$dbname;charset=utf8;", $user, $password);
        $database->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
        
        $query = sprintf("SELECT age, gender, experience_years, programming, "
                . "web_frontend, web_backend, mobile_native, mobile_hybrid, "
                . "relational_database, nosql_database FROM $tablename");
        
        $result = $database->query($query);

        foreach($result as $row)
        {
            $data[] = $row; 
        }        
        
        print json_encode($data);
        header("Content-type:application/json");