var tmpExample = {
  ready : function() {
    $('ul li').eq(3).addClass('tmpQueen');
  }
};

$(document).ready(tmpExample.ready);