var tmpExample = {
  ready : function() {
    $('ul#tmpPlaces li.tmpExampleCity').siblings().addClass('tmpSiblings');
  }
};

$(document).ready(tmpExample.ready);