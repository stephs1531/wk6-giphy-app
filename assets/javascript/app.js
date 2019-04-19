// ------------------------------ Initial Array of Animals -------------------------
var topics = ["tardis", "angels", "dalek", "Matt Smith"];
console.log(topics);

// ----------------------- function to render HTML to show buttons --------------------------

// function showGifs() {

//     var gif = $(this).attr("data-name");
//     var queryURL = "http://api.giphy.com/v1/gifs/search?q=" + gif + "&api_key=LY6T0m3jd51iZ1d9n4FS1MIzm0tKX86o&limit=5";

//     //------------------------ Create Ajax call for animal being clicked -------------------

//     $.ajax ({
//         url: queryURL,
//         method: "GET"
//     }).then(function(response) {

//     // ----------------------- New div to hold response ----------------------
//          var whoDiv = $("<div class='whoGif'>");

//     // ----------------------- Store rating info -----------------------------
//         var rating = response.rating;     

//     })
//     console.log(response);
    

// }

function renderButtons() {
    //---------------------- Delete old animals before adding new ones --------------
    $("#gif-buttons").empty();

    //---------------------- Loop through animals array -----------------------------
    for (var i = 0; i < topics.length; i++) {
        var a = $("<button>"); //add button
        a.addClass("add-btn"); //give button class "gif-btn"
        a.attr("data-name", topics[i]); //assign "data-name" attribute
        a.text(topics[i]); //assign text to button
        
        //--------------------add button to html ----------------------------
        $("#gif-buttons").append(a);
    
    }
}

renderButtons(); //call function to actually render the buttons