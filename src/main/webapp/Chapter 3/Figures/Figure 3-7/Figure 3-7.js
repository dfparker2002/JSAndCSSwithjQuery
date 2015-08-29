$(document).ready(
  function() {
    $('div').mouseover(
      function() {
        $(this).addClass('tmpExampleOver');
      }
    );

    $('div').mouseout(
      function() {
        $(this).removeClass('tmpExampleOver');
      }
    );

    $('div').click(
      function() {
        if (!$(this).hasClass('tmpExampleOn')) {
          $(this).addClass('tmpExampleOn');
        } else {
          $(this).removeClass('tmpExampleOn');
        }
      }
    );
  }
);