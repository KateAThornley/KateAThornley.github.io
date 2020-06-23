// Function to verify that the phone number is correct.
// Here, I validate for (12345), but you have to change that for a phone validation
// Tutorials on Regular expressions
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Regular_Expressions
// https://flaviocopes.com/javascript-regular-expressions/
// Regular expressions can get complex, you can think in terms of a series of characters
// or numbers
function validatePhone(txtPhone) {
  var a = document.getElementById(txtPhone).value;
  // This filter asks for something like (12345), so parentheses with any number (at least 1)
  // of digits
  var filter = /\b\d{4}[ -]?\d{4}[ -]?\d{4}[ -]?\d{4}\b/;
  if (filter.test(a)) {
    return true;
  } else {
    return false;
  }
}

function validateCard(txtCard) {
  var a = document.getElementById(txtPhone).value;
  // This filter asks for something like (12345), so parentheses with any number (at least 1)
  // of digits
  var filter = /^(?:4[0-9]{12}(?:[0-9]{3})?|[25][1-7][0-9]{14}|6(?:011|5[0-9][0-9])[0-9]{12}|3[47][0-9]{13}|3(?:0[0-5]|[68][0-9])[0-9]{11}|(?:2131|1800|35\d{3})\d{11})$/;
  if (filter.test(a)) {
    return true;
  } else {
    return false;
  }
}

// Using date restrictions on datepicker
// Document of datepicker is here: https://api.jqueryui.com/datepicker/
// The following code shows how to set specific dates to exclude, as well as Sundays (Day 0)
// Make sure in your version that you associate Days to remove with Experts (e.g. John doesn't work Mondays)
var unavailableDates = ["06/29/2020", "07/07/2020", "07/10/2020"];
const setDateFormat = "mm/dd/yy";

function disableDates(date) {
  // Sunday is Day 0, disable all Sundays
  if (date.getDay() == 0) return [false];
  var string = jQuery.datepicker.formatDate(setDateFormat, date);
  return [unavailableDates.indexOf(string) == -1];
}

// HERE, JQuery "LISTENING" starts
$(document).ready(function () {
  // phone validation, it calls validatePhone
  // and also some feedback as an Alert + putting a value in the input that shows the format required
  // the "addClass" will use the class "error" defined in style.css and add it to the phone input
  // The "error" class in style.css defines yellow background and red foreground
  $("#phone").on("change", function () {
    if (!validatePhone("phone")) {
      alert(
        "Incorrect format for phone number:\n Please format number as example: 123-456-7890"
      );
      $("#phone").val("XXX-XXX-XXXX");
      $("#phone").addClass("error");
    } else {
      $("#phone").removeClass("error");
    }
  });

  $("#debit").on("change", function () {
    if (!validatePhone("debit")) {
      alert(
        "Incorrect format for credit card number:\n Please format number as example: 1234 1234 1234 1234"
      );
      $("#debit").val("XXXX XXXX XXXX XXXX");
      $("#debit").addClass("error");
    } else {
      $("#debit").removeClass("error");
    }
  });

  // To change the style of the calender, look in jqueryui.com, under Themes, in the ThemeRoller Gallery
  // You can try different themes (the names are under the calendars) / This is Excite Bike
  // To use a different theme you must include its css in your HTML file.
  // The one I included in my HTML is the Excite Bike, but you can try others

  // Also, here is a good tutorial for playing with the datepicker in https://webkul.com/blog/jquery-datepicker/
  // Datepicker is also documented as one of the widgets here: https://api.jqueryui.com/category/widgets/
  $("#dateTimeInput").datepicker({
    dateFormat: setDateFormat,
    // no calendar before June 1rst 2020
    minDate: new Date("05/01/2020"),
    maxDate: "+2M",
    // used to disable some dates
    beforeShowDay: $.datepicker.noWeekends,
    beforeShowDay: disableDates,
  });

  // Look at the different events on which an action can be performed
  // https://www.w3schools.com/jquery/jquery_events.asp
  // Here, we put
  $("#debit").on("mouseenter", function () {
    $("#debit").addClass("showInput");
  });

  $("#debit").on("mouseleave", function () {
    $("#debit").removeClass("showInput");
  });

  $(function () {
    $("form#credSign").submit(function (e) {
      e.preventDefault();
      $.post("processdata.php", $(this).serialize(), function (data) {
        //Your code to process returned data goes here

        $("#postresult").text("Thank you!");
      });
    });
  });

  // https://jqueryui.com/tooltip/
  // The class "highlight" used here is predefined in JQuery UI
  // the message of the tooltip is encoded in the input (in the HTML file)
  $("#debit").tooltip({
    classes: {
      "ui-tooltip": "highlight",
    },
  });
});
