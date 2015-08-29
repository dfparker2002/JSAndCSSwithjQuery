$(document).ready(
  function() {
    $('input#tmpAddRow').click(
      function($e) {
        $e.preventDefault();
        $('tr#tmp').clone(true).removeAttr('id').appendTo('tbody');
      }
    );

    $('tr input[type=text]').focus(
      function() {
        $(this).addClass('tmpFocused');   
      }
    ).blur(
      function() {
        $(this).removeClass('tmpFocused');
      }
    );
  }
);