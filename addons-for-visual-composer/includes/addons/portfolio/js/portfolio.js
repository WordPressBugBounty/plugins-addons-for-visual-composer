jQuery(function ($) {

    if ($().isotope === undefined) {
        return;
    }

    var custom_css = '';

    $('.lvca-portfolio-wrap').each(function () {

        var container = $(this).find('.lvca-portfolio');
        if (container.length === 0) {
            return; // no items to filter or load and hence don't continue
        }

        // layout Isotope after all images have loaded
        var html_content = $(this).find('.js-isotope');

        var options = html_content.data('isotope-options');

        html_content.imagesLoaded(function () {

            html_content.isotope({
                itemSelector: options.itemSelector,
                layoutMode: options.layoutMode,
                transitionDuration: '0.8s'
            });
        });

        /* -------------- Taxonomy Filter --------------- */

        $(this).find('.lvca-taxonomy-filter .lvca-filter-item a').on('click', function (e) {
            e.preventDefault();

            var selector = $(this).attr('data-value');
            container.isotope({ filter: selector });
            $(this).closest('.lvca-taxonomy-filter').children().removeClass('lvca-active');
            $(this).closest('.lvca-filter-item').addClass('lvca-active');
            return false;
        });
        
        /* --------- Custom CSS Generation --------------- */

        var portfolio_elem = $(this).find('.lvca-portfolio');

        var id_selector = '#' + portfolio_elem.attr('id');

        var desktop_gutter = (typeof portfolio_elem.data('gutter') !== 'undefined') ? portfolio_elem.data('gutter') : 10;

        var tablet_gutter = (typeof portfolio_elem.data('tablet_gutter') !== 'undefined') ? portfolio_elem.data('tablet_gutter') : 10;

        var tablet_width = portfolio_elem.data('tablet_width') || 800;

        var mobile_gutter = (typeof portfolio_elem.data('mobile_gutter') !== 'undefined') ? portfolio_elem.data('mobile_gutter') : 10;

        var mobile_width = portfolio_elem.data('mobile_width') || 480;

        custom_css += id_selector + '.lvca-portfolio { margin-left: -' + desktop_gutter + 'px; margin-right: -' + desktop_gutter + 'px; }';

        custom_css += id_selector + '.lvca-portfolio .lvca-portfolio-item { padding:' + desktop_gutter + 'px; }';

        custom_css += ' @media only screen and (max-width: ' + tablet_width + 'px) { ' + id_selector + '.lvca-portfolio { margin-left: -' + tablet_gutter + 'px; margin-right: -' + tablet_gutter + 'px; } ' + id_selector + '.lvca-portfolio .lvca-portfolio-item { padding:' + tablet_gutter + 'px; } } ';

        custom_css += ' @media only screen and (max-width: ' + mobile_width + 'px) { ' + id_selector + '.lvca-portfolio { margin-left: -' + mobile_gutter + 'px; margin-right: -' + mobile_gutter + 'px; } ' + id_selector + '.lvca-portfolio .lvca-portfolio-item { padding:' + mobile_gutter + 'px; } } ';
    });

    if (custom_css !== '') {
        custom_css = '<style type="text/css">' + custom_css + '</style>';
        $('head').append(custom_css);
    }
    
});