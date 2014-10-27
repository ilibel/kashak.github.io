$(document).ready(function() {
    $("a.animated-scroll").click(function () {
        var elementClick = $($(this).attr("href"));
        var destination = elementClick.size() === 0 ? 0 : elementClick.offset().top;
        jQuery("html:not(:animated),body:not(:animated)").animate({scrollTop: destination}, 800);
        return false;
    });

    $(window).scroll(function() {
        if($(this).scrollTop() > 300) {
            $('#to-top').fadeIn();
        } else {
            $('#to-top').fadeOut();
        }
    });

    jQuery(function(){
        jQuery(".carousel-inner").mb_YTPlayer();
        jQuery("#footer").mb_YTPlayer();
    });

    new WOW().init();
});