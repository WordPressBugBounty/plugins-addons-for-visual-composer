jQuery(function ($) {


    var custom_css = '';
    $('.lvca-carousel').each(function () {

        var carousel_elem = $(this);

        var settings = carousel_elem.data('settings');

        var id_selector = '#' + carousel_elem.attr('id');

        var desktop_gutter = settings['gutter'] || 10;

        var tablet_gutter = settings['tablet_gutter'] || 10;

        var tablet_width = settings['tablet_width'] || 800;

        var mobile_gutter = settings['mobile_gutter'] || 10;

        var mobile_width = settings['mobile_width'] || 480;

        custom_css += id_selector + '.lvca-carousel .lvca-carousel-item { padding:' + desktop_gutter + 'px; }';

        custom_css += ' @media only screen and (max-width: ' + tablet_width + 'px) { ' + id_selector + '.lvca-carousel .lvca-carousel-item { padding:' + tablet_gutter + 'px; } } ';

        custom_css += ' @media only screen and (max-width: ' + mobile_width + 'px) { ' + id_selector + '.lvca-carousel .lvca-carousel-item { padding:' + mobile_gutter + 'px; } } ';

    });
    if (custom_css !== '') {
        custom_css = '<style type="text/css">' + custom_css + '</style>';
        $('head').append(custom_css);
    }

});