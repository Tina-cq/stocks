/**
 * Created by jingwan on 2017/8/22.
 */
    //雷达图
$('#radar').highcharts({
    colors: ['#2e79b3', '#ff424a'],
    chart: {
        polar: true
    },

    title: {
        text: '',
        x: -80
    },

    pane: {
        size: '90%'
    },
    exporting: {
        enabled:false
    },
    credits: {
        enabled: false
    },
    xAxis: {
        categories: ['盈利', '成长', '机构', '行情',
            '技术', '资金'],
        tickmarkPlacement: 'on',
        labels:{
            style: {
                color: '#70839f'
            }
        },
        lineColor: '#d4dae4',
        lineWidth: 1

    },

    yAxis: {
        gridLineInterpolation: 'circle',
        gridLineDashStyle:"Dash",
        gridLineColor:"#d4dae4",
        gridLineWidth:1,
        lineWidth:0,
        min: 0,
        labels:{
            enabled: false,    //去掉y轴刻度值
            rotation: 10,
            plotLines:[{
                // dashStyle:"dashed"
            }]
//        style:{
//          color:"#d1d8e2",
//          dashStyle:"dashed",
//          width:1
//        }
        },

        tickAmount:6   //Y轴刻度数
    },

    tooltip: {
        enabled: true,
        shadow: false,
        borderWidth:0,
        backgroundColor:"rgba(235,235,235,0.8)",
        borderRadius:5,
        style: {
            "color": "#555"
        }
        //shared: false,
        //pointFormat: '<span style="color:{series.color}">{series.name}: <b>${point.y:,.0f}</b><br/>'
    },

    legend: {
        align: 'center',
        verticalAlign: 'top',
        itemStyle: {
            color: '#899cb6',
            fontSize:14,
            fontWeight: 'normal'
        }


        //y: 70,
        //layout: 'vertical'
    },

    series: [{
        type: 'area',
        name: '个股',
        data: [8, 7, 6, 5,7,2],
        pointPlacement: 'on'
    }, {
        type: 'area',
        name: '行业',
        data: [1, 8, 2, 7,5,8],
        pointPlacement: 'on'
    }]
});