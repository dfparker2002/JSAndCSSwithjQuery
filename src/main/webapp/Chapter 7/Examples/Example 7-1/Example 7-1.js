$(document).ready(
  function() {
    $('input#tmpFetchName').click(
      function($e) {
        $e.preventDefault();
        $.get(
          'Example 7-1.xml',
          function(xml) {
            $('input#tmpFirstName').val($(xml).find('firstName').text());
            $('input#tmpLastName').val($(xml).find('lastName').text());
          }
        );
      }
    );

    $('input#tmpFetchOther').click(
      function($e) {
        $e.preventDefault();
        $.getJSON(
          'Example 7-1.json',
          function(json) {
            $('input#tmpTitle').val(json.title);
            $('input#tmpCompany').val(json.company);
          }
        );
      }
    );

    $('input#tmpPostData').click(
      function($e) {
        $e.preventDefault();

        var $data = $('form :input').serialize();

        $('div#tmpPostedData').html(
          "<h4>Posted Data:</h4>" +
          $data
        );

        $.post(
          'Example 7-1 Post.xml',
          $data,
          function(xml) {
            if (parseInt($(xml).text()) > 0) {
              alert('Data successfully posted!');
            }
          }
        );
      }
    );
  }
);