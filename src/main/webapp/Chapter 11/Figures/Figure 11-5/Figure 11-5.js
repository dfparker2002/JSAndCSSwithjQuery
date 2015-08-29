$(document).ready(
  function() {
    $('ul').sortable({
      placeholder: 'tmpPlaceholder',
      helper: function(e, element) {
    	return $(element).clone().addClass('tmpHelper');
      },
      update : function(e, ui) {
        alert(
          $(this).sortable(
            'serialize', {
              key: 'list[]',
              expression: /^(.*)$/
            }
          )
        )  
      }
    });
  }
);