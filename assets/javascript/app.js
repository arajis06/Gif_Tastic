// ARRAY OF CHARACTERS
var topics= ["Save By the Bell","Fresh Prince", "Full House", "Charmed", "Living Single", "Friends", "Martin", "Family Matters", "Moesha", "Seinfeld", "Boy Meets World", "Buffy the Vampire Slayer"];


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
    displayGifs();
};

//FUNCTION TO DISPLAY GIFS============================================================
function displayGifs() {

  $("button").on("click", function() {

      var show = $(this).attr("data-name");
      //ADDING GIFS URL + API KEY THAT LIMITS 10 GIFS DISPLAYED PER SHOW
      var queryURL = "https://api.giphy.com/v1/gifs/search?q=" +
              show + "&api_key=Xaectgsh7MzqCsvJR5CfR5AeJ9ZxEk53&limit=10"; 

          //CREATING AJAX CALL    
          $.ajax({
            url: queryURL,
            method: "GET"
          })
          // CALL THIS FUNCTION -After the data comes back from the API==================
          .then(function(response) {
          // If no information on topics is found, the alert the user
            if (response.pagination.total_count == 0) {
              alert("Sorry, there are no Gifs for this topic");

              var itemindex = topics.indexOf(show);
              // otherwise display button
              if (itemindex > -1) {
              topics.splice(itemindex, 1);
              renderButtons();
              }
            }
            //console.log(response);
            //SAVING RESULTS FROM API AS A VARIABLE
            var results = response.data;
            //LOOPS THROUGH GIFS AND ADD THESE VARIABLES
            for (var i = 0; i < results.length; i++) {
      
                //CREATING <DIV> TO HOLD RESULTS
                var showDiv = $('<div class="shows">');
                var rating = results[i].rating;
                //GIF CLICK TO ANIMATE text
                var clickAnimate = $("<p class = animate>").text("*Click on image to aimate!");
                //GIF RATING text
                var pRating = $("<p>").text("Rating:  " + rating.toUpperCase());
                //GIF TITLE text
                var pTitle = $("<p>").text("Title:  " + results[i].title.toUpperCase());
                //GIF URL
                var gifURL = results[i].images.fixed_height_still.url;
                // CREATING A IMG TAG
                var showGif = $("<img>")
                  //ADDING THE IMAGE SRC AND ANIMATIONS TO RESULTS[i]
                  showGif.attr("src", gifURL);
                  //showImage.attr('src', results[i].images.fixed_height_still.url);
                  showGif.attr('data-still', results[i].images.fixed_height_still.url);
                  showGif.attr('data-animate', results[i].images.fixed_height.url);
                  showGif.attr('data-state', 'still');
                  showGif.addClass ('animate-gif');

                // APPENDING THE P VAR TO THR RATING.
                showDiv.append(pRating);
                //APPENDING THE P VAR TO THE TILE
                showDiv.append(pTitle);
                // APPENDING THE SHOW IMAGE TO THE SHOW DIV
                showDiv.append(showGif);
                //APPENDING CLICK TO ANIMATE TEXT TO SHOWDIV
                showDiv.append(clickAnimate);

                //PREPENDING THE SHOWDIV TO THE "#gifs-appear-here" DIV IN THE INDEX.HTML FILE
                $("#gifs-appear-here").prepend(showDiv);

            }
            
          });
          
  })
}
//FUNCTION FOR PLAY OR PAUSING GIFS======================================
function playGifs() {
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
};

// FUNCTION CREATING A ON CLICK CALLBACK===========================================
  $("#add-show").on("click", function() {
    event.preventDefault();

    //GRABS USER SHOW INPUT
    var userInput = $("#user-input").val().trim();
    //CHECKING IF TOPIC ALREADY EXIST IN THE ARRAY
    if (topics.toString().toLowerCase().indexOf(userInput.toLowerCase()) != -1) {
      alert("TVshow already exists!");
    }
      else {
        //ADDING USER SHOW INPUT TO THE TOPIC ARRAY
        topics.push(userInput);
        //CALLING THE RENDER-BUTTONS FUNCTION TO MAKE BUTTONS AND NEW BUTTONS
        renderButtons();
        //ALLOWS USERS TO HIT ENTER KEY INSTEAD OF CLICKING THE SUBMIT BUTTON
        return false;
        };
    
  })

//EVENT LISTNER TO DISPLAY SHOW GIFS========================================================
 // Click on show button to display Gifs and other info from API
 $(document).on("click", ".show", displayGifs);
 // Click on the Gif image to animate or make it still
 $(document).on("click", ".animate-gif", playGifs);

//CALLS RENDERBUTTONS FUNCTION======================================================
renderButtons();
