var tmpExample = {
  ready : function() {
    $('ul#tmpSlapstick li').slice(0, 4).addClass('tmpReallyFunny');
  }
};

$(document).ready(tmpExample.ready);