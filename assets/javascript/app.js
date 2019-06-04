// ARRAY OF CHARACTERS
var topics= ["save by the bell","fresh prince", "full house", "charmed", "living single", "friends", "martin", "family matters", "moesha", "seinfeld", "boy meets world", "buffy the vampire slayer"];


// FUNCTION TO CREATE BUTTONS FOR EACH TOPIC=============================================
function renderButtons() {
    // THIS IS TO PREVENT REPEAT BUTTONS AND DELETE SHOWS PRIOR TO ADDING NEW SHOWS
    $("#buttons-view").empty();

    // LOPPS THROUGH THE ARRAY OF TOPICS
    for (var i = 0; i < topics.length; i++) {

    // THIS IS TO GENERATE BUTTONS FOR EACH SHOW IN THE ARRAY
        // CREATING A <BUTTON> TAG FOR EACH TOPIC
        var buttons = $("<button>");
        // Adding a class of movie-btn to our button
        buttons.addClass("show-btn");
        // Adding a data-attribute
        buttons.attr("data-name", topics[i]);
        // Providing the initial button text
        buttons.text(topics[i]);
        // Adding the buttons to the buttons-view div
        $("#buttons-view").append(buttons);

    }
}

    // FUNCTION CREATING AN ON CLICK EVENT LISTNER===========================================
    $("#add-show").on("click", function() {

        //GRABS USER SHOW INPUT
        var tvShow = $("#show-input").val().trim();
        //ADDING USER SHOW INPUT TO THE TOPIC ARRAY
        topics.push(tvShow);
        //CALLING THE RENDER-BUTTONS FUNCTION TO MAKE BUTTONS AND NEW BUTTONS
        renderButtons();
        //ALLOWS USERS TO HIT ENTER KEY INSTEAD OF CLICKING THE SUBMIT BUTTON
        return false;
        
    })


//FUNCTION TO DISPLAY GIFS============================================================
$("#gifs-appears-hear").on("click", function displayGifs() {

    var show = $(this).attr("data-name");
    //ADDING GIFS URL + API KEY THAT LIMITS 10 GIFS DISPLAYED PER SHOW
    var queryURL = "https://api.giphy.com/v1/gifs/search?q=" +
            show + "&limit=10&api_key=Xaectgsh7MzqCsvJR5CfR5AeJ9ZxEk53"; 

        //CREATING AJAX CALL    
        $.ajax({
          url: queryURL,
          method: "GET"
        })
        // CALL THIS FUNCTION -After the data comes back from the API==================
        .then(function(response) {
        
          //console.log(response);
          //SAVING RESULTS FROM API AS A VARIABLE
          var results = response.data;
          //LOOPS THROUGH GIFS AND ADD THESE VARIABLES
          for (var i = 0; i < results.length; i++) {
    
              //CREATING <DIV> TO HOLD RESULTS
              var showDiv = $("<div>");
              var p = $("<p>").text("Rating: " + results[i].rating);
    
              // CREATING A IMG TAG
              var showImage = $("<img>")
                //ADDING THE IMAGE SRC TO RESULTS[i]
                showImage.attr("src", results[i].images.fixed_height.url);
    
              // APPENDING THE P VAR TO THR CHARACTERDIV VAR.
              showDiv.append(p);
              // APPENDING THE SHOW IMAGE TO THE SHOW DIV
              showDiv.append(showImage);

              //PREPENDING THE SHOWDIV TO THE "#gifs-appear-here" DIV IN THE INDEX.HTML FILE
              $("#gifs-appear-here").prepend(showDiv);

          }
        });
})

//FUNCTION FOR PAUSING GIFS=====================================================================
$(".gif").on("click", function() {
    // THE ATTR JQUERY METHOD ALLOWS TO GET OR SET THE VALUE OF ANY ATTRIBUTE ON OUR HTML ELEMENT
    var state = $(this).attr("data-state");
    // IF THE CLICKED IMAGES'S STATE IS STILL, UPDATE SRC ATTRIBUTE TO WHAT ITS DATA-ANIMATE VALUE IS
    if (state === "still") {
      // THEN SET THE IMAGE'S DATA-STATE TO ANIMATE
      $(this).attr("src", $(this).attr("data-animate"));
      $(this).attr("data-state", "animate");
    } 
    // ELSE SET SRC TO THE DATA-STILL VALUE
    else {
      $(this).attr("src", $(this).attr("data-still"));
      $(this).attr("data-state", "still");
    }
});
     
//FUNCTION TO DISPLAY SHOW GIFS===================================================================
// $(document).on("click", ".show", displayGifs);

//CALLS RENDERBUTTONS FUNCTION
renderButtons();



  
  
        
