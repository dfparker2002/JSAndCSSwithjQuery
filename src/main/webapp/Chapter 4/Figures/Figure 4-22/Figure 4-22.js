$(document).ready(
  function() {
    $('input#tmpQuote1').click(
      function($e) {
        $e.preventDefault();
        
        $(this).replaceWith(
          "<p>\n" +
          "  I would imagine that if you could understand \n" + 
          "  Morse code, a tap dancer would drive you crazy.\n" +
          "</p>\n"
        );
      }
    );

    $('input#tmpQuote2').click(
      function($e) {
        $e.preventDefault();

        $(this).replaceWith(
          "<p>\n" +
          "  I'd like to get four people who do cart wheels \n" +
          "  very good, and make a cart.\n" +
          "</p>\n"
        );
      }
    );
  }
);