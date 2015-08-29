var tmpExample = {
  ready : function() {
    $('li#tmpYellow').prev().addClass('tmpSibling');
  }
};

$(document).ready(tmpExample.ready);