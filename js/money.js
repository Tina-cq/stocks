$(function () {
    $('#money').highcharts({
        colors: ['#ed484e', '#2bbba2'],
        chart: {
            type: 'columnrange',
            //inverted: true
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
        subtitle: {
            text: ''
        },
        tooltip: {
            shadow: false,
            borderWidth:0,
            backgroundColor:"rgba(235,235,235,0.6)",
            borderRadius:5,
            style: {
                "color": "#a6aebd"
            }

        },
        xAxis: {
            categories: ['1月', '2月', '3月', '4月', '5月', '6月', '7月', '8月', '9月', '10月', '11月', '12月'],
            tickWidth:0,
            lineColor:"#e7e7e7",
            labels:{
                style: {
                    color: '#70839f'
                }

            }
        },
        yAxis: {
            gridLineWidth: 0,
            lineWidth: 1,
            lineColor:"#e7e7e7",
            title: {
                enabled: false
            },
            labels:{
                style: {
                    color: '#70839f',
                    fontSize:12
                },

                x:-6


            },
            min:0,
            max:2100,
            tickAmount:8   //Y轴刻度数
        },
        //tooltip: {
        //    valueSuffix: '°C'
        //},

        legend :{
            align: 'center', //水平方向位置
            verticalAlign: 'top', //垂直方向位置
            itemStyle: {
                color: '#9b9b9b',
                fontSize:12,
                fontWeight: 'normal'
            }
        },
        series: [{
            name: '买入',
            data: [
                [100, 1000],
                [1000,1300],
                [1280, 1700],
                [0,0 ],
                [0,0 ],
                [1805, 1900],
                [1800, 1997],
                [2000, 2100],
                [0, 0],
                [0,0 ],
                [0, 0],
                [1450, 2050]
            ]
        },
    {
        name: '卖出',
            data: [
        [0, 0],
        [0,0],
        [0, 0],
        [1700, 1900],
        [1800, 1980],
        [0, 0],
        [0, 0],
        [0, 0],
        [1670, 1840],
        [1560, 1970],
        [1905, 2100],
        [0, 0]
    ]
    }]

    });
});
