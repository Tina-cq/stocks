/**
 * Created by jingwan on 2017/8/22.
 */
$(function () {
    //仪表图
    $('#container01').highcharts({
        chart: {
            type: 'gauge',
            plotBackgroundColor: null,
            plotBackgroundImage: null,
            plotBorderWidth: 0,
            plotShadow: false
        },
        title: {
            text: ''
        },
        tooltip: {
            enabled: true,
            shadow: false,
            borderWidth:0,
            backgroundColor:"rgba(235,235,235,0.6)",
            borderRadius:5,
            style: {
                "color": "#a6aebd"
            }
        },
        credits: {
            enabled:false
        },
        exporting: {
            enabled:false
        },
        plotOptions: {   //指针
            gauge: {
                dial: {
                    radius: '70%',  //指针长度
                    backgroundColor: '#e9e9e9',
                    borderWidth: 0,
                    baseWidth: 10,
                    topWidth: 1,
                    baseLength: 0, // of radius
                    rearLength: 0

                },
                pivot:{  //轴的中心点
                    backgroundColor:"#dedbdb"

                }
            }


        },

        pane: {
            size: '90%',
            startAngle: -140,
            endAngle: 140,
            background: [{
                backgroundColor: "#fff",
                borderWidth: 3,
                borderColor: '#ececec'
            }]

        },
        xAxis: {
            lineColor: '#d4dae4',
            lineWidth: 1

        },
        // the value axis
        yAxis: {    //刻度线
            min: 0,
            max: 100,
            minorTickInterval: 'auto',
            minorTickWidth: 0,
            minorTickLength: 0,
            minorTickPosition: 'outside',
            minorTickColor: '#e7e7e7',
            tickPixelInterval: 60,
            tickWidth: 1,
            tickPosition: 'inside',
            tickLength: 13,
            tickColor: '#e7e7e7', //刻度线颜色
            lineColor:"#fff",
//        tickPixelInterval: 60,
//        tickPosition: 'inside',
//        lineWidth: 0,
            offset: -70,
            labels: {
                distance: 55,//刻度位置
                rotation: 'auto',
                style:{
                    color:"#70839f"
                }

            },
            plotBands: [{   //弧度
                from: 0,
                to: 100,
                borderWidth: 0,
                color: {
                    linearGradient: {x1: 0, y1: 0, x2: 1, y2: 0},
                    stops: [
                        [0, '#2a9df5'],
                        //[0.5, '#ff9c02'],
                        [1, '#ff4943']
                    ]
                },
                outerRadius: '80%',
                thickness: '25%'
            }]
        },
        series: [{
            name: 'Speed',
            data: [70],
            dataLabels: {
                enabled: false
            }
        }]
    });
});