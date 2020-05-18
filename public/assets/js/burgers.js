// Make sure we wait to attach our handlers until the DOM is fully loaded.
$(function() {
  $(".devour-btn").on("click", function(event) {
    const id = $(this).data("id");
   
    const devour = {
      devoured: true
    };

    // Send the PUT request.
    $.ajax(`/api/burgers/${id}`, {
      type: "PUT",
      data: devour
    }).then(
      function() {
        console.log("BURGER DEVOURED");
        // Reload the page to get the updated list
        location.reload();
      }
    );
  });

  $(".create-form").on("submit", function(event) {
    // Make sure to preventDefault on a submit event.
    event.preventDefault();

    const newBurger = {
      name: $("#newBurg").val().trim(),
      devoured: 0
    };

    // Send the POST request.
    $.ajax("/api/burgers", {
      type: "POST",
      data: newBurger
    }).then(
      function() {
        console.log("created new burger");
        // Reload the page to get the updated list
        location.reload();
      }
    );
  });
});