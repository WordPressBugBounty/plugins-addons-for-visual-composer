jQuery(function ($) {

    $('.lvca-testimonials-slider').each(function () {

        var slider_elem = $(this);

        var settings = slider_elem.data('settings');

        var animation = settings['animation'] || "slide";

        var direction = settings['direction'] || "horizontal";

        var slideshow_speed = parseInt(settings['slideshow_speed']) || 5000;

        var animation_speed = parseInt(settings['animation_speed']) || 600;

        var pause_on_action = settings['pause_on_action'] ? true : false;

        var pause_on_hover = settings['pause_on_hover'] ? true : false;

        var direction_nav = settings['direction_nav'] ? true : false;

        var control_nav = settings['control_nav'] ? true : false;

        slider_elem.flexslider({
            selector: ".lvca-slides > .lvca-slide",
            animation: animation,
            direction: direction,
            slideshowSpeed: slideshow_speed,
            animationSpeed: animation_speed,
            namespace: "lvca-flex-",
            pauseOnAction: pause_on_action,
            pauseOnHover: pause_on_hover,
            controlNav: control_nav,
            directionNav: direction_nav,
            prevText: "Previous<span></span>",
            nextText: "Next<span></span>",
            smoothHeight: false,
            animationLoop: true,
            slideshow: true,
            easing: "swing",
            controlsContainer: "lvca-testimonials-slider"});

    });

});