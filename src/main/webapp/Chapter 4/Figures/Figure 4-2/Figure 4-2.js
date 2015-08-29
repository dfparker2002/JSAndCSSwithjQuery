$(document).ready(
  function() {
    $('li').attr(
      'id',
      function() {
        return 'tmp' + $(this).text();
      }
    );
  }
);