$(document).ready(
  function() {
    var $items = [];

    $('li').each(
      function() {
        $items.push($(this).text());
      }
    );

    var $filtered = $.grep(
      $items,
      function($value, $key) {
        return ($value.indexOf('You') != -1);
      }
    );

    $('ul#tmpAlbum').hide();
    
    $($filtered).each(
      function() {
        $('ul#tmpFiltered').append("<li>" + this + "</li>\n");  
      }
    );
  }
);