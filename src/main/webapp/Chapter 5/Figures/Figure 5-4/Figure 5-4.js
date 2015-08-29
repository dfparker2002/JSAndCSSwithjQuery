$(document).ready(
  function() {
    $(['Groucho', 'Chico', 'Harpo', 'Zeppo'])
      .each(
        function() {
          if (this == 'Groucho') {
            // Continue
            return true;
          }

          $('ul').append(
            "<li>" + this + "</li>"
          );
        }
      );
  }
);