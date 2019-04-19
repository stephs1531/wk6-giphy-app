// ------------------------------ Initial Array of Animals -------------------------
var topics = ["tardis", "angels", "dalek", "Matt Smith"];
console.log(topics);


$(document).ready(function () {
    renderButtons();

// ----------------------- function to render HTML to show buttons --------------------------

function showGifs() {

    var gif = $(this).attr("data-name");
    console.log(gif);
    console.log(this);
    // var queryURL = "http://api.giphy.com/v1/gifs/search?q=" + gif + "&api_key=LY6T0m3jd51iZ1d9n4FS1MIzm0tKX86o&limit=5";
    var queryURL = "https://api.giphy.com/v1/gifs/search?api_key=LY6T0m3jd51iZ1d9n4FS1MIzm0tKX86o&q=" + gif + "&limit=10&offset=0&lang=en";

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
        var imageURL = response.data[i].images.original.url;
        console.log(imageURL);

        var p = $("<p>").text("Rating: " + rating);

        var gifImage = $("<img>");
        // gifImage.attr("src", imageURL);
        // gifImage.attr("alt", "dr who gif");
        gifImage.attr({"src": imageURL, "class": "gif-image"})
        whoDiv.attr("class", "col-3");

    //-------------------------- assign image to img div ---------------------------------
        whoDiv.append(p, gifImage);

    // ------------------------ add images to html --------------------------------------
        $("#gifs-view").prepend(whoDiv);
    } //close for loop
        

    });//close ajax call

}; //close showGifs function

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

$("#add-gif").on("click", function(event) {
    event.preventDefault();
    //get unput from search entry
    var newSearch = $("#search-input").val().trim();
    console.log(newSearch);

    //add search term to button array
    topics.push(newSearch);

    renderButtons(); //call function to actually render the buttons
});

renderButtons(); //call function to actually render the buttons

//add event listener to all buttons to run ajax call function
// $(document).on("click", "add-btn", showGifs);

$(".add-btn").on("click", function () {
    alert("I was clicked");
    showGifs();


})
}); //end document ready