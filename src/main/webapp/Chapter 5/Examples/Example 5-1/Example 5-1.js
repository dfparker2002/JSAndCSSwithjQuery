$(document).ready(
  function() {
    $('input#tmpEach').click(
      function($e) {
        $e.preventDefault();
        
        $('li').each(
          function() {
            $(this).addClass('tmpSong');   
          }
        );
      }
    );
    
    $('input#tmpFilter').click(
      function($e) {
        $e.preventDefault();

        $('ul')
          .filter('ul.tmpBeatles')
          .addClass('tmpBeatlesFiltered');
      }
    );
    
    $('input#tmpFilterCallback').click(
      function($e) {
        $e.preventDefault();
        
        $('ul')
          .filter(
            function() {
              return $(this).hasClass('tmpELO');   
            }
          )
          .addClass('tmpELOFiltered');
      }
    );
    
    $('input#tmpGrep').click(
      function($e) {
        $e.preventDefault();
        
        var $items = $('li').get();
        
        var $filtered = $.grep(
          $items,
          function($value, $key) {
            return (
              $($value).text().indexOf('the') != -1 || 
              $($value).text().indexOf('The') != -1
            ) ;
          }
        );

        $($filtered).each(
          function() {
            $(this).addClass('tmpContainsThe');
          }
        );
      }
    );

    $('input#tmpMap').click(
      function($e) {
        $e.preventDefault();

        var $songs = $('ul.tmpBeatles li').map(
          function($i) {
            $i++;
            return ($i < 10? '0' + $i : $i) + '. ' + $(this).text();
          }
        );
        
        $('ul.tmpBeatles').hide();
        $('ul.tmpBeatlesMapped').show();

        $($songs).each(
          function() {
            $('ul.tmpBeatlesMapped').append("<li>" + this + "</li>");
          }               
        );
        
      }
    );
    
    $('input#tmpMapArray').click(
      function($e) {
        $e.preventDefault();
        
        var $songs = [
          'Eldorado Overture',
          'Can\'t Get It Out of My Head',
          'Boy Blue',
          'Laredo Tornado',
          'Poor Boy (The Greenwood)',
          'Mister Kingdom',
          'Nobody\'s Child',
          'Illusions in G Major',
          'Eldorado',
          'Eldorado Finale',
          'Eldorado Instrumental Medley',
          'Dark City'
        ];
        
        var $mapped = $($songs).map(
          function($i) {
            $i++;
            return ($i < 10? '0' + $i : $i) + '. ' + this;
          }
        );
        
        $('ul.tmpELO').hide();
        $('ul.tmpELOMapped').show();
        
        $($mapped).each(
          function() {
            $('ul.tmpELOMapped').append("<li>" + this + "</li>");
          }
        );
        
        $('div.tmpAlbumELO h4').text('Electric Light Orchestra\'s Eldorado');
      }
    );
  }
);