$(document).ready(
  function() {

    $('input#tmpAddAlbum').click(
      function($e) {
        $e.preventDefault();      

        $('table tbody')[0].innerHTML +=
          "<tr>\n" +
          "  <td>\n" + 
          "    <input type='text' value='Double Fantasy' size='25' />\n" + 
          "  </td>\n" +
          "  <td>1980</td>\n" +
          "</tr>\n";
      }
    );
  }
);