$(document).ready(
  function() {
    $('input').click(
      function($e) {
        $e.preventDefault();

        switch (this.id) {
          case 'tmpGetHTML': {
            alert($(this).prev().html());
            break;
          }
          case 'tmpGetText': {
            alert($(this).prev().text());
            break;
          }
          case 'tmpSetHTML': {
            $(this).prev().html(
              "<b>Set HTML Content.</b>"
            );
            break;
          }
          case 'tmpSetText': {
            $(this).prev().text(
              "<b>Set Text Content.</b>"  
            );
            break;
          }
          case 'tmpSetMultiple': {
            $(this).prev().find('span').html(
              "<b>Set content on multiple items.</b>"      
            );
            break;
          }
          case 'tmpAppend': {
            $(this).prev().append(
              " <b>This content is appended.</b>"
            );
            break;
          }
          case 'tmpPrepend': {
            $(this).prev().prepend(
              "<b>This content is prepended.</b> "
            );
            break;
          }
          case 'tmpBefore': {
            $('div.tmpBeside').find('span.tmpReference').before(
              "<span class='tmpReferenceBefore'></span>"
            );
            break;
          }
          case 'tmpAfter': {
            $('div.tmpBeside').find('span.tmpReference').after(
              "<span class='tmpReferenceAfter'></span>"
            );
            break;
          }
          case 'tmpBeforeSelection': {
            $('span.tmpReferenceBefore.tmpTemplate').insertBefore(
              'div.tmpBesideSelection span.tmpReference'  
            );
            break;
          }
          case 'tmpAfterSelection': {
            $('span.tmpReferenceAfter.tmpTemplate').insertAfter(
              'div.tmpBesideSelection span.tmpReference'  
            );
            break;
          }
          case 'tmpWrap': {
            $('p').wrap("<div class='tmpWrapper'></div>");
            break;
          }
          case 'tmpWrapAll': {
            $('body > *').wrapAll("<div class='tmpWrapAll'></div>");
            break;
          }
          case 'tmpWrapInner': {
            $('p').wrapInner("<span class='tmpWrapInner'></span>");
            break;
          }
        }
      }
    );
  }
);