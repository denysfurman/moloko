var canvas = document.getElementById("myFirstChart");
var ctx = canvas.getContext('2d');

// Global Options:



Chart.defaults.global.animationEasing = "easeOutBounce";
Chart.defaults.global.responsive = true;
Chart.defaults.global.scaleLineColor = "#96a1b0";
Chart.defaults.global.defaultFontSize = 14;
Chart.defaults.global.defaultFontColor = "#96a1b0"
Chart.defaults.line.spanGaps = true;

// Data with datasets options
var data = {
    labels: ["19 мар", "26 мар", "02 апр", "09 апр", "16 апр", "23 апр"],
    datasets: [
        {

            fill: false,

            borderColor: "#96a1b0",
            fillColor: "transparent",
            strokeColor: "#96a1b0",
            pointColor:"#4c5a6c",
            bezierCurve: false,

            scaleShowVerticalLines: false,
            data: [2, 4, 1, 8,4,6]
        }
    ]
};
var data2 = {
    labels: ["19 мар", "26 мар", "02 апр", "09 апр", "16 апр", "23 апр"],
    datasets: [
        {

            fill: false,

            borderColor: "#96a1b0",
            fillColor: "transparent",
            strokeColor: "#96a1b0",
            pointColor:"#4c5a6c",
            bezierCurve: false,

            scaleShowVerticalLines: false,
            data: [4, 8, 1, 8,4,1]
        }
    ]
};
var myFirstChart = new Chart(ctx, {
    type: 'line',
    data: data,


    options: {
        responsive: true,
        title: false,
        scales: {
            yAxes: [{
                stacked: false,
                gridLines: {
                    display: true,
                    color: "#333c4c"
                }
            }],
            xAxes: [{
                gridLines: {
                    display: false
                }
            }]
        },
        legend: {
            display: false

        },
        elements: {
            line: {
                tension: 0 // disables bezier curves
            }
        }




    }
})


var canvas2 = document.getElementById("myFirstChart2");
var ctx2 = canvas2.getContext('2d');
var myFirstChart2 = new Chart(ctx2, {
    type: 'line',
    data: data2,


    options: {
        responsive: true,
        title: false,
        scales: {
            yAxes: [{
                stacked: false,
                gridLines: {
                    display: true,
                    color: "#333c4c"
                }
            }],
            xAxes: [{
                gridLines: {
                    display: false
                }
            }]
        },
        legend: {
            display: false

        },
        elements: {
            line: {
                tension: 0 // disables bezier curves
            }
        }




    }
});
var canvas3 = document.getElementById("myFirstChart3");
var ctx3 = canvas3.getContext('2d');
var myFirstChart2 = new Chart(ctx3, {
    type: 'line',
    data: data2,


    options: {
        responsive: true,
        title: false,
        scales: {
            yAxes: [{
                stacked: false,
                gridLines: {
                    display: true,
                    color: "#333c4c"
                }
            }],
            xAxes: [{
                gridLines: {
                    display: false
                }
            }]
        },
        legend: {
            display: false

        },
        elements: {
            line: {
                tension: 0 // disables bezier curves
            }
        }




    }
});

