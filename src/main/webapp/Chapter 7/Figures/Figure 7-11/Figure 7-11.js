$(document).ready(
  function() {
    $('img.hFinderTreeHasChildren').click(
      function() {
        if (!$(this).next().children('ul').length) {
          var self = $(this);

          $.ajax({
            beforeSend : function() {
              $('div#hFinderActivity').show();
            }, 
            success : function() {
              $('div#hFinderActivity').hide();
            },
            complete : function($response, $status) {
              if ($status == "success" || $status == "notmodified" ) {
                self.next().html($response.responseText);

                self.next().show();
                self.attr(
                  'src',
                  '../../../Images/Finder/Down.png'
                );
              }
            },
            url : 'AJAX%20Request%20Documents/' + 
                  self.prev().attr('id').split('-').pop() + '.html'
          });
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