$(document).ready(
  function() {
    $('div#tmpExample').dialog({
      autoOpen: false,
      show: 'explode'
    });
    
    $('input#tmpOpen').click(
      function($e) {
        $('div#tmpExample').dialog('open');
      }
    );
  }
);