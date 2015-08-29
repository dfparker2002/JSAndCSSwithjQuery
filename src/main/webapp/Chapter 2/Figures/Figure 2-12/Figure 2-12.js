var tmpExample = {
  ready : function() {
    $('ul#tmpSlapstick li').not('li.tmpThreeStooges').addClass('tmpFunny');
  }
};

$(document).ready(tmpExample.ready);