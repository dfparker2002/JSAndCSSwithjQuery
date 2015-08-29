$(document).ready(
  function() {
    var $items = [
      'Taxman',
      'Eleanor Rigby',
      'I\'m Only Sleeping',
      'Love You To',
      'Here, There and Everywhere',
      'Yellow Submarine',
      'She Said, She Said',
      'Good Day Sunshine',
      'And Your Bird Can Sing',
      'For No One',
      'Doctor Robert',
      'I Want to Tell You',
      'Got to Get You into My Life',
      'Tomorrow Never Knows'
    ];
 
    var $i = 0;

    var $mapped = $($items).map(
      function($key) {
        $i++;
        return ($i < 10? '0' + $i : $i) + ' ' + this;
      }
    );

    $($mapped).each(
      function() {
        $('ul#tmpMapped').append("<li>" + this + "</li>\n");  
      }
    );
  }
);