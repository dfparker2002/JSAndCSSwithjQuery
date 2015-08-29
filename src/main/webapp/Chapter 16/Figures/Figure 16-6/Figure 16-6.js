$(document).ready(
  function() {
    $('div#tmpTabExample > ul').tabs({
      fx: {
        opacity: 'toggle',
        height: 'toggle',
        duration: 'slow'
      }
    });
  }
);