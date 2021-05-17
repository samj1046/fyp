
jQuery(document).ready(function ($) {


    $('#quote-carousel').carousel({
        pause: true,
        interval: 4000,
    });

    $(".fancybox").fancybox();

    if ($('.isotopeWrapper').length) {
        var $container = $('.isotopeWrapper');
        var $resize = $('.isotopeWrapper').attr('id');

        $container.isotope({
            itemSelector: '.isotopeItem',
            resizable: false,
            masonry: {
                columnWidth: $container.width() / $resize
            }
        });
        $("a[href='#top']").click(function () {
            $("html, body").animate({
                scrollTop: 0
            }, "slow");
            return false;
        });
        $('.navbar-inverse').on('click', 'li a', function () {
            $('.navbar-inverse .in').addClass('collapse').removeClass('in').css('height', '1px');
        });
        $('#filter a').click(function () {
            $('#filter a').removeClass('current');
            $(this).addClass('current');
            var selector = $(this).attr('data-filter');
            $container.isotope({
                filter: selector,
                animationOptions: {
                    duration: 1000,
                    easing: 'easeOutQuart',
                    queue: false
                }
            });
            return false;
        });
        $(window).smartresize(function () {
            $container.isotope({
              
                masonry: {
                    columnWidth: $container.width() / $resize
                }
            });
        });
    }
});
