// ------------------------------ Initial Array of Animals -------------------------
var topics = ["tardis", "doctor who", "dalek", "Matt Smith"];
console.log(topics);


$(document).ready(function () {
    renderButtons();

// ----------------------- function to render HTML to show buttons --------------------------

// function showGifs() {

    
function renderButtons() {
    //---------------------- Delete old animals before adding new ones --------------
    $("#gif-buttons").empty();

    //---------------------- Loop through array -----------------------------
    for (var i = 0; i < topics.length; i++) {
        var a = $("<button>"); //add button
        a.addClass("add-btn"); //give button class "gif-btn"
        a.attr("data-name", topics[i]); //assign "data-name" attribute
        a.text(topics[i]); //assign text to button
        
        //--------------------add button to html ----------------------------
        $("#gif-buttons").append(a);
    
    }
}

$("#add-gif").on("click", function(event) {
    event.preventDefault();
    //get unput from search entry
    var newSearch = $("#search-input").val().trim();
    console.log(newSearch);

    //add search term to button array
    topics.push(newSearch);

    renderButtons(); //call function to actually render the buttons
});


//add event listener to all buttons to run ajax call function
// $(document).on("click", "add-btn", showGifs);


// -------------------------- When button is clicked, make ajax call to api and generate gifs for that button -------------
$(".add-btn").on("click", function () {
    alert("I was clicked");

    // $("#gifs-view").empty();
    
    var gif = $(this).attr("data-name");
    console.log(gif);
    // var queryURL = "http://api.giphy.com/v1/gifs/search?q=" + gif + "&api_key=LY6T0m3jd51iZ1d9n4FS1MIzm0tKX86o&limit=5";
    var queryURL = "https://api.giphy.com/v1/gifs/search?api_key=LY6T0m3jd51iZ1d9n4FS1MIzm0tKX86o&q=" + gif + "&limit=10&lang=en";

    //------------------------ Create Ajax call for animal being clicked -------------------

    $.ajax ({
        url: queryURL,
        method: "GET"
    }).then(function(response) {
        console.log(response);

    // ----------------------- New div to hold response ----------------------
         var whoDiv = $("<div class='whoGif'>");


    //-------------------------- for loop to get information from each response entry ---------------------------------
        for (var i = 0; i < response.data.length; i++) {

        // ----------------------- Store rating and image info -----------------------------
        var rating = response.data[i].rating;     
        var imageURL = response.data[i].images.fixed_width.url;
        console.log(imageURL);

        var p = $("<p>").text("Rating: " + rating);

        var gifImage = $("<img>");
        var gifBlock = $("<div>").attr("class", "gifBlock");
        // gifImage.attr("src", imageURL);
        // gifImage.attr("alt", "dr who gif");
        gifImage.attr({"src": imageURL, "class": "gif-image"})
        whoDiv.attr("class", "whoDiv");

    //-------------------------- assign image to img div ---------------------------------
        gifBlock.append(p, gifImage);
        whoDiv.append(gifBlock);

    // ------------------------ add images to html --------------------------------------
        $("#gifs-view").prepend(whoDiv);
    } //close for loop
        

    });//close ajax call

    renderButtons(); //call function to actually render the buttons

// }; //close showGifs function



})
}); //end document ready