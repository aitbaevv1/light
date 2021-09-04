$(document).ready(function() {
    $('.header__burger').click(function() {
        $('.header__burger, .header-mobile, body, .header').toggleClass('active');
    });

    $(".sanatorium__nav-link").click(function (event) {
        event.preventDefault();

        $(".sanatorium__nav-link, .sanatorium__item, .sanatorium__content-block").removeClass("active");

        $(this).addClass("active");
        $($(this).attr('href')).addClass("active");

    });

    // Fixed header
    let header = $(".header");
    let headerBody = $(".hero");
    let headerBodyH = headerBody.innerHeight();
    let scrollPos = $(window).scrollTop()

    $(window).on("scroll load resize", function () {
        headerBodyH = headerBody.innerHeight();
        scrollPos = $(this).scrollTop();

        if (scrollPos > headerBodyH) {
            header.addClass("fixed");
        } else {
            header.removeClass("fixed");
        }

    });
    $("[data-scroll]").on("click", function (event) {
        event.preventDefault();

        let elementID = $(this).data('scroll');
        let elementOffset = $(elementID).offset().top;
        $("html, body").animate({

            scrollTop: elementOffset

        }, 1000);
    });

    $('.accommodation__item-top').click(function() {
        $(this).toggleClass('active');
        $(this).next().slideToggle(300);
    })
})