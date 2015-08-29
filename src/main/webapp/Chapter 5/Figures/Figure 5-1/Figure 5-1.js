$(document).ready(
  function() {
    var $items = [
      'John Lennon',
      'Paul McCartney',
      'George Harrison',
      'Ringo Starr'
    ];

    $($items).each(
      function() {
        $('ul').append("<li>" + this + "</li>");   
      }
    );
  }
);