$(document).ready(
  function() {
    $('input#tmpAnimate').click(
      function($e) {
        $('div#tmpDialogue').animate({
            width: '600px',
            marginLeft: '-301px'
          }, 3000
        );
      }
    );
  }
);