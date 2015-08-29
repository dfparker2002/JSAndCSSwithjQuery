$(document).ready(
  function() {
    var $vegetables = [
      'Carrots',
      'Tomatoes',
      'Lettuce'
    ];
    
    var $fruits = [
      'Oranges',
      'Apples',
      'Cherries'                   
    ];
    
    $merged = $.merge($vegetables, $fruits);
    
    var $string = '';
    
    $($merged).each(
      function() {
         $string += this + "\n";   
      }
    );
    
    alert($string);
  }
);