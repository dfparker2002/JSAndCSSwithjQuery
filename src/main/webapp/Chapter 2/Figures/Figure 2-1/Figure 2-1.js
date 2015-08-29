var tmpExample = {
  ready : function() {
    // Get all links... 
    $('ul#tmpFavorites li a').click(
      function($e) {
        $e.preventDefault();
        window.open(this.href, 'FavoriteLink', '');
      }
    );
  }
};

$(document).ready(tmpExample.ready);