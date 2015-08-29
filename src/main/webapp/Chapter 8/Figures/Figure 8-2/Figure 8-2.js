$(document).ready(
  function() {
    $('input#tmpOpen').click(
      function($e) {
        $('div#tmpDialogue').slideDown('slow');
      }
    );
    
    $('input#tmpClose').click(
      function($e) {      
        $('div#tmpDialogue').slideUp(5000);
      }
    );
  }
);