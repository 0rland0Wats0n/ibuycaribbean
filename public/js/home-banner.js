'use strict';

(function() {
    $(document).ready(function() {
        // get slide toggles
        var $left_toggle = $('.home-banner-left-button');
        var $right_toggle = $('.home-banner-right-button');

        $left_toggle.on('click', function() {
            if($('.home-banner-image[data-slide-start="true"]').hasClass('js-current-banner')) {
                $('.js-current-banner').removeClass('js-current-banner');
                $('.home-banner-image[data-slide-end="true"]').addClass('js-current-banner');
            } else {
                $('.js-current-banner').removeClass('js-current-banner').prevAll('.home-banner-image:first').addClass('js-current-banner');
            }
        });

        $right_toggle.on('click', function() {
            if($('.home-banner-image[data-slide-end="true"]').hasClass('js-current-banner')) {
                $('.js-current-banner').removeClass('js-current-banner');
                $('.home-banner-image[data-slide-start="true"]').addClass('js-current-banner');
            } else {
                $('.js-current-banner').removeClass('js-current-banner').nextAll('.home-banner-image:first').addClass('js-current-banner');
            }
        });

        // auto play slideshow
        setInterval(function() {
            if($('.home-banner-image[data-slide-start="true"]').hasClass('js-current-banner')) {
                $('.js-current-banner').removeClass('js-current-banner');
                $('.home-banner-image[data-slide-end="true"]').addClass('js-current-banner');
            } else {
                $('.js-current-banner').removeClass('js-current-banner').prevAll('.home-banner-image:first').addClass('js-current-banner');
            }
        }, 5000);
    });
})();
