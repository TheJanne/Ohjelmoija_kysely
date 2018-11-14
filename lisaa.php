<?php
    try
    {
        $host = "localhost";
        $dbname = "programmer_query";
        $tablename = "programmer_data";
        $user = "root";
        $password = "";
        
        $database = new PDO("mysql:host=$host;dbname=$dbname;charset=utf8;", $user, $password);
        $database->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
        
        //Get the values from the post and filter them.
        $age = filter_input(INPUT_POST, "age", FILTER_SANITIZE_NUMBER_INT);
        $gender = filter_input(INPUT_POST, "gender", FILTER_SANITIZE_NUMBER_INT);
        
        $experience = filter_input(INPUT_POST, "experience", FILTER_SANITIZE_NUMBER_INT);
        $general = filter_input(INPUT_POST, "general", FILTER_SANITIZE_NUMBER_INT);
        
        $frontend = filter_input(INPUT_POST, "frontend", FILTER_SANITIZE_NUMBER_INT);
        $backend = filter_input(INPUT_POST, "backend", FILTER_SANITIZE_NUMBER_INT);
        
        $natiivi = filter_input(INPUT_POST, "natiivi", FILTER_SANITIZE_NUMBER_INT);
        $hybrid =  filter_input(INPUT_POST, "hybridi", FILTER_SANITIZE_NUMBER_INT);
        
        $sql = filter_input(INPUT_POST, "sql", FILTER_SANITIZE_NUMBER_INT);
        $nosql = filter_input(INPUT_POST, "nosql", FILTER_SANITIZE_NUMBER_INT);
        
        //Prepare the query.
        $query = $database->prepare("INSERT INTO $tablename("
                . "age, gender, experience_years, "
                . "programming, web_frontend, web_backend, "
                . "mobile_native, mobile_hybrid, "
                . "relational_database, nosql_database) "
                
                . "VALUES (:age, :gender, :experience,"
                . ":programming, :web_frontend, :web_backend,"
                . ":mobile_native, :mobile_hybrid,"
                . ":sql, :nosql)");
        
        //Binding values that we got from posts.
        $query->bindValue(":age", $age, PDO::PARAM_INT);
        $query->bindValue(":gender", $gender, PDO::PARAM_INT);
        
        $query->bindValue(":experience", $experience, PDO::PARAM_INT);
        $query->bindValue(":programming", $general, PDO::PARAM_INT);
        
        $query->bindValue(":web_frontend", $frontend, PDO::PARAM_INT);
        $query->bindValue(":web_backend", $backend, PDO::PARAM_INT);
        
        $query->bindValue(":mobile_native", $natiivi, PDO::PARAM_INT);
        $query->bindValue(":mobile_hybrid", $hybrid, PDO::PARAM_INT);
        
        $query->bindValue(":sql", $sql, PDO::PARAM_INT);
        $query->bindValue(":nosql", $nosql, PDO::PARAM_INT);
        
        if($query->execute())
        {
            Header("Location: insert.php");
            session_start();
            $_SESSION["lisäys"] = true;
        }
        else{
            print_r("ERROR: " . $ex->getMessage());
        }
        
    } 
    
    catch (Exception $ex) 
    {
        print "Yhteys tietokantaan rikki. " . $ex->getMessage();
    }