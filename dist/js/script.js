$(document).ready(function () {

    "use strict";


    //Update Header Style and Scroll to Top
    function headerStyle() {



        if ($(window).scrollTop()) {
            $('.navbar').addClass('fixed-top');


        } else {
            $('.navbar').removeClass('fixed-top');
            console.log("hs")

        }
    }

    headerStyle();

    // Add smooth scrolling 

    $('a[href^="#"]').on('click', function (e) {
        // e.preventDefault();

        var target = this.hash,
            $target = $(target);

        $('html, body').stop().animate({
            'scrollTop': $target.offset().top - 90
        }, 900, 'swing', function () {
            window.location.hash = target;
        });
    });
    $(window).scroll(function () {
        headerStyle();
    });
});