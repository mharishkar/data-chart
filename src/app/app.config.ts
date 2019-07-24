export const CHART_OPTIONS = {
    chart: {
        type: 'area'
    },
    title: {
        text: 'Random number from given min and max'
    },
    subtitle: {
        style: {
            position: 'absolute',
            right: '0px',
            bottom: '10px'
        }
    },
    legend: {
        layout: 'vertical',
        align: 'left',
        verticalAlign: 'top',
        x: -150,
        y: 100,
        floating: true,
        borderWidth: 1,
        backgroundColor: '#FFFFFF'
    },
    xAxis: {
        categories: ['10.30', '10.31', '10.33', '10.33']
    },
    yAxis: {
        title: {
            text: 'Number of units'
        },
        labels: {
            formatter: function () {
                return this.value;
            }
        },
        min: 0
    },
    tooltip: {
        formatter: function () {
            return '<b>' + this.series.name + '</b><br/>' +
                '@' + this.x + ': ' + this.y;
        }
    },
    plotOptions: {
        area: {
            fillOpacity: 0.5
        }
    },
    credits: {
        enabled: false
    },
    series: [
        {
            name: 'Random Nmber',
            data: [0, 1, 8, 4, 7, 5, 1]
        }
    ]
}