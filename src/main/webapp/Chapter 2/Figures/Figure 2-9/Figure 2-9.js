var tmpExample = {
  ready : function() {
    $('li#tmpYellow').prevAll().addClass('tmpSibling');
  }
};

$(document).ready(tmpExample.ready);