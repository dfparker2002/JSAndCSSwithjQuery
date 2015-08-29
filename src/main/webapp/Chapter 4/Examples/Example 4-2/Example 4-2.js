$(document).ready(
  function() {
    $('table').hover(
      function() {
        $('td').addClass('tmpHover');
      },
      function() {
        $('td').removeClass('tmpHover');
      }
    )
    .click(
      function() {
        $('td').toggleClass('tmpSelected');
      }
    );
  }
);