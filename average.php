<?php
    $host = "localhost";
    $dbname = "programmer_query";
    $tablename = "programmer_data";
    $user = "root";
    $password = "";

    $database = new PDO("mysql:host=$host;dbname=$dbname;charset=utf8;", $user, $password);
    $database->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);

    $query = sprintf("SELECT AVG(age) AS avg_age, 
                    AVG(experience_years) AS avg_experience_years,
                    AVG(programming) AS avg_programming, 
                    AVG(web_frontend) AS avg_web_frontend,
                    AVG(web_backend) AS avg_web_backend,
                    AVG(mobile_native) AS avg_mobile_native,
                    AVG(mobile_hybrid) AS avg_mobile_hybrid,
                    AVG(relational_database) AS avg_relational_database,
                    AVG(nosql_database) AS avg_nosql_database 
                    FROM $tablename");

    $result = $database->query($query);

    foreach($result as $row)
    {
        $data[] = $row;
    }

    print json_encode($data);
    header("Content-type:application/json");