$(document).ready(
  function() {
    $('li')
      .filter(
        function() {
          return $(this).hasClass('John') || $(this).hasClass('Paul');
        }
      )
      .addClass('tmpSelected');
  }
);