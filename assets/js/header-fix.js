
/* ==============================================
 Navigation Fixed on Scroll
 =============================================== */
$(window).scroll(function(){
    'use strict';
    var scroll = $(window).scrollTop();
    var topNav = $("#topNav");
    var topLogo = $(".navbar-brand").find('img');
    if (scroll >= 2)
    {
        $('nav').addClass('nav-fixedd');

    }
    else {
        $('nav').removeClass('nav-fixedd');
    }
});