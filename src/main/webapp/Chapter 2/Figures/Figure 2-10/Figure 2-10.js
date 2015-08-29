var tmpExample = {
  ready : function() {
    $('li.tmpExampleCity').parents('div#tmpPlacesWrapper').addClass('tmpParent');
  }
};

$(document).ready(tmpExample.ready);