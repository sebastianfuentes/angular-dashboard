(function () {
    angular
        .module('app')
        .controller('PerformanceController', [
            'performanceService', '$q',
            PerformanceController
        ]);

    function PerformanceController(performanceService, $q) {
        var vm = this;
        vm.chartOptions = {
            chart: {
                type: 'lineWithFocusChart',
                height: 350,
                margin: { left: 10, right: 30 },
                x: function (d) { return d[0] },
                y: function (d) { return d[1] },
                showLabels: true,
                showLegend: true,
                // title: 'Over 9K',
                showYAxis: true,
                showXAxis: true,
                useInteractiveGuideline: true,
                clipVoronoi: false,
                transitionDuration: 500,
                xAxis: {
                  showMaxMin: true,
                  staggerLabels: true
                },
                yAxis: {
                  axisLabel: "Y Axis",
                  axisLabelDistance: 0
                },
                color: ['rgb(240, 250, 36)', 'rgb(204, 203, 203)', 'rgb(149, 149, 149)', 'rgb(44, 44, 44)'],
                // tooltip: { contentGenerator: function (d) { return '<div class="custom-tooltip">' + d.point.y + '%</div>' + '<div class="custom-tooltip">' + d.series[0].key + '</div>' } },
                showControls: true
            }
        };

        vm.performanceChartData = [];
        vm.performancePeriod = 'week';
        vm.changePeriod = changePeriod;

        activate();

        function activate() {
            var queries = [loadData()];
            $q.all(queries);
        }


        function loadData() {
            vm.performanceChartData = performanceService.getPerformanceData(vm.performancePeriod);
        }

        function changePeriod() {
            loadData();
        }
    }
})();
