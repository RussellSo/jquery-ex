// Build an application that uses jQuery to do the following:

// - >> Contains a form with two inputs for a title and rating along with a button to submit the form.
// - When the form is submitted, capture the values for each of the inputs and append them to the DOM along with a button to remove each title and rating from the DOM.
// - When the button to remove is clicked, remove each title and rating from the DOM.

// - Ensure that the rating of a movie can only be between 0 and 10.
// - Ensure that a title has at least 2 characters in it.
// - Allow users to sort alphabetically by the title of the movie or by the rating of the movie from lowest to highest and vice versa.

$("#form-container").on("click", "#button" ,function(e) {
    e.preventDefault()
    let title = $("#title").val()
    let rating = $("#rating").val()
   $("ul").append("<li>")
   $("li").text(`${title} ${rating}`)
   $("li").append("<button>")
   $("li button").addClass("delete").text("delete")
    //$("ul").next("<li>").html(`${title} ${rating} <button> delete </button>`)
    //.html(`<li>${title} ${rating} <button> Delete </button> </li> `)
    //.append($("<li>").text(title + " " + rating)).html("<button>")
   // $("li").append($("<button>").text("delete").addClass("delete"))
})

$("ul").on("click", "li", function(e) {
    $("li").remove()
    $("#title").val("")
    $("#rating").val("")
})

