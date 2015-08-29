$(document).ready(
  function() {
    $('div#tmpExample').dialog({
      autoOpen: false,
      show: 'explode',
      close: function(e, ui) {
        alert(this.id);
      }
    });
    
    $('input#tmpOpen').click(
      function($e) {
        $('div#tmpExample').dialog('open');
      }
    );
  }
);