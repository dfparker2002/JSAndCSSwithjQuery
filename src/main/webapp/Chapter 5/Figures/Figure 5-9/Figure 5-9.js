$(document).ready(
  function() {
    var $mapped = $('li').map(
      function($key) {
        switch (true) {
          case ($(this).hasClass('John')): {
            return $(this).text() + " <i>John Lennon</i>";
          }
          case ($(this).hasClass('Paul')): {
            return $(this).text() + " <i>Paul McCartney</i>";   
          }
          case ($(this).hasClass('George')): {
            return $(this).text() + " <i>George Harrison</i>";   
          }
        }
      }
    );

    $('ul#tmpAlbum').hide();
    
    $($mapped).each(
      function() {
        $('ul#tmpMapped').append("<li>" + this + "</li>\n");  
      }
    );
  }
);