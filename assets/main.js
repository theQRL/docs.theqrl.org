
$(document).ready(function() {
    $('#nav-icon').click(function(){
        $(this).toggleClass('open');
    });
    // Click
    $('.has-child > a').on('click', function(event) {
      event.preventDefault();

      $(this).parent().toggleClass('active');
    });

 
    var sections = $('.document-page h2, .document-page h3'), nav = $('.floatmenu nav ul'), nav_height = nav.outerHeight();
     
    $(window).on('scroll load', function () {
      var cur_pos = $(this).scrollTop();

      sections.each(function(k, item) {
        if($(this).offset().top > cur_pos - 10) {
            var link = $(this).find('a').attr('href');
            nav.find('li a').parent().removeClass('active')
            nav.find('li a[href="'+link+'"]').parent().addClass('active')
            return false;
        }
      });
    });
});
