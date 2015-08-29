$(document).ready(
  function() {
    $('div.tmpBind').bind(
      'mouseover',
      function() {
        $(this).find('div').addClass('tmpExampleOver');
      }
    ).bind(
      'mouseout',
      function() {
        $(this).find('div').removeClass('tmpExampleOver');
      }
    ).bind(
      'click',
      function() {
        if ($(this).find('div').hasClass('tmpExampleOn')) {
          $(this).find('div').removeClass('tmpExampleOn');
        } else {
          $(this).find('div').addClass('tmpExampleOn');
        }
      }
    );
    
    $('div.tmpIndividual').mouseover(
      function() {
        $(this).find('div').addClass('tmpExampleOver');
      }
    ).mouseout(
      function() {
        $(this).find('div').removeClass('tmpExampleOver');
      }
    ).click(
      function() {
        if ($(this).find('div').hasClass('tmpExampleOn')) {
          $(this).find('div').removeClass('tmpExampleOn');
        } else {
          $(this).find('div').addClass('tmpExampleOn');
        }
      }
    );
    
    $('div.tmpPattern').hover(
      function() {
        $(this).find('div').addClass('tmpExampleOver');
      },
      function() {
        $(this).find('div').removeClass('tmpExampleOver');
      }
    ).toggle(
      function() {
        $(this).find('div').addClass('tmpExampleOn');
      },
      function() {
        $(this).find('div').removeClass('tmpExampleOn');
      }
    );

    $('div.tmpTrigger textarea').focus(
      function($e) {
        $(this).addClass('tmpFocused');
      }
    ).blur(
      function() {
        $(this).removeClass('tmpFocused');
      }
    );

    $('div.tmpTrigger textarea').focus();
  }
);