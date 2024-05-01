
const docSearch=document.getElementById(`doc-search`);
const docSubmit=document.getElementById('doc-submit');
const tohide=document.getElementById('tohide');
const tohid=document.getElementById('tohid');
const tohi=document.getElementById('tohi');

let chart;
        // Function to fetch data from the Alpha Vantage API
      
//   monthly
   docSubmit.addEventListener('click',async(e)=>{      
    var month=document.getElementById('month');

    if(tohide.style.display==="none")
    {
        tohide.style.display="inline";
    }
    if(tohid.style.display==="none")
    {
        tohid.style.display="inline";
    }
    if(tohi.style.display==="none")
    {
        tohi.style.display="inline";
    }
 
 
   
        e.preventDefault();

        const symbol = docSearch.value.toUpperCase();
        const ctx = document.getElementById("mchart").getContext("2d");
        // Fetch stock data from Alpha Vantage API
        try {
            const response = await fetch(`https://www.alphavantage.co/query?function=TIME_SERIES_MONTHLY&symbol=${symbol}&apikey=VRZRXA8MCGTTDXBG`);
            const data = await response.json();

            // Extract dates and closing prices from the response
            const dates = Object.keys(data["Monthly Time Series"]).reverse();
            const prices = dates.map((date) => parseFloat(data["Monthly Time Series"][date]["4. close"]));

            // Create a CanvasJS chart
            chart = new CanvasJS.Chart("month", {
                title: {
                    text: `Monthly Stock Prices for ${symbol}`,
                },
                axisX: {
                    title: "Date",
                },
                axisY: {
                    title: "Price",
                },
                data: [{
                    type: "line",
                    dataPoints: dates.map((date, index) => ({
                        x: new Date(date),
                        y: prices[index],
                    })),
                }],
            });

            chart.render(); // Render the chart
        } catch (error) {
            console.error("Error fetching data:", error);
        }
    });
       
    // weekly
    docSubmit.addEventListener('click',async(e)=>{      
        var weekly=document.getElementById('weekly');
     
     
       
            e.preventDefault();
    
            const symbol = docSearch.value.toUpperCase();
            const ctx = document.getElementById("wchart").getContext("2d");
           
                // Fetch weekly stock data from Alpha Vantage API (Replace with your API URL)
                try {
                    const response = await fetch(`https://www.alphavantage.co/query?function=TIME_SERIES_WEEKLY&symbol=${symbol}&apikey=VRZRXA8MCGTTDXBG`);
                    const data = await response.json();

                    // Extract dates and closing prices from the response
                    const dates = Object.keys(data["Weekly Time Series"]).reverse();
                    const prices = dates.map((date) => parseFloat(data["Weekly Time Series"][date]["4. close"]));

                    // Create a CanvasJS chart
                    chart = new CanvasJS.Chart("weekly", {
                        title: {
                            text: `Weekly Stock Prices for ${symbol}`,
                        },
                        axisX: {
                            title: "Date",
                        },
                        axisY: {
                            title: "Price",
                        },
                        data: [{
                            type: "line",
                            dataPoints: dates.map((date, index) => ({
                                x: new Date(date),
                                y: prices[index],
                            })),
                        }],
                    });

                    chart.render(); // Render the chart
                } catch (error) {
                    console.error("Error fetching data:", error);
                }
            });
       
            // intraday

            
    docSubmit.addEventListener('click',async(e)=>{      
        var intraday=document.getElementById('intraday');
     
     
       
            e.preventDefault();
    
            const symbol = docSearch.value.toUpperCase();
            const ctx = document.getElementById("ichart").getContext("2d");
           
                // Fetch weekly stock data from Alpha Vantage API (Replace with your API URL)
                try {
                    const response = await fetch(`https://www.alphavantage.co/query?function=TIME_SERIES_INTRADAY&symbol=${symbol}&interval=5min&apikey=VRZRXA8MCGTTDXBG`);
                    const data = await response.json();

                    // Extract timestamps and closing prices from the response
                    const timestamps = Object.keys(data["Time Series (5min)"]).reverse();
                    const prices = timestamps.map((timestamp) => parseFloat(data["Time Series (5min)"][timestamp]["4. close"]));

                    // Create a CanvasJS chart
                    chart = new CanvasJS.Chart("intraday", {
                        title: {
                            text: `Intraday Stock Prices for ${symbol}`,
                        },
                        axisX: {
                            title: "Time",
                        },
                        axisY: {
                            title: "Price",
                        },
                        data: [{
                            type: "line",
                            dataPoints: timestamps.map((timestamp, index) => ({
                                x: new Date(timestamp),
                                y: prices[index],
                            })),
                        }],
                    });

                    chart.render(); // Render the chart
                } catch (error) {
                    console.error("Error fetching data:", error);
                }

                
setInterval(()=>{
    docSearch.value="";
},5000)
            });


