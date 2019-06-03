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

    // CREATING AN ON CLICK EVENT LISTNER
    $("#add-show").on("click", function() {

        //GRABS USER SHOW INPUT
        var show = $("#show-input").val().trim();

        }

      });
    });
