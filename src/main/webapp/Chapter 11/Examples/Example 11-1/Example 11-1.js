$(document).ready(
  function() {
    $('li.hFinderCategoryFile').mousedown(
      function() {
        $('li.hFinderCategoryFile').not(this)
          .removeClass('hFinderCategoryFileSelected');

        $(this).addClass('hFinderCategoryFileSelected');
      }
    );

    $('ul#hFinderCategoryFiles').sortable();
  }
);