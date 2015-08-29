$(document).ready(
  function() {
    $('input#tmpEmptyTable').click(
      function($e) {
        $e.preventDefault();
        $('td').empty();
      }
    );

    $('input#tmpDelete').click(
      function($e) {
        $e.preventDefault();
        $('h4, table').remove();
      }
    );
  }
);