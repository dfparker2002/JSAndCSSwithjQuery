$(document).ready(
  function() {
    $('input#tmpDate').datepicker({
      minDate: new Date(2000, 0, 1),
      maxDate: new Date(2002, 0, 1)
    });
  }
);