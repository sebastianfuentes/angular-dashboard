(function () {
    angular
        .module('app')
        .controller('UsageController', [
            UsageController
        ]);

    function UsageController() {
        var vm = this;

        // TODO: move data to the service
        vm.ramChartData = [{key: 'Bounce rate', y: 768660}, { key: 'Unique users', y: 367404}, {key: '', y: 41924 }];
        vm.storageChartData = [{key: 'Social media', y: 126560}, {key: 'Other', y: 224365 }];

        vm.chartOptions = {
            chart: {
                type: 'pieChart',
                height: 130,
                donut: true,
                x: function (d) { return d.key; },
                y: function (d) { return d.y; },
                valueFormat: (d3.format(".0f")),
                color: ['rgb(240, 250, 60)', '#000', 'rgb(235, 235, 235)'],
                showLabels: false,
                showLegend: true,
                margin: { top: -10, left: -20, right: -20 }
            }
        };
    }
})();
