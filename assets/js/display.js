var removed = {};
removed['Facebook'] = false;
removed['Twitter'] = false;
removed['Instagram'] = false;
removed['Google'] = false;
removed['Linkedin'] = false;
removed['Youtube'] = false;
removed['Spotify'] = false;
removed['Pinterest'] = false;
removed['Netflix'] = false;
removed['Github'] = false;
removed['Trello'] = false;
removed['Reddit'] = false;
removed['Amazon'] = false;
removed['Ebay'] = false;
removed['Twitch']= false;
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
        value: 0,
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

        progressbar.progressbar( "value", val + 6 );

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
      }, 4000)
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
        value: 0,
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

        progressbar.progressbar( "value", val + 6 );

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
      }, 4000)
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
        value: 0,
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

        progressbar.progressbar( "value", val + 6 );

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
      }, 4000)
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
        value: 0,
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

        progressbar.progressbar( "value", val + 6 );

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
      }, 4000)
      setTimeout( progress, 2000 );

    });
});

$("#n4, #a4").click(function(){
  $([document.documentElement, document.body]).animate({
        scrollTop: $("#5").offset().top
    }, 1500);
});

$( "#d5" ).click(function() {
  $(".displaytext").css("display","block");
  $("#display5").css("display", "block");
  $(".display ul.icons a").css("background-color", "transparent");
  $([document.documentElement, document.body]).animate({
        scrollTop: $("#display5").offset().top
    }, 2000);
  $( function() {
      var progressbar = $( "#progressbar" ),
        progressLabel = $( ".progress-label" );

      progressbar.progressbar({
        value: 0,
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

        progressbar.progressbar( "value", val + 6 );

        if ( val < 99 ) {
          setTimeout( progress, 80 );
        }
      }
      removed['Twitter'] = true;
      removed['Pinterest'] = true;
      removed['Github'] = true;
      removed['Amazon'] = true;
      removed['Ebay'] = true;
      $(".display ul.icons a").animate({
        backgroundColor:"red"
      }, 4000)
      setTimeout( progress, 2000 );

    });
});

$("#n5, #a5").click(function(){
  $([document.documentElement, document.body]).animate({
        scrollTop: $("#6").offset().top
    }, 1500);
});

$( "#d6" ).click(function() {
  $(".displaytext").css("display","block");
  $("#display6").css("display", "block");
  $(".display ul.icons a").css("background-color", "transparent");
  $([document.documentElement, document.body]).animate({
        scrollTop: $("#display6").offset().top
    }, 2000);
  $( function() {
      var progressbar = $( "#progressbar" ),
        progressLabel = $( ".progress-label" );

      progressbar.progressbar({
        value: 0,
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

        progressbar.progressbar( "value", val + 6 );

        if ( val < 99 ) {
          setTimeout( progress, 80 );
        }
      }
      removed['Facebook'] = true;
      removed['Google'] = true;
      removed['Linkedin'] = true;
      removed['Spotify'] = true;
      removed['Pinterest'] = true;
      removed['Netflix'] = true;
      removed['Trello'] = true;
      removed['Reddit'] = true;
      removed['Amazon'] = true;
      removed['Ebay'] = true;
      removed['Twitch']= true;
      removed['Twitter'] = true;
      removed['Instagram'] = true;

      $(".display ul.icons a").animate({
        backgroundColor:"red"
      }, 4000)
      setTimeout( progress, 2000 );

    });
});

$("#n6, #a6").click(function(){
  $([document.documentElement, document.body]).animate({
        scrollTop: $("#7").offset().top
    }, 1500);
});

$( "#d7" ).click(function() {
  $(".displaytext").css("display","block");
  $("#display7").css("display", "block");
  $(".display ul.icons a").css("background-color", "transparent");
  $([document.documentElement, document.body]).animate({
        scrollTop: $("#display7").offset().top
    }, 2000);
  $( function() {
      var progressbar = $( "#progressbar" ),
        progressLabel = $( ".progress-label" );

      progressbar.progressbar({
        value: 0,
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

        progressbar.progressbar( "value", val + 6 );

        if ( val < 99 ) {
          setTimeout( progress, 80 );
        }
      }

      removed['Linkedin'] = true;


      $(".display ul.icons a").animate({
        backgroundColor:"red"
      }, 4000)
      setTimeout( progress, 2000 );

    });
});

$("#n7, #a7").click(function(){
  $([document.documentElement, document.body]).animate({
        scrollTop: $("#8").offset().top
    }, 1500);
});

$( "#d8" ).click(function() {
  $(".displaytext").css("display","block");
  $("#display8").css("display", "block");
  $(".display ul.icons a").css("background-color", "transparent");
  $([document.documentElement, document.body]).animate({
        scrollTop: $("#display8").offset().top
    }, 2000);
  $( function() {
      var progressbar = $( "#progressbar" ),
        progressLabel = $( ".progress-label" );

      progressbar.progressbar({
        value: 0,
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

        progressbar.progressbar( "value", val + 6 );

        if ( val < 99 ) {
          setTimeout( progress, 80 );
        }
      }

      removed['Linkedin'] = true;
      removed['Netflix'] = true;
      removed['Github'] = true;
      removed['Trello'] = true;
      removed['Reddit'] = true;
      removed['Twitch']= true;
      removed['Twitter'] = true;

      $(".display ul.icons a").animate({
        backgroundColor:"red"
      }, 4000)
      setTimeout( progress, 2000 );

    });
});

$("#n8, #a8").click(function(){
  $([document.documentElement, document.body]).animate({
        scrollTop: $("#9").offset().top
    }, 1500);
});

$( "#d9" ).click(function() {
  $(".displaytext").css("display","block");
  $("#display9").css("display", "block");
  $(".display ul.icons a").css("background-color", "transparent");
  $([document.documentElement, document.body]).animate({
        scrollTop: $("#display9").offset().top
    }, 2000);
  $( function() {
      var progressbar = $( "#progressbar" ),
        progressLabel = $( ".progress-label" );

      progressbar.progressbar({
        value: 0,
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

        progressbar.progressbar( "value", val + 6 );

        if ( val < 99 ) {
          setTimeout( progress, 80 );
        }
      }

      removed['Facebook'] = true;
      removed['Spotify'] = true;
      removed['Pinterest'] = true;
      removed['Github'] = true;
      removed['Trello'] = true;
      removed['Reddit'] = true;
      removed['Twitch']= true;
      removed['Twitter'] = true;
      removed['Instagram'] = true;
      removed['Youtube'] = true;

      $(".display ul.icons a").animate({
        backgroundColor:"red"
      }, 4000)
      setTimeout( progress, 2000 );

    });
});

$("#n9, #a9").click(function(){
  $([document.documentElement, document.body]).animate({
        scrollTop: $("#10").offset().top
    }, 1500);
});

$( "#d10" ).click(function() {
  $(".displaytext").css("display","block");
  $("#display10").css("display", "block");
  $(".display ul.icons a").css("background-color", "transparent");
  $([document.documentElement, document.body]).animate({
        scrollTop: $("#display10").offset().top
    }, 2000);
  $( function() {
      var progressbar = $( "#progressbar" ),
        progressLabel = $( ".progress-label" );

      progressbar.progressbar({
        value: 0,
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

        progressbar.progressbar( "value", val + 6 );

        if ( val < 99 ) {
          setTimeout( progress, 80 );
        }
      }

      removed['Pinterest'] = true;
      removed['Youtube'] = true;

      $(".display ul.icons a").animate({
        backgroundColor:"red"
      }, 4000)
      setTimeout( progress, 2000 );

    });
});

$("#n10, #a10").click(function(){
  $([document.documentElement, document.body]).animate({
        scrollTop: $("#company-grid").offset().top
    }, 1500);

  markUnavailableCompanies();
});

function markUnavailableCompanies() {
  for (let company in removed) {
    if (removed[company]) {
      companyId = "#" + company + "-grid";
      $(companyId).addClass("unavailable-company");
    }
  }

  $(".unavailable-company").animate({
    backgroundColor:"red"
  }, 5000);
}
