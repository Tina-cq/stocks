/**
 * Created by jingwan on 2017/8/22.
 */
$("#growup").highcharts({
    colors: ['#2e79b3', '#ff6e74'],
    data: {
        table: 'datatable'
    },
    chart: {
        type: 'column'
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
    xAxis: {
        categories: ["2017/02","2017/03","2017/04","2017/05"],
        lineColor:"#eaeaeb",
        labels:{
            style: {
                color: '#70839f'
            }

        },
        tickWidth:0,
    },
    yAxis: {
        gridLineWidth: 1,
        lineWidth: 1,
        gridLineColor: '#ebebeb',
        lineColor:"#eaeaeb",
        allowDecimals: false,
        title: {
            text: ''
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
        min:-10,
        max:35,
        tickAmount:6   //Y轴刻度数
    },

    series: [{
        name: '营业收入增长率 (%)',
        data: [12,22,18,-5]
    }, {
        name: '毛利率增长率 (%)',
        data: [8,15,18,17]
    }],
    legend :{
        align: 'center', //水平方向位置
        verticalAlign: 'top', //垂直方向位置
        itemStyle: {
            color: '#9b9b9b',
            fontSize:12,
            fontWeight: 'normal'
        }
    },
    tooltip: {
        shadow: false,
        borderWidth:0,
        backgroundColor:"rgba(235,235,235,0.8)",
        borderRadius:5,
        style: {
            "color": "#555"
        }

    }

});