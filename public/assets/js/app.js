// FUNCTION FOR FINISH BUTTON TO DELETE BURGER
$(".eatburger").on("click", function(event) {
    var id = $(this).data("id");

    // Send the DELETE request.
    $.ajax("/api/burgers/" + id, {
      type: "DELETE"
    }).then(
      function() {
        console.log("finish ", id);
        location.reload();
      }
    );
  });




