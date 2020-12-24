//menu
$(document).ready(function () {
    $(".navbar-menu").click(function (e) { 
        e.preventDefault();
        $(".slide-menu").show();
        $(".slide-menu-left").show(300);
        
    });
    $(".slide-menu").click(function (e) { 
        e.preventDefault();
        $(".slide-menu").hide();
        $(".slide-menu-left").hide(300);
    });
});
//end show menu

//scroll to top
$(document).ready(function(){
    
    //Check to see if the window is top if not then display button
    $(window).scroll(function(){
        if ($(this).scrollTop() > 100) {
            $('.scrollToTop').fadeIn();
        } else {
            $('.scrollToTop').fadeOut();
        }
    });
    
    //Click event to scroll to top
    $('.scrollToTop').click(function(){
        $('html, body').animate({scrollTop : 0},800);
        return false;
    });
    
});