$(document).ready(
  function() {
    $('span.tmpSetAttr').attr('id', 'tmpSetID');

    $('span.tmpSetMultipleAttr').attr({
      title: 'Hello, World!',
      id: 'tmpHelloWorld'
    });

    $('span.tmpGetAttr').find('span').text(
      $('span.tmpGetAttr').attr('title')
    );

    $('span.tmpRemoveAttr').removeAttr('class');

    $('li').attr(
      'id',
      function() {
        return 'tmp' + $(this).text();   
      }
    );
  }
);