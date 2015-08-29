$(document).ready(
  function() {
    $('p')
      .before(
        "<h4>Quotes</h4>"
      )
      .after(
        "<p class='tmpAttribution'>\n" + 
        " - Groucho Marx\n" +
        "</p>\n"
      );
  }
);