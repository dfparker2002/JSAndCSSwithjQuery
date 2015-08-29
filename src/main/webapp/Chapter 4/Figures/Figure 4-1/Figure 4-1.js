$(document).ready(
  function() {
    $('div').hover(
      function() {
        // Set the id attribute
        $(this).attr('id', 'tmpExample');
        
        // Get the id attribute
        $(this).text('This element\'s ID is: ' + $(this).attr('id'));
      },
      function() {
        $(this).attr('id', '');
        $(this).text('This element\'s ID has been removed.');
      }
    );
  }
);

$('a').removeAttr('title');