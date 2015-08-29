var tmpExample = {
  ready : function() {
    $('ul#tmpSlapstick li').slice(5).addClass('tmpReallyFunny');
  }
};

$(document).ready(tmpExample.ready);