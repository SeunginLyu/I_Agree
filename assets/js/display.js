var removed = [];

$( "#d1" ).click(function() {
  $("#display1").css("display", "block");
  $([document.documentElement, document.body]).animate({
        scrollTop: $("#display1").offset().top
    }, 2000);
  $( function() {
      var progressbar = $( "#progressbar" ),
        progressLabel = $( ".progress-label" );

      progressbar.progressbar({
        value: false,
        change: function() {
          progressLabel.text( progressbar.progressbar( "value" ) + "%" );
        },
        complete: function() {
          progressLabel.text( "Services Removed" );
          $(".displaytext").text("");
        }
      });

      function progress() {
        var val = progressbar.progressbar( "value" ) || 0;

        progressbar.progressbar( "value", val + 2 );

        if ( val < 99 ) {
          setTimeout( progress, 80 );
        }
      }

      setTimeout( progress, 2000 );
    });
});

$(document).ready(function() {

});
