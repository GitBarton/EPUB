
var encoded = "Ne tenons pas compte de la politique de nos voisins du sud ici " + ":)";



function play(){
    var audio = document.getElementById("audio");
    audio.play();

              }



// For the OptGroup 

// this is really basic of course - could use some refining no doubt.

$("select").on("change click", "option, optgroup", function(e) {
    var $this = $(this), $opts;
  
    if ($this.is("option")) {
      e.stopPropagation();
      return;
    }
    else {
      $opts = $this.find("option");
      if (e.ctrlKey) {
        //need to inverse the current selection, let's check the first el.
        if ($opts.first().attr("selected") !== undefined) {
          $opts.removeAttr("selected");
          $this.closest("select").trigger("blur"); //need to trigger this so the list actually updates.
        }
        else {
          $opts.attr("selected", "selected");
        }
        return;
      }
      else {
          $opts.attr("selected", "selected");
      }
    }
  });



////////////////////////////////////////////////////////////////////////////////////