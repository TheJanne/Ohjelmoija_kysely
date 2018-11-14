$(document).ready(function(){
    $.ajax({
        url: "distribution.php",
        method: "GET",
        success: function(data)
        {
            console.log(data);
            
            //Find the canvas elements in the html
            var genderCanvas = $("#gender");
            var experienceCanvas = $("#experience");
            var ageCanvas = $("#age");
            var generalCanvas = $("#general");
            var frontendCanvas = $("#frontend");
            var backendCanvas = $("#backend");
            var nativeCanvas = $("#native");
            var hybridCanvas = $("#hybrid");
            var relationCanvas = $("#relatio");
            var noCanvas = $("#no");
            
            var gender = [0, 0];            
            var age = [0, 0, 0];            
            var xp = [0, 0, 0, 0];
            
            //Loop throught the data and put the in the arrays, data value of 1 is in index of 0 and 2 in 1 etc.
            for(var i in data)
            {
                if(parseInt(data[i].age) < 30)
                {
                    age[0]++;
                }
                else if(parseInt(data[i].age < 51))
                {
                    age[1]++;
                }
                else
                {
                    age[2]++;
                }                
                if(parseInt(data[i].gender) === 1)
                {
                    //add 1 more to men
                    gender[0]++;
                }
                else if(parseInt(data[i].gender) === 2)
                {
                    //Add 1 more to to women
                    gender[1]++;
                }                
                if(parseInt(data[i].experience_years) < 6)
                {
                    xp[0]++;
                }
                else if(parseInt(data[i].experience_years) < 11)
                {
                    xp[1]++;
                }
                else if(parseInt(data[i].experience_years) < 15)
                {
                    xp[2]++;
                }
                else
                {
                    xp[3]++;                    
                }
            }
            
            //Loopable data.
            //Contains all the data that has 1-5 range of value.
            var loopedData = 
               [[0,0,0,0,0], //0, Programming in general, shortly General
                [0,0,0,0,0], //1, Frontend
                [0,0,0,0,0], //2, Backend
                [0,0,0,0,0], //3, Native
                [0,0,0,0,0], //4, Hybrid
                [0,0,0,0,0], //5, relation
                [0,0,0,0,0]];//6, noSql
            
            //Loop through the data and set them into the array of arrays above.
            for(var i = 0; i < data.length; i++)//
            {
                for(var y = 0; y < 7; y++)
                {            //0 4        
                    if(parseInt(data[i][y+3]) === 1)
                    {
                        loopedData[y][0]++;
                    }
                    else if(parseInt(data[i][y+3]) === 2)
                    {
                        loopedData[y][1]++;
                    }
                    else if(parseInt(data[i][y+3]) === 3)
                    {
                        loopedData[y][2]++;
                        
                    }
                    else if(parseInt(data[i][y+3]) === 4)
                    {
                        loopedData[y][3]++;
                    }
                    else if(parseInt(data[i][y+3]) === 5)
                    {                        
                        loopedData[y][4]++;
                    }
                }
            }
            
            var genderChart = new Chart(genderCanvas, {
                type: 'doughnut', 
                data: 
                {
                    labels: ["Miehet", "Naiset"], 
                    datasets: 
                    [{ 
                        backgroundColor: [ "#8c8ff2", "#ef958d" ], 
                        data: [gender[0], gender[1]] 
                    }]
                }
            });
            var experienceChart = new Chart(experienceCanvas, {
                type: "doughnut",
                data: 
                {
                    labels: ["0-5", "6-10", "11-15", "Yli 15"],
                    datasets: 
                    [{ 
                        backgroundColor: [ "#96eab4", "#1cdb61", "#108239", "#05210f" ], 
                        data: [xp[0], xp[1], xp[2], xp[3]] 
                    }]
                }                
            });
            
            var ageChart = new Chart(ageCanvas, {
                type: "doughnut",
                data:
                {
                    labels: ["15-30", "31-50", "51-65"],
                    datasets: 
                    [{
                            backgroundColor: ["#3ec953", "#5db0f4", "#ea815b"],
                            data: [age[0], age[1], age[2]]
                    }]
                }
            });
            
            //a function that returns a generated chart by given arguments.
            function createChart(name, newType, newLabel, newBackgroundColor, newData)
            {
                return new Chart(name, { 
                    type: newType,
                    data: {
                        labels: ["1", "2", "3", "4", "5"],
                        datasets: 
                        [{
                                label: newLabel,
                                backgroundColor: newBackgroundColor,
                                data: [newData[0], newData[1], newData[2], newData[3], newData[4]]
                        }]
                    }
                });                
            }
            
            //Call the function with variables that are the charts.
            var generalChart = createChart(generalCanvas, "bar", "Ohjelmointi yleisellä tasolla", "#3ec953", loopedData[0]);
            var frontChart = createChart(frontendCanvas, "bar", "Web frontend", "#ed7b90", loopedData[1]);
            var backChart = createChart(backendCanvas, "bar", "Web backend", "#7983ea", loopedData[2]);
            var nativeChart = createChart(nativeCanvas, "bar", "Natiivi mobiili", "#7bedaa", loopedData[3]);
            var hybridChart = createChart(hybridCanvas, "bar", "Hybridi mobiili", "#e8b278", loopedData[4]);
            var relatioChart = createChart(relationCanvas, "bar", "Relaatiotietokannat", "#8defda", loopedData[5]);
            var noChart = createChart(noCanvas, "bar", "NoSQL-tietokannat", "#e8d984", loopedData[6]);
        },
        
        error: function(data)
        {            
            console.log(data);
        }        
    });
    
});