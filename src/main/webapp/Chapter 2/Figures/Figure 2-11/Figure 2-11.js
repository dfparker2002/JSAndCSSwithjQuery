var tmpExample = {
  ready : function() {
    $('ul').children().addClass('tmpChild');
  }
};

$(document).ready(tmpExample.ready);