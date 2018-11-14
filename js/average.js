$(document).ready(function(){   
    $.ajax({
        url: "average.php",
        method: "GET",
        
        success: function(data){
            console.log(data[0]);
			
            //Find the elements in HTML
            var ageCanvas = $("#canvas_age");	
            var xpCanvas = $("#canvas_experience");
            var programmingCanvas = $("#canvas_programming");
			
            //Round the data into a integer.
            var avg_age = Math.round(parseInt(data[0]["avg_age"]));
            var avg_xp = Math.round(parseInt(data[0]["avg_experience_years"]));
            var avg_hybrid = Math.round(parseInt(data[0]["avg_mobile_hybrid"]));
            var avg_native = Math.round(parseInt(data[0]["avg_mobile_native"]));
            var avg_nosql = Math.round(parseInt(data[0]["avg_nosql_database"]));
            var avg_programming = Math.round(parseInt(data[0]["avg_programming"]));
            var avg_relational = Math.round(parseInt(data[0]["avg_relational_database"]));
            var avg_backend = Math.round(parseInt(data[0]["avg_web_backend"]));
            var avg_frontend = Math.round(parseInt(data[0]["avg_web_frontend"]));
            
                        
            var ageChart = new Chart(ageCanvas, { 
                type: "horizontalBar",
                data: {
                    //This is empty because we dont need it but the Chart requires it anyway.
                    labels: [""],
                    datasets: 
                    [{
                            label: "Ikä (Keskiarvo)",
                            backgroundColor: "blue",
                            data: [avg_age]
                    }]
                }
            });  
            
            var xpChart = new Chart(xpCanvas, {
                type: "horizontalBar",
                data: {
                    //This is empty because we dont need it but the Chart requires it anyway.
                    labels: [""],
                    datasets: 
                    [{
                            label: "Kokemus vuosissa (Keskiarvo)",
                            backgroundColor: "azure",
                            data: [avg_xp]
                    }]
                    
                }
                
            });
            
            //Super chart containing all the necessary data.
            var programmingChart = new Chart(programmingCanvas, {
                type: "horizontalBar",
                data: {
                    //This is empty because we dont need it but the Chart requires it anyway.
                    labels: [""],
                    datasets: [{
                            label: "Ohjelmoinnin tasoja keskimääräsesti",
                            backgroundColor: "green",
                            data: [avg_programming]
                    },                    
                    {
                            label: "Web frontend",
                            backgroundColor: "blue",
                            data: [avg_frontend]
                    },                    
                    {
                            label: "Web backend",
                            backgroundColor: "red",
                            data: [avg_backend]
                    },                    
                    {
                            label: "Natiivi mobiili",
                            backgroundColor: "yellow",
                            data: [avg_native]
                    },                    
                    {
                            label: "Hybridi mobiili",
                            backgroundColor: "azure",
                            data: [avg_hybrid]
                    },                    
                    {
                            label: "Relaatio tietokannat",
                            backgroundColor: "violet",
                            data: [avg_relational]
                    },                    
                    {
                            label: "NoSQL-tietokannat",
                            backgroundColor: "cyan",
                            data: [avg_nosql]
                    }],
                    options: {
                        scales: {
                            xAxes: [{
                                display: true,
                                ticks: {
                                    beginAtZero: true,
                                    max: 5,
                                    stepSize: 0.5
                                }
                            }]
                        }
                    }
                }     
                
            });            
        },
        error: function(data){
            console.log(data);
            
        }
    });
    
});