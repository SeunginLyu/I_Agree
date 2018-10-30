var removed = {};
removed['Facebook'] = true;
removed['Twitter'] = true;
removed['Instagram'] = true;
removed['Google'] = true;
removed['Linkedin'] = true;
removed['Youtube'] = true;
removed['Spotify'] = true;
removed['Pinterest'] = true;
removed['Netflix'] = true;
removed['Github'] = true;
removed['Trello'] = true;
removed['Reddit'] = true;
removed['Amazon'] = true;
removed['Ebay'] = true;
removed['Twitch']= true;
removed['Slack'] = true;

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
      removed['Linkedin'] = true;
      removed['Youtube'] = true;
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
      removed['Linkedin'] = true;
      removed['Youtube'] = true;
      removed['Reddit'] = true;
      $(".display ul.icons a").animate({
        backgroundColor:"red"
      }, 8000)
      setTimeout( progress, 2000 );

    });
});

$("#n2, #a2").click(function(){
  $([document.documentElement, document.body]).animate({
        scrollTop: $("#3").offset().top - 50
    }, 1500);
});

$( "#d3" ).click(function() {
  $(".displaytext").css("display","block");
  $("#display3").css("display", "block");
  $(".display ul.icons a").css("background-color", "transparent");
  $([document.documentElement, document.body]).animate({
        scrollTop: $("#display3").offset().top
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
      removed['Youtube'] = true;
      removed['Reddit'] = true;
      removed['Github'] = true;
      removed['Trello'] = true;
      removed['Amazon'] = true;
      removed['Ebay'] = true;
      removed['Twitch'] = true;
      $(".display ul.icons a").animate({
        backgroundColor:"red"
      }, 8000)
      setTimeout( progress, 2000 );

    });
});

$("#n3, #a3").click(function(){
  $([document.documentElement, document.body]).animate({
        scrollTop: $("#4").offset().top - 50
    }, 1500);
});


$( "#d4" ).click(function() {
  $(".displaytext").css("display","block");
  $("#display4").css("display", "block");
  $(".display ul.icons a").css("background-color", "transparent");
  $([document.documentElement, document.body]).animate({
        scrollTop: $("#display4").offset().top
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
      removed['Instagram'] = true;
      removed['Google'] = true;
      removed['Youtube'] = true;
      removed['Spotify'] = true;
      removed['Pinterest'] = true;
      removed['Reddit'] = true;
      removed['Amazon'] = true;
      removed['Ebay'] = true;
      removed['Twitch']= true;
      $(".display ul.icons a").animate({
        backgroundColor:"red"
      }, 8000)
      setTimeout( progress, 2000 );

    });
});

$("#n4, #a4").click(function(){
  $([document.documentElement, document.body]).animate({
        scrollTop: $("#5").offset().top - 50
    }, 1500);
});
