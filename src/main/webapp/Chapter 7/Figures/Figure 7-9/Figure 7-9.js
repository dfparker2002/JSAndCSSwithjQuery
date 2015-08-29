$.ajaxSetup({
  beforeSend : function() {
    $('div#hFinderActivity').show();
  },
  success : function() {
    $('div#hFinderActivity').hide();
  }
});

$(document).ready(
  function() {
    $('img.hFinderTreeHasChildren').click(
      function() {
        if (!$(this).next().children('ul').length) {
          $(this).next().load(
            'AJAX%20Request%20Documents/' +
              $(this).prev().attr('id').split('-').pop() + '.html',
            function() {
              $(this).show();
              $(this).prev().attr(
                'src',
                '../../../Images/Finder/Down.png'
              );
            }
          );
        } else {
          $(this).next().toggle();

          $(this).attr(
            'src',
            '../../../Images/Finder/' +
              ($(this).attr('src').indexOf('Down') != -1? 'Right' : 'Down') + '.png'
          );
        }
      }
    );
  }
);