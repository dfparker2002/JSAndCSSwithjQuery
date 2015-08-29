$(document).ready(
  function() {
    $('input#tmpOpen').click(
      function($e) {
        $('div#tmpDialogue').fadeIn('slow');
      }
    );
    
    $('input#tmpClose').click(
      function($e) {      
        $('div#tmpDialogue').fadeOut(5000);
      }
    );
  }
);