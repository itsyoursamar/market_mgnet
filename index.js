








// search graph only
// const search = document.getElementById("search");
// const searchClick = document.getElementById("searchClick");
// const writeHere = document.getElementById("writeHere");
// if(search.value=='')
// {
//   alert('Please Seach your desired chart');
// }
// searchClick.addEventListener("click", () => {
//   const apiUrl = `https://www.alphavantage.co/query?function=TIME_SERIES_INTRADAY&symbol=${search.value}&interval=5min&apikey=VRZRXA8MCGTTDXBG`;

//   fetch(apiUrl)
//     .then((response) => {
//       if (!response.ok) {
//         throw new Error("Network response was not ok");
//       }

//       return response.json();
//     })
//     .then((data) => {
//       console.log(data);
//       const rawData = data; // Replace 'yourData' with the actual data
// const timeSeriesData = rawData['Time Series (5min)'];
//    console.log(timeSeriesData);

//    const timestamps = Object.keys(timeSeriesData).reverse(); // Reverse to show recent data first
//    const closingPrices = timestamps.map(timestamp => parseFloat(timeSeriesData[timestamp]['4. close']));
//    const stockChartCanvas = document.getElementById('chart').getContext('2d');

//    // Create a Chart.js chart
//    new Chart(stockChartCanvas, {
//        type: 'line',
//        data: {
//            labels: timestamps,
//            datasets: [{
//                label: `Intraday Stock Price for ${search.value}`,
//                data: closingPrices,
//                borderColor: 'blue',
//                fill: false,
//            }]
//        },
//        options: {
//            responsive: false,
//            maintainAspectRatio: true
//        }
//    });
// })
// .catch(error => {
//    console.error('Error fetching data:', error);
// });
// });
// // Include Chart.js script in your HTML file


// // Create a Chart.js chart


// async function fetchData() {
//     const apiKey = 'VRZRXA8MCGTTDXBG';
//     const apiUrl = `https://www.alphavantage.co/query?function=COPPER&interval=monthly&apikey=${apiKey}`;

//     try {
//         const response = await fetch(apiUrl);
//         const data = await response.json();
//         return data;
//     } catch (error) {
//         console.error('Error fetching data:', error);
//     }
// }

// Function to create a chart using Chart.js
// async function createChart() {
//     const data = await fetchData();

//     console.log(data);
//     if (!data || data['Error Message']) {
//         // Handle error or display a message
//         console.error('Error fetching data:', data['Error Message']);
//         return;
//     }

//     const dates = Object.keys(data.data.date).reverse();
//     console.log("dates"+dates);
//     const values = dates.map(date => parseFloat(data['Monthly Time Series'][date]['1. open']));
//     console.log("values"+values);
//     // Get a reference to the canvas element
//     const ctx = document.getElementById('gasChart').getContext('2d');
//     console.lo(ctx);
    // Create the chart
//     const myChart = new Chart(ctx, {
//         type: 'line',
//         data: {
//             labels: dates,
//             datasets: [{
//                 label: 'Copper Prices',
//                 data: values,
//                 borderColor: 'orange',
//                 borderWidth: 1,
//                 fill: false,
//             }]
//         },
//         options: {
//             responsive: true,
//             scales: {
//                 x: {
//                     type: 'time',
//                     time: {
//                         unit: 'month',
//                         displayFormats: {
//                             month: 'MMM YYYY'
//                         }
//                     },
//                     title: {
//                         display: true,
//                         text: 'Date'
//                     }
//                 },
//                 y: {
//                     title: {
//                         display: true,
//                         text: 'Price'
//                     }
//                 }
//             }
//         }
//     });
// }

// createChart();
  

// calci js

let input=document.getElementById("inputBox");

let btan =document.getElementsByClassName("btan");

let string=" ";

let arr=Array.from(btan);

arr.forEach((btan)=>{
   btan.addEventListener('click',(e)=>{   
  
    if(e.target.innerHTML == "=")
    {
         string=eval(string);
         input.value=string;
    }
   else if(e.target.innerHTML === "AC")
   {
        string=string.replace(string,"0");
       input.value=string;
   }
    
   else if(e.target.innerHTML === "Del")
   {     let len=string.length;
         string = string.substring(0,(len-1));
         input.value=string;
   }
    else{
        string +=e.target.innerHTML;
        input.value=string;
    }
   })
})





setTimeout(()=>{  
    const headline=document.getElementById('headline');
headline.style.display='none';

},3000);