//chart

 Chart.defaults.global.animationSteps = 100;

 Chart.defaults.global.tooltipYPadding = 10;
 Chart.defaults.global.tooltipCornerRadius = 3;

 Chart.defaults.global.tooltipTitleFontColor = "#FFFFFF";
 Chart.defaults.global.tooltipFillColor = "#000";
 Chart.defaults.global.animationEasing = "easeOutBounce";
 Chart.defaults.global.responsive = true;
 Chart.defaults.global.scaleLineColor = "#333c4c";
 Chart.defaults.global.scaleFontSize = 16;
 var lineChartData = {
     labels: ["19 мар", "26 мар", "02 апр", "09 апр", "16 апр", "23 апр"],

     datasets: [{
         fillColor: "transparent",
         strokeColor: "#4c5a6c",
         pointColor:"#4c5a6c",
         fontColor: "white",
         data: [2, 4, 1, 8,4,6]
     }]
 }

 var ctx = document.getElementById("canvas").getContext("2d");

 var LineChartDemo = new Chart(ctx).Line(lineChartData, {
     pointDotRadius: 3,
     bezierCurve: false,
     scaleShowVerticalLines: false,
     scaleGridLineColor: "#333c4c"
 });


var lineChartData2 = {
    labels: ["19 мар", "26 мар", "02 апр", "09 апр", "16 апр", "23 апр"],

    datasets: [{
        fillColor: "transparent",
        strokeColor: "#4c5a6c",
        pointColor:"#4c5a6c",
        fontColor: "white",
        data: [4, 3, 5, 8,4,6]
    }]
}

var ctx2 = document.getElementById("myLine").getContext("2d");

var LineChartDemo2 = new Chart(ctx2).Line(lineChartData2, {
    pointDotRadius: 3,
    bezierCurve: false,
    scaleShowVerticalLines: false,
    scaleGridLineColor: "#333c4c"
});





// var ctx = document.getElementById("myLine").getContext('2d');
//
// var chart = new Chart(ctx, {
//     // The type of chart we want to create
//     type: 'line',
//
//
//     // The data for our dataset
//     data: {
//         labels: ["January", "February", "March", "April", "May", "June", "July"],
//         datasets: [{
//
//             backgroundColor: '#fff',
//             borderColor: 'rgb(255, 99, 132)',
//             data: [0, 10, 5, 2, 20, 10, 45],
//         }]
//     },
//
//     // Configuration options go here
//     options: {
//         bezierCurve: false
//     }
// });
//
// var ctx = document.getElementById("myFirst").getContext('2d');
//
// var chart2 = new Chart(ctx, {
//     // The type of chart we want to create
//     type: 'line',
//
//     // The data for our dataset
//     data: {
//         labels: ["January", "February", "March", "April", "May", "June", "July"],
//         datasets: [{
//
//             backgroundColor: 'rgb(0,40,99,0)',
//             borderColor: 'rgb(255, 99, 132)',
//             bezierCurve: false,
//             data: [0, 10, 5, 2, 20, 10, 45],
//
//         }]
//     },
//
//     // Configuration options go here
//     options: {}
// });
//

