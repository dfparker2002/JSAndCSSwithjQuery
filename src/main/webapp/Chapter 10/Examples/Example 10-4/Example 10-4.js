$(document).ready(
  function() {
    $('div.hFinderDirectory').mousedown(
      function() {
        $('div.hFinderDirectory').not(this)
          .find('div.hFinderIcon')
            .removeClass('hFinderIconSelected');

        $('div.hFinderDirectory').not(this)
          .find('div.hFinderDirectoryName span')
            .removeClass('hFinderDirectoryNameSelected');

        $(this).find('div.hFinderIcon')
          .addClass('hFinderIconSelected');

        $(this).find('div.hFinderDirectoryName span')
          .addClass('hFinderDirectoryNameSelected');
      }
    );

    if (!($.browser.safari && navigator.appVersion.indexOf('Mac') != -1)) {
      $('div.hFinderDirectory').draggable({
        helper: 'clone',
        opacity: 0.5
      })
      .droppable({
        accept: 'div.hFinderDirectory',
        hoverClass: 'hFinderDirectoryDrop',
        over: function(e, ui) { 
          if ($.browser.msie && $.browser.version == 6.0) {
            $(this).find('div.hFinderIcon div').css({
              background: 'none',
              filter: 
                "progid:DXImageTransform.Microsoft.AlphaImageLoader" +
                "(src='../../../Images/Finder/Open Folder 48x48.png', sizingMethod='crop')"
            });
          }
        },
        out: function(e, ui) {
          if ($.browser.msie && $.browser.version == 6.0) {
            $(this).find('div.hFinderIcon div').css({
              background: 'none',
              filter: 
                "progid:DXImageTransform.Microsoft.AlphaImageLoader" +
                "(src='../../../Images/Finder/Folder 48x48.png', sizingMethod='crop')"
            });
          }
        },
        drop: function(e, ui) {
          var $path = ui.draggable.attr('title');
          // Do something with the path

          // Remove the element that was dropped.
          ui.draggable.remove();
        }
      });
    } else {
      // Safari Mac OS X Native API
      var dragElement;
      
      $('div.hFinderDirectory').each(
        function() {
          // jQuery's event API does not provide the dataTransfer 
          // object.        
          this.addEventListener(
            'dragstart',
            function($e) {
              // The setData method lets you save some data 
              // for the element being dragged.
              $e.dataTransfer.setData('Text', $(this).attr('title'));
              
              // Remeber the drag elemnet.
              dragElement = $(this);
            }, false
          );
          
          this.addEventListener(
            'dragenter',
            function($e) {
              // Browser default behavior is canceled.
              $e.preventDefault();
            }, false
          );

          this.addEventListener(
            'dragover',
            function($e) {
              $e.preventDefault();
              // Add the style for the folder being dragged over
              // But not if the drag element is being dragged over itself.
              if (dragElement.attr('title') != $(this).attr('title')) {
                $(this).addClass('hFinderDirectoryDrop');
              }
            }
          );

          this.addEventListener(
            'dragleave',
            function($e) {
              $e.preventDefault();
              // Remove the style when the drag item leaves the 
              // drop zone.
              $(this).removeClass('hFinderDirectoryDrop');
            }
          );
        
          this.addEventListener(
            'drop',
            function($e) {
              var $path = $e.dataTransfer.getData('Text');

              // Do something with the path
              if ($path != this.title) {
                alert(
                  'Source: ' + $path + "\n" +
                  'Destination: ' + this.title
                );
              }

              // Delete the drag element.
              //dragElement.remove();
              $e.preventDefault();
            }, false
          );
        }
      );
    }
  }
);