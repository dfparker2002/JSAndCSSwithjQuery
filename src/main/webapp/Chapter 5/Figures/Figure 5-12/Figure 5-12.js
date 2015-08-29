$(document).ready(
  function() {
    var $item = 'The Beatles';
    
    var $transformed = $.makeArray($item);
 
    alert(typeof($transformed.push));
  }
);