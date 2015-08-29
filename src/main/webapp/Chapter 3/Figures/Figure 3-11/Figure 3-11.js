$(document).ready(
  function() {
    $('input').focus(
      function($e, $data) {
        if (typeof($data) != 'undefined' && $data.thisIsOnLoad) {
          $(this).addClass('tmpFocusedOnLoad');
        } else {
          $(this).addClass('tmpFocused');
        }
      }
    );

    $('input').blur(
      function() {
        $(this).removeClass('tmpFocusedOnLoad');
        $(this).removeClass('tmpFocused');
      }
    );
  
   $('input').trigger('focus', {thisIsOnLoad: true});
  }
);