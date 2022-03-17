(function($){
  if(! $('html').hasClass('ie7')) {
    // fittext.js
    $("#title_1").fitText(0.9, { minFontSize: '40px' });
    $("#text_1, #text_2").fitText(1.5, { minFontSize: '20px', maxFontSize: '150px' });
  }

  if($('html').hasClass('ie7') || $('html').hasClass('ie8')) {
    var bg_img_url = $('#full_screen_image').css('background-image').replace('url(', '').replace(')', '');

    $('<img id="OLDIE_full_screen_image" src=' + bg_img_url + '/>').prependTo('#content_page_wrapper');
  }

  $(window).load(function() {
    var $win = $(window),
      $bg = $('#OLDIE_full_screen_image'),
      aspectRatio = $bg.width() / $bg.height();

    function resizeBG() {
      if(($win.width() / $win.height()) < aspectRatio) {
        $('#info').text('h' + aspectRatio + ' ' + ($win.width() / $win.height()));
        $bg.removeClass().addClass('bgheight');
      } else {
        $('#info').text('w' + aspectRatio + ' ' + ($win.width() / $win.height()));
        $bg.removeClass();
      }
    }

    if($('html').hasClass('ie7') || $('html').hasClass('ie8')) {
      $win.resize(resizeBG).trigger('resize');
    }

    function initDarkLightClasses() {
      $('._4ORMAT_content_page_button').each(function (i, button) {
        if($(button).find('.dark_text').length > 0) {
          $(button).addClass('dark_text')
        }

        if($(button).find('.light_text').length > 0) {
          $(button).addClass('light_text')
        }
      });
    }

    initDarkLightClasses();
  });
})(_4ORMAT.jQuery);
