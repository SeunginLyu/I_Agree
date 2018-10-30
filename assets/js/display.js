var removed = {};
removed['Facebook'] = false;
removed['Twitter'] = false;
removed['Instagram'] = false;
removed['Google'] = false;
removed['LinkedIn'] = false;
removed['YouTube'] = false;
removed['Reddit'] = false;
removed['Amazon'] = false;
removed['Ebay'] = false;
removed['Slack'] = false;

$( "#d1" ).click(function() {
  $(".displaytext").css("display","block");
  $("#display1").css("display", "block");
  $(".display ul.icons a").css("background-color", "transparent");
  $([document.documentElement, document.body]).animate({
        scrollTop: $("#display1").offset().top
    }, 1500);

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
          $(".displaytext").css("display","none");
        }
      });

      function progress() {
        var val = progressbar.progressbar( "value" ) || 0;

        progressbar.progressbar( "value", val + 2 );

        if ( val < 99 ) {
          setTimeout( progress, 80 );
        }
      }
      removed['Facebook'] = true;
      removed['Twitter'] = true;
      removed['Instagram'] = true;
      removed['Google'] = true;
      removed['LinkedIn'] = true;
      removed['YouTube'] = true;
      removed['Reddit'] = true;
      removed['Amazon'] = true;
      removed['Ebay'] = true;
      removed['Slack'] = true;
      $(".display ul.icons a").animate({
        backgroundColor:"red"
      }, 8000)
      setTimeout( progress, 2000 );
    });
});
$("#n1").click(function(){
  $([document.documentElement, document.body]).animate({
        scrollTop: $("#2").offset().top
    }, 2000);
});

$( "#d2" ).click(function() {
  $(".displaytext").css("display","block");
  $("#display2").css("display", "block");
  $(".display ul.icons a").css("background-color", "transparent");
  $([document.documentElement, document.body]).animate({
        scrollTop: $("#display2").offset().top
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
          $(".displaytext").css("display","none");
        }
      });

      function progress() {
        var val = progressbar.progressbar( "value" ) || 0;

        progressbar.progressbar( "value", val + 2 );

        if ( val < 99 ) {
          setTimeout( progress, 80 );
        }
      }
      removed['Facebook'] = true;
      removed['Twitter'] = true;
      removed['LinkedIn'] = true;
      removed['YouTube'] = true;
      removed['Reddit'] = true;
      $(".display ul.icons a").animate({
        backgroundColor:"red"
      }, 8000)
      setTimeout( progress, 2000 );

    });
});
$("#n2").click(function(){
  $([document.documentElement, document.body]).animate({
        scrollTop: $("#3").offset().top
    }, 1500);
});
