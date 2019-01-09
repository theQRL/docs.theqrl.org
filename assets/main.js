
$(document).ready(function() {
    function hasTouch() {
        return 'ontouchstart' in document.documentElement
               || navigator.maxTouchPoints > 0
               || navigator.msMaxTouchPoints > 0;
    }

    if (hasTouch()) { // remove all :hover stylesheets
        try { // prevent exception on browsers not supporting DOM styleSheets properly
            for (var si in document.styleSheets) {
                var styleSheet = document.styleSheets[si];
                if (!styleSheet.rules) continue;

                for (var ri = styleSheet.rules.length - 1; ri >= 0; ri--) {
                    if (!styleSheet.rules[ri].selectorText) continue;

                    if (styleSheet.rules[ri].selectorText.match(':hover')) {
                        styleSheet.deleteRule(ri);
                    }
                }
            }
        } catch (ex) {}
    }

    $('#nav-icon').click(function(){
        $(this).toggleClass('open');
    });
    // Click
    $('.has-child > a, .dropdown > a').on('click', function(event) {
      event.preventDefault();

      $(this).parent().siblings().removeClass('active');
      $(this).parent().toggleClass('active');

    });
 
    var sections = $('.docs-single .document-page h2, .docs-single .document-page h3'), nav = $('.floatmenu nav ul'), nav_height = nav.outerHeight();
     
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
    document
  .querySelector('.js-change-theme')
  .addEventListener('click', () => {
    const body = document.querySelector('body');
  
    if (body.classList.contains('t--light')) {
      body.classList.remove('t--light');
      body.classList.add('t--dark');
    }
    else {
      body.classList.remove('t--dark');
      body.classList.add('t--light');
    }
  });
});
