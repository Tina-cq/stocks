/**
 * Created by jingwan on 2017/8/22.
 */
$("#market").highcharts({
  colors: ['#2e79b3', '#ff424a'],
    chart: {
        type: 'areaspline'
    },
    title: {
        text: ''
    },
    credits: {
        enabled:false
    },
    exporting: {
        enabled:false
    },
    pane: {
        size: '100%'
    },
    plotOptions: {
        series: {
            marker: {
                enabled: false
            }
        }
    },
    //plotOptions: {
    //    area: {
    //        fillOpacity: 1, // 指定所有面积图的透明度
    //        marker: {
    //            enabled: false,
    //            symbol: 'circle',
    //            radius: 2,
    //            states: {
    //                hover: {
    //                    enabled: true
    //                }
    //            }
    //        }
    //    }
    //},
    legend: {
        align: 'center', //水平方向位置
        verticalAlign: 'top', //垂直方向位置
        itemStyle: {
            color: '#b1c0d6',
            fontSize:12,
            fontWeight: 'normal'
        }
        //x: 0, //距离x轴的距离
        // y: 100 //距离Y轴的距离
    },
    xAxis: {
        categories: ["17/02","17/03","17/04","17/05","17/06"],
        lineColor:"#eaeaeb",
        tickWidth:0,
        labels:{
            style: {
                color: '#70839f'
            }
        },
        /*plotBands: [{ // visualize the weekend
         from: 4.5,
         to: 6.5,
         color: 'rgba(68, 170, 213, .2)'
         }]*/
    },
    yAxis: {
        gridLineWidth: 1,
        lineWidth: 1,
        gridLineColor: '#ebebeb',
        lineColor:"#eaeaeb",
        title: {
            text: ''
        },
        labels:{
            style: {
                color: '#70839f'
            }
        },
        max:5, // 定义Y轴 最大值
        min:-10, // 定义最小值
        //tickInterval: 1,
        //tickPositions: [-10, -5, 0, 5], // 指定竖轴坐标点的值
        tickAmount:4   //Y轴刻度数
    },
    tooltip: {
        shared: true,
        valueSuffix: '%',
        shadow: false,
        borderWidth:0,
        backgroundColor:"rgba(235,235,235,0.6)",
        borderRadius:5,
        style: {
            "color": "#a6aebd"
        }
    },


    series: [{
        name: '股价累计行跌幅 (%)',
        data: [0,2,-4,3,5],
        fillColor: {       // 设置渐变的填充颜色
            linearGradient: {
                x1: 0,
                y1: 0,
                x2: 0,
                y2: 1
            },
            stops: [
                [0, "rgba(20,149,235,0.01)"],
                [1,"#fff"]
            ]
        },
        //fillOpacity: 0.1

    }, {
        name: '上证指数累计涨跌幅 (%)',
        data: [4,3,1,3,5],
        fillColor: {       // 设置渐变的填充颜色
            linearGradient: {
                x1: 0,
                y1: 0,
                x2: 0,
                y2: 1
            },
            stops: [
                [0, "rgba(255,66,74,0.01)"],
                [1,"#fff"]
            ]
        },
        //fillOpacity: 0.1
    }]
});