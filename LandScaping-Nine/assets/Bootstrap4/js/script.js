﻿//console.log("usman");

/*================== Read More Text ==================*/
$(function () {
    var showChar = 200;
    var moretext = "Read More +";
    var lesstext = "Read Less -";
    $('.comments-space').each(function () {
        var content = $(this).html();
        if (content.length > showChar) {
            var show_content = content.substr(0, showChar);
            var hide_content = content.substr(showChar, content.length - showChar);
            var html = show_content +
                '<span class="remaining-contents"><span class=" p-3">' +
                hide_content +
                '</span>' +

                '<a href="" class="morelink read-text text-center mt-30" style="display:block;">' +
                moretext +
                '</a>' + '</span>';;

            $(this).html(html);
        }
    });

    $(".morelink").click(function () {

        if ($(this).hasClass("less")) {
            $(this).removeClass("less");
            $(this).html(moretext);
        } else {
            $(this).addClass("less");
            $(this).html(lesstext);
        }
        $(this).parent().prev().toggle();
        $(this).prev().toggle();
        return false;
    });
});
/*===================== Smooth Scrolling ======================*/
$(function () {
    $('a').smoothScroll();
});
/*======================= Nav Active Class =======================*/
$(function () {
    $('.nav-item').on('click',
        function () {
            $('.nav-item').removeClass('active');
            $(this).addClass('active');
        });
});
/*===================== Load More Images ======================*/
$(document).ready(function () {

    $('.loadMore').loadMoreResults({
        displayedItems: 6,
        showItems: 3
    });


});

/*===================== Owl Carousel Slider ======================*/
$(function () {
    $('#owl-two').owlCarousel({
        loop: false,
        margin: 20,
        dots: false,
        nav: true,
        slideBy: 3,
        item: 3,
        navText: ["<i class='flaticon-left'></i>", "<i class='flaticon-next'></i>"],
        responsiveClass: true,
        responsive: {
            0: {
                items: 1,
                dots: false,
                nav: true
            },
            400: {
                items: 1,
                dots: false,
                nav: true
            },
            600: {
                items: 2,
                dots: false,
                nav: true
            },
            768: {
                items: 2,
                dots: false,
                nav: true
            },
            830: {
                items: 2,
                dots: false,
                nav: true
            },
            1000: {
                items: 3,
                dots: false,
                nav: true
            }
        }
    });
});
$(function () {
    $('#owl-one').owlCarousel({
        loop: false,
        margin: 20,
        dots: false,
        nav: true,
        slideBy: 4,
        item: 4,
        navText: ["<i class='flaticon-last-track-left-arrow'></i>", "<i class='flaticon-right-arrow'></i>"],
        responsiveClass: true,
        responsive: {
            0: {
                items: 1,
                dots: false,
                nav: true
            },
            400: {
                items: 1,
                dots: false,
                nav: true
            },
            600: {
                items: 2,
                dots: false,
                nav: true
            },
            768: {
                items: 3,
                dots: false,
                nav: true
            },
            830: {
                items: 3,
                dots: false,
                nav: true
            },
            1000: {
                items: 4,
                dots: false,
                nav: true
            }
        }
    });
});
$(function () {
    $('.owl-carousel').owlCarousel({
        loop: true,
        margin: 0,
        dots: true,
        nav: false,
        slideBy: 1,
        item: 1,
        responsiveClass: true,
        responsive: {
            0: {
                items: 1,
                dots: true,
                nav: false
            },
            400: {
                items: 1,
                dots: true,
                nav: false
            },
            600: {
                items: 1,
                dots: true,
                nav: false
            },
            768: {
                items: 1,
                dots: true,
                nav: false
            },
            800: {
                items: 1,
                dots: true,
                nav: false
            },
            1000: {
                items: 1,
                dots: true,
                nav: false
            }
        }
    });
});

/*===================== Scroll Top Function Script ======================*/
$(function () {

    $(window).scroll(function () {
        var scroll = $(window).scrollTop();
        if (scroll >= 100) {
            $("#home nav").addClass("sleep fixed-top");

        } else {

            $("#home nav").removeClass(" sleep fixed-top ");


        }


    });
});


/*===================== Another Load More Script ======================*/
$(function () {
    $(".no-display").slice(0, 4).show();
    $("#load-more").on('click', function (e) {
        e.preventDefault();
        $(".no-display:hidden").slice(0, 2).slideDown();
        if ($(".no-display:hidden").length == 0) {
            $("#load-more").fadeOut('slow');


        }
        $('html,body').animate({
            scrollTop: $(this).offset().center
        }, 1500);
    });
});

/*=====================Active Class Script ======================*/
$(function () {
    $('.form-check-label').on('click',
        function () {
            $('.form-check-label').removeClass('radio-active');
            $(this).addClass('radio-active');
        });
});
