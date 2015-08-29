$(document).ready(
  function() {
    $('input#tmpReplaceWith').click(
      function($e) {
        $e.preventDefault();
        
        $(this).replaceWith(
          "<p>\n" +
          "  jQuery's replaceWith() method is used to completely \n" +
          "  replace one or more elements with the specified content.\n" +
          "</p>\n"
        );
      }
    );

    $('input#tmpReplaceAll').click(
      function($e) {
        $e.preventDefault();

        $('p#tmpReplaceAllContent')
          .replaceAll(this)
          .removeAttr('id');
      }
    );

    $('input#tmpEmpty').click(
      function($e) {
        $e.preventDefault();
        
        $('ul li').empty();
      }
    );

    $('input#tmpRemove').click(
      function($e) {
        $e.preventDefault();
        
        $('ul').remove();
      }
    );
    
    $('input#tmpAddInput').click(
      function($e) {
        $e.preventDefault();

        $('div#tmp')
          .clone(true)                    // Copy the <div>
          .removeAttr('id')               // Remove the id
          .insertAfter('div.tmpRow:last') // Insert after the last <div>
          .find('input')                  // Get the input
          .val('');                       // Remove the value
      }
    );
    
    $('input[type=text]')
      .focus(
        function() {
          $(this).addClass('tmpFocused');
        }
      )
      .blur(
        function() {
          $(this).removeClass('tmpFocused');
        }
      );
  }
);