var tmpExample = {
  ready : function() {
    $('ul#tmpMarxBrothers li').add('ul#tmpAbbottAndCostello li').addClass('tmpReallyFunny');
  }
};

$(document).ready(tmpExample.ready);