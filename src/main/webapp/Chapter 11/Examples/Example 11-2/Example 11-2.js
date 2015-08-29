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

    $('ul#hFinderCategoryFiles').sortable({
      connectWith : [
        'ul#hFinderOtherCategoryFiles'
      ],
      placeholder: 'hFinderCategoryFilePlaceholder',
      opacity: 0.8,
      cursor: 'move'
    });
    
    $('ul#hFinderOtherCategoryFiles').sortable({
      connectWith : [
        'ul#hFinderCategoryFiles'
      ],
      placeholder: 'hFinderCategoryFilePlaceholder',
      opacity: 0.8,
      cursor: 'move'
    });
  }
);