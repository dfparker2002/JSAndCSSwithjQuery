$(document).ready(
  function() {
    $('input').focus(
      function() {
        $(this).addClass('tmpFocused');
      }
    );

    $('input').blur(
      function() {
        $(this).removeClass('tmpFocused');
      }
    );
  
   $('input').trigger('focus');
  }
);