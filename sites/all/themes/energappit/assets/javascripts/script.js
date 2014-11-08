/**
 * @file
 * Custom scripts for theme.
 */
(function ($) {
  $document = $( document );

  $document.ready(function() {
    $document.resize(function() {
      var $pane = $('.pane-fpid-2'),
        voffset = $pane.offset().left;

      $pane.css({
        left: - voffset + 'px',
        marginRight: - (2*voffset) + 'px',
        height: $( window ).height()
      });
    });

    $document.trigger('resize');
  });
})(jQuery);
