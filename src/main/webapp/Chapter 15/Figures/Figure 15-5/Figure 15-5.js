$(document).ready(
  function() {
    $('div#tmpExample').dialog({
      autoOpen: false
    });
      
    $('input#tmpOpen').click(
      function($e) {
        $('div#tmpExample').dialog('open');
      }
    );
  }
);