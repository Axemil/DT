;(function($){
    $(window).scroll(function() {
        $(".main_item-image_first").css("transform", "translateY(" + -($(window).scrollTop() / 10) + "px)");
        $(".main_item-image_second").css("transform", "translateY(" + -($(window).scrollTop() / 15 - 30) + "px)");
    })
})(jQuery);
  