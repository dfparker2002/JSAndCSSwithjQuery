$(document).ready(
  function() {
    var $vegetables = [
      'Carrots',
      'Tomatoes',
      'Lettuce',
      'Tomatoes'
    ];

    var $before = '';

    $($vegetables).each(
      function() {
         $before += this + "\n";   
      }
    );

    $vegetables = $.unique($vegetables);
    
    var $after = '';

    $($vegetables).each(
      function() {
         $after += this + "\n";   
      }
    );

    alert(
      "Before:\n" + 
        $before + "\n" +
      "After:\n" +
        $after
    );
  }
);