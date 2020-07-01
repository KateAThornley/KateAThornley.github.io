// jQuery that will "listen" to the html niceSurvey.html
$(document).ready(function () {
  $("form").on("submit", function () {
    $.ajax({
      type: "POST",
      url: "/niceSurvey",
      data: $(this).serializeArray(),
      success: function (data) {
        $("#submit").prop("disabled", "true");
        $("#submit").text("Thank you!");
      },
    });
    return false;
  });
});
