var tmpContextMenuOn = false;

$(document).ready(
  function() {
    $('div.tmpContextItem').bind(
      'contextmenu',
      function($e) {
        $e.preventDefault();

        // The contextmenu doesn't work in Opera.
        // Guess those four users will just have to do without.
        var $menu = $('div#tmpContextMenu');
        
        $menu.show();

        // The following bit gets the dimensions of the viewport
        var $vpx, $vpy;
    
        if (self.innerHeight) {
          // all except Explorer
          $vpx = self.innerWidth;
          $vpy = self.innerHeight;
        } else if (document.documentElement && document.documentElement.clientHeight) {
          // Explorer 6 Strict Mode
          $vpx = document.documentElement.clientWidth;
          $vpy = document.documentElement.clientHeight;
        } else if (document.body) {
          // other Explorers
          $vpx = document.body.clientWidth;
          $vpy = document.body.clientHeight;
        }
    
        // Reset offset values to their defaults
        $menu.css({
          top:    'auto',
          right:  'auto',
          bottom: 'auto',
          left:   'auto'
        });

        /**
        * If the height or width of the context menu is greater than the amount 
        * of pixels from the point of click to the right or bottom edge of the 
        * viewport adjust the offset accordingly
        */
        if ($menu.outerHeight() > ($vpy - $e.pageY)) {
          $menu.css('bottom', ($vpy - $e.pageY) + 'px');
        } else {
          $menu.css('top', $e.pageY + 'px');
        }

        if ($menu.outerWidth() > ($vpx - $e.pageX)) {
          $menu.css('right',  ($vpx - $e.pageX) + 'px');
        } else {
          $menu.css('left', $e.pageX + 'px');
        }
      }
    );

    $('div#tmpContextMenu').hover(
      function() {
        tmpContextMenuOn = true;
      },
      function() {
        tmpContextMenuOn = false;
      }    
    );
    
    $(document).mousedown(
      function() {
        if (!tmpContextMenuOn) {
          $('div#tmpContextMenu').hide();
        }
      }
    );
  }
);