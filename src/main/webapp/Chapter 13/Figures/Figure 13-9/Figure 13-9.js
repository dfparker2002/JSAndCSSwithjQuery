$(document).ready(
  function() {
    $('ul').accordion({
      fillSpace: true,
      event: 'mouseover',
      active: 'h4.tmpSelected',
      header: 'h4',
      selectedClass: 'tmpContentSelected'
    });
  }
);