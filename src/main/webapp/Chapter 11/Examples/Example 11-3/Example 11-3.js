$(document).ready(
  function() {	  
    var $selectedFile;
 
    $('li.hFinderCategoryFile').mousedown(
      function() {
        if ($selectedFile && $selectedFile.length) {
          $selectedFile.removeClass('hFinderCategoryFileSelected');
        }

        $selectedFile = $(this);        
        $selectedFile.addClass('hFinderCategoryFileSelected');
      }
    );

    var saveUpdate = function(e, ui) {
      var $data = $(this).sortable(
        'serialize', {
          attribute: 'title',
          expression: /^(.*)$/,
          key: 'categoryFiles[]'
        }
      );

      alert($data);

      // Here you could go on to make an AJAX request
      // to save the sorted data on the server, which
      // might look like this:
      //
      // $.get('/path/to/server/file.php', $data);
    };

    $('ul#hFinderCategoryFiles').sortable({
      connectWith : [
        'ul#hFinderOtherCategoryFiles'
      ],
      placeholder: 'hFinderCategoryFilePlaceholder',
      opacity: 0.8,
      cursor: 'move',
      update: saveUpdate
    });
    
    $('ul#hFinderOtherCategoryFiles').sortable({
      connectWith : [
        'ul#hFinderCategoryFiles'
      ],
      placeholder: 'hFinderCategoryFilePlaceholder',
      opacity: 0.8,
      cursor: 'move',
      update: saveUpdate
    });
  }
);