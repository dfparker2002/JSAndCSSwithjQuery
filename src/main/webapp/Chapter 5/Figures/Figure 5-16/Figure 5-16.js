$(document).ready(
  function() {
    var $p = $('p').get();
    
    var $before = "Before:\n";
    
    $($p).each(
      function() {
        $before += this.id + "\n";
      }
    );

    $p = $p.concat(
      $('#tmpParagraph-1, #tmpParagraph-2').get()
    );

    var $merged= "\nMerged:\n";
    
    $($p).each(
      function() {
        $merged += this.id + "\n";   
      }
    );

    $p = $.unique($p);
    
    var $after = "\nAfter\n";
    
    $($p).each(
      function() {
        $after += this.id + "\n";
      }
    );
  
    alert(
      $before + $merged + $after
    );  
  }
);