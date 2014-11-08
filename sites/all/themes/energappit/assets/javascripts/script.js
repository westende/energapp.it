/**
 * @file
 * Custom scripts for theme.
 */
(function ($) {
  $document = $( document );

  $document.ready(function() {
    $document.resize(function() {

      if ($('body').hasClass('front')) {
        var $pane2 = $('.pane-fpid-2'),
          voffset = $pane2.offset().left,
          $spread = $('<div class="spread"><div class="container"></div></div>');

        $pane2.css({
          left: - voffset + 'px',
          marginRight: - (2*voffset) + 'px',
          height: $( window ).height()
        });

        $spread.css({
          left: - voffset + 'px',
          marginRight: - (2*voffset) + 'px'
        });

        $('body.front .container .row:eq(2)').wrap($spread);

        $('#mini-panel-incentive_1').waypoint(function() {
          $('#mini-panel-incentive_1 .pane-fpid-7 img').addClass('show');
        }, { offset: '50%' });
      }

    });

    $document.trigger('resize');
  });
})(jQuery);
