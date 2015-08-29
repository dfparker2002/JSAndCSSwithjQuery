$(document).ready(
  function() {
    $('ul').selectable({
      selecting: function(e, ui) {
        $(ui.selecting).addClass('tmpSelected');  
      },
      unselecting: function(e, ui) {
        $(ui.unselecting).removeClass('tmpSelected');   
      }
    });
  }
);