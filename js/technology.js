/**
 * Created by jingwan on 2017/8/22.
 */
$("#technology").highcharts({
    chart: {
        type: 'bar'

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
    //pane: {
    //    size: '15%'
    //},
    /* subtitle: {
     text: 'Source: <a href="https://en.wikipedia.org/wiki/World_population">Wikipedia.org</a>'
     },*/
    xAxis: {
        categories: ['均线指标', '平滑移动', '强弱指标', '随机指标'],
        lineColor:"#ebebeb",
        tickLength : 0,
        labels:{
            style: {
                color: '#70839f',
                fontSize:13
            },
            x: -3,

        },
        //gridLineWidth: 0,
        //tickInterval: 1
    },
    yAxis: {
        //tickLength : 0,
        //tickInterval: 1,
        max:110,
        gridLineWidth: 0,
        lineWidth: 1,
        lineColor:"#ebebeb",
        title: {
            text: '',
            align: 'high'
        },
        tickAmount:12,  //Y轴刻度数
        labels:{
            style: {
                color: '#70839f'
            }

        }

    },

    tooltip: {
        shared: true,
        useHTML: true,
        headerFormat: '{point.key}<table>',
        pointFormat: '<tr><td style="">净值: </td>' +
        '<td style="text-align: right"><b>{point.y}</b></td></tr>'+
        '<tr><td style="">占比: </td>' +
        '<td style="text-align: right"><b>整个市值</b></td></tr>',
        footerFormat: '</table>',
        valueDecimals: 2,
        //crosshairs: true
        shadow: false,
        borderWidth:0,
        backgroundColor:"rgba(235,235,235,0.6)",
        borderRadius:5,
        style: {
            "color": "#a6aebd"
        }
    },
    plotOptions: {
        bar: {
            dataLabels: {
                enabled: true,
                align: 'left',
                x:10,
                inside: true,
                style: {
                    color: '#fff',
                    fontSize:12,
                   "textOutline": "1px 1px contrast #0069b3"
                },

                formatter:function(){
                    //console.log(this.point.index)
                    var index=this.point.index;
                    var arr=["MA","MACD","RSI","KDJ"];
                    for(var i=0;i<arr.length;i++){
                        return arr[index];
                    }
                }
            }
        },
        series: {
            pointPadding:0.15
        }
    },
    legend: {
        enabled: false
    },

    series: [{
        name:'',
        color: '#0069b3',
        data: [0,59,74,80],
        dataLabels: {
            enabled: true,
            style: {
                fontWeight: 'bold'
            }
        }
    }]
});