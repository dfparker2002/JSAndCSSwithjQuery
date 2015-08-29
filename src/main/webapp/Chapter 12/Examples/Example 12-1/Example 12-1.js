var $$ = $.fn;

$$.extend({
  SelectElement: function() {
    $(this).find('div.hFinderIcon')
      .addClass('hFinderIconSelected');

    $(this).find('div.hFinderDirectoryName span')
      .addClass('hFinderDirectoryNameSelected');

    $.each(
      this,
      function() {
        if ($.inArray(this, $$.Finder.SelectedElements) == -1) {
          $$.Finder.SelectedElements.push(this);
        }
      }
    );

    return $;
  },

  UnselectElement: function() {
    $(this).find('div.hFinderIcon')
      .removeClass('hFinderIconSelected');

    $(this).find('div.hFinderDirectoryName span')
      .removeClass('hFinderDirectoryNameSelected');

    // Don't remove the item from the array, unless it is 
    // being unselected individually (as opposed to 
    // all elements being unselected)
    if (arguments[0]) {
      // Alias the selection to elements, so you can reference it 
      // from within the anonymous function passed to grep.
      var elements = this;

      if ($$.Finder.SelectedElements.length) {
        $$.Finder.SelectedElements = $.grep(
          $$.Finder.SelectedElements,
          function(item, i) {
            // If the item isn't in the selection, it should
            // be kept.
            return $.inArray(item, elements) == -1;
          }
        );
      }
    }

    return $;
  },

  Finder: {
    SelectingElements: false,
    SelectedElements: [],

    UnselectSelected: function() {
      $.each(
        $$.Finder.SelectedElements,
        function() {
          $(this).UnselectElement();
        }
      );

      $$.Finder.SelectedElements = [];
    },
    FolderOver: {
      background: 'none',
      filter: 
        "progid:DXImageTransform.Microsoft.AlphaImageLoader" +
        "(src='../../../Images/Finder/Open Folder 48x48.png', sizingMethod='crop')"
    },
    FolderOut: {
      background: 'none',
      filter: 
        "progid:DXImageTransform.Microsoft.AlphaImageLoader" +
        "(src='../../../Images/Finder/Folder 48x48.png', sizingMethod='crop')"
    }, 
    Ready: function() {
      $('div.hFinderDirectory')
        .mousedown(
          function() {
            if (!$$.Finder.SelectingElements) {
              // Unselect all selected
              $$.Finder.UnselectSelected();

              // Select this element.
              $(this).SelectElement();
            }
          }
        )
        .draggable({
          helper: 'clone',
          opacity: 0.5
        })
        .droppable({
          accept: 'div.hFinderDirectory',
          hoverClass: 'hFinderDirectoryDrop',
          over: function(e, ui) { 
            if ($.browser.msie && $.browser.version == 6.0) {
              $(this).find('div.hFinderIcon div').css(
                $$.Finder.FolderOver      
              );
            }
          },
          out: function(e, ui) {
            if ($.browser.msie && $.browser.version == 6.0) {
              $(this).find('div.hFinderIcon div').css(
                $$.Finder.FolderOut 
              );
            }
          },
          drop: function(e, ui) {
            var $path = ui.draggable.attr('title');
            // Do something with the path

            // Remove the element that was dropped.
            ui.draggable.remove();
          }
        });

      // Make it possible to select folders and files by 
      // drawing a box with the mouse.
      $('div#hFinderFiles').selectable({
        start: function(e, ui) {
          // Selection has started, prevent the selection 
          // of individual elements
          $$.Finder.SelectingElements = true;

          // Unselect anything already selected
          $$.Finder.UnselectSelected();
        },
        stop: function(e, ui) {
          // Allow the individual selection of elements again.
          $$.Finder.SelectingElements = false;
        },
        selecting: function(e, ui) {
          if (ui.selecting) {            
            $(ui.selecting).SelectElement();
          }
        },
        unselecting: function(e, ui) {
          $(ui.unselecting).UnselectElement(true);
        }
      });
    }
  }
});

$(document).ready($$.Finder.Ready);