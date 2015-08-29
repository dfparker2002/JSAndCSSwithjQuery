var tmpExample = {
  ready : function() {
    $('li#tmpYellow').nextAll().addClass('tmpSibling');
  }
};

$(document).ready(tmpExample.ready);