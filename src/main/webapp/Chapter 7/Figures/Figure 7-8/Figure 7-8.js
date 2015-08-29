$(document).ready(
  function() {
    $('div#hCalendarControls > div').mousedown(
      function() {
        if (!$(this).hasClass('hCalendarSeparator')) {
          $(this).html("<div></div>");
          $(this).prev().html("<div></div>");
          $(this).next().html("<div></div>");
        }
      }
    ).mouseup(
      function() {
        if (!$(this).hasClass('hCalendarSeparator')) {
          if ($(this).hasClass('hCalendarControlToggle')) {
            $('div#hCalendarControls div').not(this).empty();
            $(this).find('div').addClass('hCalendarControlOn');
            $(this).prev().html("<div></div>");
            $(this).next().html("<div></div>");
          } else {
            $(this).empty();
            
            if (!$(this).prev().prev().find('div').length) {
              $(this).prev().empty();
            }

            if (!$(this).next().next().find('div').length) {
              $(this).next().empty();
            }

            var $isNext = ($(this).attr('id').indexOf('Next') != -1); 

            $('div#hCalendar').load(
              'Figure%207-8%20' + ($isNext? 'Next' : 'Previous') + '.html'
            );
          }
        }
      }
    );

    $.getScript(
      '../../../Source Code/jQuery/jQuery.color.js',
      function() {
        $('table.hCalendar td').click(
          function() {
            $(this)
              .animate({backgroundColor: 'lightgrey'}, 1000)
              .animate({backgroundColor: 'lightblue'}, 1000);
          }
        );
      }
    );
  }
);