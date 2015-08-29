$(document).ready(
  function() {
    $('input#tmpQuote1').click(
      function($e) {
        $e.preventDefault();
        $('p#tmpQuoteText1').replaceAll(this);
      }
    );

    $('input#tmpQuote2').click(
      function($e) {
        $e.preventDefault();
        $('p#tmpQuoteText2').replaceAll(this);
      }
    );
  }
);