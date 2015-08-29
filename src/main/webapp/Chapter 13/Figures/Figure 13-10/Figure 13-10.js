$(document).ready(
  function() {
    $('ul').accordion({
      fillSpace: true,
      event: 'mouseover',
      selectedClass: 'tmpContentSelected',
      navigation: true,
      navigationFilter: function() {
        return(
          decodeURIComponent(this.href).toLowerCase() == 
          decodeURIComponent(location.href.toLowerCase())
        );
      }
    });
  }
);