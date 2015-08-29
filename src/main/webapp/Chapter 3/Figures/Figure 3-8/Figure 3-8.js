$(document).ready(
  function() {
    $('div').hover(
      function() {
        $(this).addClass('tmpExampleOver');
      },
      function() {
        $(this).removeClass('tmpExampleOver');
      }
    );

    $('div').toggle(
      function() {
        $(this).addClass('tmpExampleOn');
      },
      function() {
        $(this).removeClass('tmpExampleOn');
      }
    );
  }
);