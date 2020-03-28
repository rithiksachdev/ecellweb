$(function () {
    $(document).scroll(function () {
        var $nav = $(".navbar-fixed-top");
        $nav.toggleClass('scrolled', $(this).scrollTop() > $nav.height());
    });
});

$(window).scroll(function () {
    $(".topinfo").css({ "marginTop": -($(window).scrollTop()) / 8 + "px", "marginLeft": ($(window).scrollLeft()) + "px" });
});