$(document).ready(
  function() {
    $('table#tmp thead').insertBefore('table.tmpAlbums tbody');
    $('table#tmp tfoot').insertAfter('table.tmpAlbums tbody');
  }
);