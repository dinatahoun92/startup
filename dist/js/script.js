$(document).ready(function () {

    // Add smooth scrolling 

    $('a[href="#top"]').click(function () {
        $('html, body').animate({
            'scrollTop': $('#top').offset().top - 90
        }, 1100, 'linear')
    });
    $('a[href="#features"]').click(function () {
        $('html, body').animate({
            'scrollTop': $('#features').offset().top - 90
        }, 1100, 'linear')
    });
    $('a[href="#reviews"]').click(function () {
        $('html, body').animate({
            'scrollTop': $('#reviews').offset().top - 90
        }, 1100, 'linear')
    });
    $('a[href="#promo"]').click(function () {
        $('html, body').animate({
            'scrollTop': $('#promo').offset().top - 90
        }, 1100, 'linear')
    });
    $('a[href="#blog"]').click(function () {
        $('html, body').animate({
            'scrollTop': $('#blog').offset().top - 90
        }, 1100, 'linear')
    });


    //Update Header Style and Scroll to Top
    function headerStyle() {



        if ($(window).scrollTop()) {
            $('.navbar').addClass('fixed-top');


        } else {
            $('.navbar').removeClass('fixed-top');

        }
    }

    headerStyle();

    // Scroll to a certain element

    $(window).scroll(function () {
        headerStyle();
    });
});
