$(document).ready(
  function() {
    $('select#hLocationCountryID').click(
      function() {
        $.getJSON(
          'Figure 7-2 ' + this.value + '.json',
          function(json) {
            // Get the ISO2 value, that's used for the 
            // file name of the flag.
            // Swap out the flag image
            $('img[alt=Country]').attr(
              'src',
              '../../../Images/Flags/' + json.ISO2.toLowerCase() + '.png'
            );

            // Remove all of the options
            $('select#hLocationStateID').empty();

            // Set the states... 
            $.each(
              json.states,
              function() {
                var $state = this.split(':');
                $('select#hLocationStateID').append(
                  "<option value='" + $state[0] + "'>" +
                  $state[1] +
                  "</option>"
                );
              }
            );

            // Change the label
            $('label[for=hLocationStateID]').text(json.label + ':');
          }
        );
      }
    );
  }
);