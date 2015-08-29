$(document).ready(
  function() {
    $.each(
      ['Groucho', 'Chico', 'Harpo', 'Zeppo'],
      function() {
        $('ul').append("<li>" + this + "</li>");   
      }
    );
  }
);