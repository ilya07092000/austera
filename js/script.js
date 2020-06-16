$(function () {
    // MENU
    $(".menu__btn").on("click", function () {
        $(".menu__header").toggleClass("active");
        $(".menu__btn").toggleClass("active");
    });

    // FIXED HEADER
    let navigation = $("#navigation"),
        headerH = $("#header").innerHeight(),
        scrollOffset = 0;

    $(window).on("scroll", function () {
        scrollOffset = $(window).scrollTop();
        if (scrollOffset > headerH - $(".navigation ").innerHeight() - 20) {
            navigation.addClass("fixed");
        } else {
            navigation.removeClass("fixed");
        }
    });

    // SCROLL
    $("[data-scroll]").on("click", function () {
        event.preventDefault();

        let blockId = $(this).data("scroll");
        let blockOffset = $(blockId).offset().top;

        $('html, body').animate({
            scrollTop: blockOffset - ($(".header__logo ").outerHeight())
        }, 500);

        $(".menu__header").toggleClass("active");
        $(".menu__btn").toggleClass("active");
        $(".header__links").removeClass("active__link");
        $(this).addClass("active__link");
    });
});




