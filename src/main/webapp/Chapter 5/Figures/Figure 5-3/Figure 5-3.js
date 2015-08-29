$(document).ready(
  function() {
    var $append = " Marx";

    $(['Groucho', 'Chico', 'Harpo', 'Zeppo'])
      .each(
        function() {
          $('ul').append("<li>" + this + $append + "</li>");   
        }
      );
  }
);