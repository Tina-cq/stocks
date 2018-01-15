var series = [];
series.push({
    name: '净资产收益率 (%)',
    color: '#2e79b3',
    type: 'column',
    data: [11,25,28,30],
    yAxis: 0
}, {
    name: '销售毛利率 (%)',
    color: '#2e79b3',
    type: 'line',
    marker: {
        symbol: 'circle'
    },
    yAxis: 0,
    data: [9,18,24,31]

});

yAxis = [{
    gridLineWidth: 1,
    lineWidth: 1,
    gridLineColor: '#ebebeb',
    lineColor:"#eaeaeb",
    title: {
        text: '',
        align: 'high',
        offset: 0,
        rotation: 0,
        y: -10,
        x: 25
    },
    labels:{
        style: {
            color: '#70839f'
        },
        x: -5,
        formatter: function(){
            return this.value + "%";
        },
    },

}, {
    title: {
        text: '',
    },
    labels: {
        x: 5,
        format: '',
    },
    opposite: true,
    tickAmount:5   //Y轴刻度数
}];
legend = {
    align: 'center', //水平方向位置
    verticalAlign: 'top', //垂直方向位置
    itemStyle: {
        color: '#9b9b9b',
        fontSize:12,
        fontWeight: 'normal'
    },
    //symbolHeight: 12,
    //symbolWidth: 12,
    //symbolRadius: "50%"


};
xAxis = {
    categories: ["2017/02","2017/03","2017/04","2017/05"],
    lineColor:"#eaeaeb",
    labels:{
        style: {
            color: '#70839f'
        }

    },
    tickmarkPlacement: 'on',  //设置刻度线位于在类别名称的中心
    tickLength:8  //x轴刻度线长度
};

$("#profit").highcharts({
    chart: {
        //marginTop: 25,
        //marginLeft: 40,
        //marginBottom: marginBottom,
        backgroundColor: 'rgba(0,0,0,0)'
    },
    credits: {
        enabled:false
    },
    exporting: {
        enabled:false
    },
    title: {
        text: ''
    },
    plotOptions: {
        series: {
            marker: {
                enabled: false  //折线图转折点
            },

        }
    },
    legend: legend,
    xAxis: xAxis,
    yAxis: yAxis,
    series: series,
    tooltip: {
        shadow: false,
        borderWidth:0,
        backgroundColor:"rgba(235,235,235,0.6)",
        borderRadius:5,
        style: {
            "color": "#a6aebd"
        }

    }
});