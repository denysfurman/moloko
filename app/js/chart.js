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
         fontColor: "#ffffff",
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
    options: {
        legend: {
            labels: {
                // This more specific font property overrides the global property
                fontColor: '#fff'
            }
        }
    },

    datasets: [{
        fillColor: "transparent",
        strokeColor: "#4c5a6c",
        pointColor:"#4c5a6c",
        fontColor: "white",
        data: [ 2.55,2.70, 2.50,2.85, 2.50,2.80]
    }]
}

var ctx2 = document.getElementById("myLine").getContext("2d");

var LineChartDemo2 = new Chart(ctx2).Line(lineChartData2, {
    pointDotRadius: 3,
    bezierCurve: false,
    scaleShowVerticalLines: false,
    scaleGridLineColor: "#333c4c"
});





