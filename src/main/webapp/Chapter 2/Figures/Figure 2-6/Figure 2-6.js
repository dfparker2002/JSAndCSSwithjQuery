var tmpExample = {
  ready : function() {
    $('li#tmpYellow').next().addClass('tmpSibling');
  }
};

$(document).ready(tmpExample.ready);