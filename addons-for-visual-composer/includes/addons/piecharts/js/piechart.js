jQuery(function ($) {

    $('.lvca-piecharts').livemeshWaypoint(function (direction) {

        $(this.element).find('.lvca-piechart .lvca-percentage').each(function () {

            var track_color = $(this).data('track-color');
            var bar_color = $(this).data('bar-color');

            $(this).easyPieChart({
                animate: 2000,
                lineWidth: 5,
                barColor: bar_color,
                trackColor: track_color,
                scaleColor: false,
                lineCap: 'square',
                size: 220

            });

        });

    }, { offset: (window.innerHeight || document.documentElement.clientHeight) - 100,
        triggerOnce: true});


});